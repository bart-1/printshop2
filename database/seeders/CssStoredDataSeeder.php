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
            'value' => '#c2bebc',
            'scope' => 'color',
        ]);
        DB::table('css_stored_data')->insert([
            'property' => '--window-background',
            'theme' => 'light',
            'value' => '#ffffff',
            'scope' => 'color',
        ]);
        DB::table('css_stored_data')->insert([
            'property' => '--text-body',
            'theme' => 'light',
            'value' => '#181818', 'scope' => 'color',

        ]);
        DB::table('css_stored_data')->insert([
            'property' => '--text-strong',
            'theme' => 'light',
            'value' => '#000000', 'scope' => 'color',

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
            'value' => '#000000', 'scope' => 'color',

        ]);
        DB::table('css_stored_data')->insert([
            'property' => '--btn-hov',
            'theme' => 'light',
            'value' => '#c2e03a', 'scope' => 'color',

        ]);
        DB::table('css_stored_data')->insert([
            'property' => '--background',
            'theme' => 'dark',
            'value' => '#242323', 'scope' => 'color',

        ]);
        DB::table('css_stored_data')->insert([
            'property' => '--window-background',
            'theme' => 'dark',
            'value' => '#0c0c0c', 'scope' => 'color',

        ]);
        DB::table('css_stored_data')->insert([
            'property' => '--text-body',
            'theme' => 'dark',
            'value' => '#cecaca', 'scope' => 'color',

        ]);
        DB::table('css_stored_data')->insert([
            'property' => '--text-strong',
            'theme' => 'dark',
            'value' => '#ffffff', 'scope' => 'color',

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
