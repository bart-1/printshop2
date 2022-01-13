<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

use App\Policies\UserPolicy;
use App\Models\User;
use Illuminate\Auth\Access\Response;

use Illuminate\Foundation\Auth\User as AuthUser;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
    //    User::class => UserPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Gate::define('isAdminRoute', function (User $user) {
            return $user->admin == 1;
            //    ? Response::allow(array('start', 'printshop', 'creator', 'contact', 'admin-tools'))
        //    : Response::deny(array('start', 'printshop', 'creator', 'contact'));
        });

        //
    }
}
