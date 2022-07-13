<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('images')->insert([
            'name' => 'default',
            'url' => '/img/products/calendar.png',
            'purpose' => 'product',
        ]);
        DB::table('images')->insert([
            'name' => 'alphabets-g38f69c3d4_1920',
            'url' => '/img/alphabets-g38f69c3d4_1920.jpg',
            'purpose' => 'product',
        ]);
        DB::table('images')->insert([
            'name' => 'magnifying-glass-g77b3fb5f6_1920',
            'url' => '/img/magnifying-glass-g77b3fb5f6_1920.jpg',
            'purpose' => 'baner',
        ]);
        DB::table('images')->insert([
            'name' => 'mika-baumeister-PtabTe6iJ_8-unsplash',
            'url' => '/img/mika-baumeister-PtabTe6iJ_8-unsplash.jpg',
            'purpose' => 'baner',
        ]);
        DB::table('images')->insert([
            'name' => 'offset-printing-gbb11cb80f_1920',
            'url' => '/img/offset-printing-gbb11cb80f_1920.jpg',
            'purpose' => 'baner',
        ]);
        DB::table('images')->insert([
            'name' => 'printed-matter-g2264488a1_1920',
            'url' => '/img/printed-matter-g2264488a1_1920.jpg',
            'purpose' => 'baner',
        ]);
        DB::table('images')->insert([
            'name' => 'technology-g7b6d11d53_1920',
            'url' => '/img/technology-g7b6d11d53_1920.jpg',
            'purpose' => 'baner',
        ]);

    }
}
