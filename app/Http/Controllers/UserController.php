<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Traits\ValidateResponseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;

class UserController extends Controller
{


    /**
     * Show all resources from storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = User::all();
        return $this->validateCollection($user, "Sorry, we didn't find users");
    }

    /**
     * Show the specified resource in storage.
     *
     * @param  int  $id
     * @param  str|arr  $columns you whant to return, default value is '*' (all)
     * @return \Illuminate\Http\Response
     */
    public function show($id, $columns = '*')
    {
        $user[] = User::select($columns)->find($id);
        return $this->validateCollection($user, "Sorry, we didn't find user");
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
        $user = User::where($column, 'like', '%' . $phrase . '%')->get();
        return $this->validateCollection($user, ["Sorry, we didn't find nothing about: " . $phrase]);

    }

    /**
     * Find the specified resource in storage.
     *
     * @param  str  $role user's table, value of column 'role'.
     * @return \Illuminate\Http\Response
     */
    public function searchByRole($role)
    {
        $user = User::where('role', $role)->get();
        return $this->validateCollection($user, "Sorry, we didn't find " . $role . " user");
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
        $user = User::with('image', 'category')->where($column, $value)->get();

        return $this->validateCollection($user, "Sorry, we didn't find " . $value . " in users table.");

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
                'name' => 'required',
                'email' => 'required|email',
                'password' => 'current_password:api|required',
                'phone' => 'required',
                'account_type' => 'required',

            ]);

            $response = [$request->name . ' is created', User::create($request->all())];
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
            $user = User::find($id);
            $user->update($request->all());
            $response = [$user->name . ' is updated', $user];
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
            $user = User::find($id);
            $response = [$user->name . ' is deleted', $user->destroy()];
        } else {
            $response = ('You have no permission');
        }

        return $response($response);
    }
}
