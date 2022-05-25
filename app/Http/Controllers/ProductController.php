<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class ProductController extends Controller
{
    /**
     * Show all resources from storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // return DB::table('products')->get();
        return Product::all();
    }

    /**
     * Show the specified resource in storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Product::find($id);
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
        $product = Product::where($column, 'like', '%' . $phrase . '%')->get();

        if (count($product) > 0) {
            $response = ['$name', $product];
            $status = 200;
        } else {
            $response = "Sorry, we didn't find " . $phrase;
            $status = 200;
        }

        return \response($response, $status);

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
        $product = Product::where($column, $value)->get();

        if (count($product) > 0) {
            $response = ['$name', $product];
            $status = 200;
        } else {
            $response = "Sorry, we didn't find " . $value;
            $status = 200;
        }

        return \response($response, $status);

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
