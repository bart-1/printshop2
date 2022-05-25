<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {
        if (Gate::allows('isAdmin')) {
            $navRoutes = ['start', 'printshop', 'creator', 'contact', 'admin-tools'];
        } else {
            $navRoutes = ['start', 'printshop', 'creator', 'contact'];
        }

        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),

            ],
            'navRoutes' => $navRoutes,
        ]);
    }
}
