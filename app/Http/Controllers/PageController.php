<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class PageController extends Controller
{
    public function index(Request $request)
    {
        $routeName = $request->route()->getName();

        if (Gate::allows('isAdmin')) {
            $routeList = ['start', 'printshop', 'creator', 'contact', 'admin-tools'];
        } else {
            $routeList = ['start', 'printshop', 'creator', 'contact'];
        }
        return Inertia::render($routeName, [

        'navRoutes' => $routeList,
        'title' => $routeName,
                ]);
    }
}
