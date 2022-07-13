<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Traits\ValidateResponseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class ProductController extends Controller
{
    use ValidateResponseTrait;
    /**
     * Show all resources from storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::with(['image', 'category'])->get();
        return $this->validateCollection($products, "Sorry, we find no products");

    }

    // /**
    //  * Show selected columns of all resources from storage
    //  *
    //  * @param  str|arr  $columns you whant to return, default value is '*' (all)
    //  * @return \Illuminate\Http\Response
    //  */
    // public function indexWithSelectedColumns($columns = '*')
    // {
    //     $products = Product::select($columns)->with(['image' => function($query) {$query->get()->toArray();}])->get();
    //     return $this->validateCollection($products, "Sorry, we find no products");

    // }


    /**
     * Show the specified resource in storage.
     *object
     * @param  int  $id
     * @param  str|arr  $columns you whant to return, default value is '*' (all)
     * @return \Illuminate\Http\Response
     */
    public function show($id, $columns = '*')
    {
        $product[] = Product::select($columns)->with(['image', 'category'])->find($id);
        return $this->validateCollection($product, "Sorry, we can't find this product");

    }

    /**
     * Find the specified resource in storage.
     *
     * @param  str  $column table column
     * @param  str  $phrase
     * @return \Illuminate\Http\Response
     */
    public function search($column, $phrase)
    {
        $products = Product::with(['image', 'category'])->where($column, 'like', '%' . $phrase . '%')->get();
        return $this->validateCollection($products, "Sorry, we can't find product like: " . $phrase);

    }

    /**
     * Find the specified resource in storage.
     *
     * @param  str  $categoryName category's table, value of column 'name'.
     * @return \Illuminate\Http\Response
     */
    public function searchByCategory($categoryName)
    {
        $products = Product::whereHas('category', function ($query) use ($categoryName) {
            $query->where('name', $categoryName);
        })->with('image')->get();

        return $this->validateCollection($products, "Sorry, we find no product in " . $categoryName . " category");
    }

    /**
     * Find the specified resource in storage.
     *
     * @param  str  $column table column
     * @param  int  $value
     * @return \Illuminate\Http\Response
     */
    public function searchValue($column, $value)
    {
        $product = Product::with(['image', 'category'])->where($column, $value)->get();

        return $this->validateCollection($product, "Sorry, we find no value: " . $value . " in products table");
    }

    /**
     * Create the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function create(Request $request)
    {
        if (Gate::allows('isAdmin')) {
            $request->validate([
                'acronym' => 'required',
                'slug' => 'required',
                'name' => 'required',
                'description' => 'required',
                'tax' => 'required',
                'price' => 'required',
                'expose_level' => 'required',

            ]);

            $response = [$request->name . ' is created', Product::create($request->all())];
        } else {
            $response = ('You have no permission');
        }

        return $response($response);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, $id)
    {
        if (Gate::allows('isAdmin')) {
            $product = Product::find($id);
            $product->update($request->all());
            $response = [$product->name . ' is updated', $product];
        } else {
            $response = ('You have no permission');
        }

        return $response($response);
    }

    /**
     * Delete the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function destroy($id)
    {
        if (Gate::allows('isAdmin')) {
            $product = Product::find($id);
            $response = [$product->name . ' is deleted', $product->destroy()];
        } else {
            $response = ('You have no permission');
        }

        return $response($response);
    }
}
