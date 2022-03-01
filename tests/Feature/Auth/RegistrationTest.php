<?php

namespace Tests\Feature\Auth;

use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RegistrationTest extends TestCase
{
    use RefreshDatabase;

    public function test_registration_screen_can_be_rendered()
    {
        $response = $this->get('/register');

        $response->assertStatus(200);
    }

    public function test_new_users_can_register()
    {

        $user = [
            'name' => 'Jan Kowalski',
            'email' => 'dom@dziwnykot.pl',
            'password' => '1111Aa&*hjj',
            'phone' => '666123123',
            'account_type' => 'private',
            'street' => 'Karowa',
            'house_number' => '6',
            'apartment_number' => '435',
            'zip_code' => '00-077',
            'city' => 'Warszawa',
            'role' => 'customer',
        ];

        $response = $this->withHeaders(['accept' => 'application/json'])->post('/register', $user);
        

        $response->dump();
        $this->assertAuthenticated();
        $response->assertRedirect(RouteServiceProvider::HOME);
    }

}
