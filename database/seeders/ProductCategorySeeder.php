<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('product_category')->insert([
            'product_id' => 1,
            'category_id' => 2,
        ]);
        DB::table('product_category')->insert([
            'product_id' => 2,
            'category_id' => 2,
        ]);
        DB::table('product_category')->insert([
            'product_id' => 3,
            'category_id' => 2,
        ]);
        DB::table('product_category')->insert([
            'product_id' => 4,
            'category_id' => 2,
        ]);
        DB::table('product_category')->insert([
            'product_id' => 5,
            'category_id' => 3,
        ]);
        DB::table('product_category')->insert([
            'product_id' => 6,
            'category_id' => 3,
        ]);
        DB::table('product_category')->insert([
            'product_id' => 7,
            'category_id' => 7,
        ]);
        DB::table('product_category')->insert([
            'product_id' => 8,
            'category_id' => 7,
        ]);
    }
}
