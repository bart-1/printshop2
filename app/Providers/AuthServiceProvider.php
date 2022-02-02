<?php

namespace App\Providers;

use App\Enums\UserRole;
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
        User::class => UserPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        $this->defineGateForUserRole('isAdmin', UserRole::ADMIN);
        $this->defineGateForUserRole('isEmployee', UserRole::EMPLOYEE);
        $this->defineGateForUserRole('isRegisteredUser', UserRole::USER);
    }

    private function defineGateForUserRole(string $name, string $role)
    {
        Gate::define($name, function (User $user) use ($role) {
            return $user->role === $role;
        });
    }
}
