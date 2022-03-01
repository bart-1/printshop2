<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CssStoredDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('css_stored_data')->insert([
            'property' => '--background',
            'theme' => 'light',
            'value' => '#d6d1cd',
            'scope' => 'color',
        ]);
        DB::table('css_stored_data')->insert([
            'property' => '--text-light',
            'theme' => 'light',
            'value' => '#e5ece9', 'scope' => 'color',

        ]);
        DB::table('css_stored_data')->insert([
            'property' => '--text-dark',
            'theme' => 'light',
            'value' => '#0e0029', 'scope' => 'color',

        ]);
        DB::table('css_stored_data')->insert([
            'property' => '--side-elements',
            'theme' => 'light',
            'value' => '#858786', 'scope' => 'color',

        ]);
        DB::table('css_stored_data')->insert([
            'property' => '--accent',
            'theme' => 'light',
            'value' => '#ab0d69', 'scope' => 'color',

        ]);
        DB::table('css_stored_data')->insert([
            'property' => '--btn-bg',
            'theme' => 'light',
            'value' => '#c87da9', 'scope' => 'color',

        ]);
        DB::table('css_stored_data')->insert([
            'property' => '--btn-txt',
            'theme' => 'light',
            'value' => '#0e0029', 'scope' => 'color',

        ]);
        DB::table('css_stored_data')->insert([
            'property' => '--btn-hov',
            'theme' => 'light',
            'value' => '#ffa21f', 'scope' => 'color',

        ]);
        DB::table('css_stored_data')->insert([
            'property' => '--background',
            'theme' => 'dark',
            'value' => '#d6d1cd', 'scope' => 'color',

        ]);
        DB::table('css_stored_data')->insert([
            'property' => '--text-dark',
            'theme' => 'dark',
            'value' => '#e5ece9', 'scope' => 'color',

        ]);
        DB::table('css_stored_data')->insert([
            'property' => '--text-dark',
            'theme' => 'dark',
            'value' => '#0e0029', 'scope' => 'color',

        ]);
        DB::table('css_stored_data')->insert([
            'property' => '--side-elements',
            'theme' => 'dark',
            'value' => '#858786', 'scope' => 'color',

        ]);
        DB::table('css_stored_data')->insert([
            'property' => '--accent',
            'theme' => 'dark',
            'value' => '#ab0d69', 'scope' => 'color',

        ]);
        DB::table('css_stored_data')->insert([
            'property' => '--btn-bg',
            'theme' => 'dark',
            'value' => '#c87da9', 'scope' => 'color',

        ]);
        DB::table('css_stored_data')->insert([
            'property' => '--btn-txt',
            'theme' => 'dark',
            'value' => '#0e0029', 'scope' => 'color',

        ]);
        DB::table('css_stored_data')->insert([
            'property' => '--btn-hov',
            'theme' => 'dark',
            'value' => '#ffa21f', 'scope' => 'color',

        ]);
    }
}
