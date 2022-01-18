<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AddNewUser extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'bart-1',
            'email' => 'studio@dziwnykot.pl',
            'password' => bcrypt('1111'),
            'phone' => '504399023',
            'account_type' => 'business',
            'company' => 'Dziwny Kot',
            'nip' => 1192341997,
            'street' => 'Budrysów',
            'house_number' => '9',
            'apartment_number' => '45',
            'zip_code' => '00-119',
            'city' => 'Warszawa',
          'role' => 'admin'

        ]);
        DB::table('users')->insert([
            'name' => 'Jan Kowalski',
            'email' => 'dom@dziwnykot.pl',
            'password' => bcrypt('1111'),
            'phone' => '666123123',
            'account_type' => 'private',
            'street' => 'Karowa',
            'house_number' => '6',
            'apartment_number' => '435',
            'zip_code' => '00-077',
            'city' => 'Warszawa',
            'role' => 'customer'

        ]);
        //
    }
}
