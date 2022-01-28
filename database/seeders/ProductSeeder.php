<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([
            'symbol' => 'cal-a4-v-13',
            'name' => '13p calendar A4 vertical',
            'width' => 210,
            'height' => 297,
            'iso_size' => 'A4',
            'thickness' => 5,
            'weight' => 200,
            'tax' => 23,
            'gross_price' => 30,
            'description' => '13 cards calendar A4 vertical, both-sides print, paper 200gsm gloss',
            'elements' => 'prnt-c*13, sbs-cg-200*7, bnd-ms-xs*1, bnd-mh*1, srv-bnd-kal*1',
            'warehouse' => 1000,
        ]);
        DB::table('products')->insert([
            'symbol' => 'cal-a3-v-13',
            'name' => '13p calendar A3 vertical',
            'width' => 297,
            'height' => 420,
            'iso_size' => 'A3',
            'thickness' => 5,
            'weight' => 400,
            'tax' => 23,
            'gross_price' => 50,
            'description' => '13 cards calendar A3 vertical, both-sides print, paper 200gsm gloss',
            'elements' => 'prnt-c*26, sbs-cg-200*14, bnd-ms-xs*1, bnd-mh*1, srv-bnd-kal*1',
            'warehouse' => 500,
        ]);
    }
}
