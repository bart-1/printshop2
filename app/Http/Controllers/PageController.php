<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class PageController extends Controller
{
    public function index(Request $request)
    {
        $cssStoredData = DB::table('css_stored_data')->get();
        $routeName = $request->route()->getName();

        if (Gate::allows('isAdmin')) {
            $routeList = ['start', 'printshop', 'creator', 'contact', 'admin-tools'];
        } else {
            $routeList = ['start', 'printshop', 'creator', 'contact'];
        }
        return Inertia::render($routeName, [
            'cssStoredData' => $cssStoredData,
            'navRoutes' => $routeList,
            'title' => $routeName,
        ]);
    }
}
