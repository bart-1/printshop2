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
            'acronym' => 'cal-a4-13-v',
            'slug' => 'calendar-A4-13p-vertical',
            'name' => '13-sto stronnicowy, pionowy kalendarz A4',
            'description' => '13 cards calendar A4 vertical, both-sides print, paper 200gsm gloss',
            'width' => 210,
            'height' => 297,
            'thickness' => 5,
            'weight' => 200,
            'tax' => 23,
            'price' => 30,
            'components' => 'prnt-c*13, sbs-cg-200*7, bnd-ms-xs*1, bnd-mh*1, srv-bnd-kal*1',
            'warehouse' => 1000,
        ]);
        DB::table('products')->insert([
            'acronym' => 'cal-a3-13-v',
            'slug' => 'calendar-A3-13p-vertical',
            'name' => '13-sto stronnicowy, pionowy kalendarz A3',
            'description' => '13 cards calendar A3 vertical, both-sides print, paper 200gsm gloss',
            'width' => 297,
            'height' => 420,
            'thickness' => 5,
            'weight' => 400,
            'tax' => 23,
            'price' => 50,
            'components' => 'prnt-c*26, sbs-cg-200*14, bnd-ms-xs*1, bnd-mh*1, srv-bnd-kal*1',
            'warehouse' => 500,
        ]);
        DB::table('products')->insert([
            'acronym' => 'cal-a4-13-h',
            'slug' => 'calendar-A4-13p-horizontal',
            'name' => '13-sto stronnicowy, poziomy kalendarz A4',
            'description' => '13 cards calendar A4 horizontal, both-sides print, paper 200gsm gloss',
            'width' => 210,
            'height' => 297,
            'thickness' => 5,
            'weight' => 200,
            'tax' => 23,
            'price' => 30,
            'components' => 'prnt-c*13, sbs-cg-200*7, bnd-ms-xs*1, bnd-mh*1, srv-bnd-kal*1',
            'warehouse' => 1000,
        ]);
        DB::table('products')->insert([
            'acronym' => 'cal-a3-13-h',
            'slug' => 'calendar-A3-13p-horizontal',
            'name' => '13-sto stronnicowy, poziomy kalendarz A3',
            'description' => '13 cards calendar A3 horizontal, both-sides print, paper 200gsm gloss',
            'width' => 297,
            'height' => 420,
            'thickness' => 5,
            'weight' => 400,
            'tax' => 23,
            'price' => 50,
            'components' => 'prnt-c*26, sbs-cg-200*14, bnd-ms-xs*1, bnd-mh*1, srv-bnd-kal*1',
            'warehouse' => 500,
        ]);
        DB::table('products')->insert([
            'acronym' => 'bc-9050-40',
            'slug' => 'bc 90x50 4+0 ',
            'name' => 'wizytówka 90x50mm 4+0',
            'description' => 'zestaw 100szt wizytówek jednostronnych na papierze 350g/m2',
            'height' => 50,
            'thickness' => 35,
            'weight' => 158,
            'tax' => 23,
            'price' => 70,
            'components' => 'prnt-c*20, p-s-350*10, i-cut, i-bcbox',
            'warehouse' => 500,
        ]);
        DB::table('products')->insert([
            'acronym' => 'bc-9050-44',
            'slug' => 'bc 90x50 4+4 ',
            'name' => 'wizytówka 90x50mm dwustronna',
            'description' => 'zestaw 100szt wizytówek dwustronnych na papierze 350g/m2',
            'width' => 90,
            'height' => 50,
            'thickness' => 35,
            'weight' => 158,
            'tax' => 23,
            'price' => 70,
            'components' => 'prnt-c*20, p-s-350*10, i-cut, i-bcbox',
            'warehouse' => 500,
        ]);
        DB::table('products')->insert([
            'acronym' => 'pos-b1-200',
            'slug' => 'poster B1 200g',
            'name' => 'plakat B1 200g/m2',
            'description' => 'plakat B1 na papierze 200g/m2',
            'width' => 700,
            'height' => 1000,
            'thickness' => 0.2,
            'weight' => 140,
            'tax' => 23,
            'price' => 55,
            'components' => 'prnt-c-w*0.7 pr-s-200*0.7 i-cut',
            'warehouse' => 500,
        ]);
        DB::table('products')->insert([
            'acronym' => 'pos-a1-200',
            'slug' => 'poster A1 200g',
            'name' => 'plakat A1 200g/m2',
            'description' => 'plakat A1 na papierze 200g/m2',
            'width' => 594,
            'height' => 841,
            'thickness' => 0.2,
            'weight' => 100,
            'tax' => 23,
            'price' => 35,
            'components' => 'prnt-c-w*0.5 pr-s-200*0.5 i-cut',
            'warehouse' => 500,
        ]);
    }
}
