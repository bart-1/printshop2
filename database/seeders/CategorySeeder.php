<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{

    protected $categories = [
        'tshirts',
        'calendars',
        'business-cards',
        'leeflets',
        'invitations',
        'cups',
        'posters',
        'prints',
        'stamps',
        'brochures',
        'stickers',
        'stands',
    ];
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->categories as $value) {
            DB::table('categories')->insert([
                'name' => $value,
            ]);}

    }
}
