<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PrintFormatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('print_formats')->insert([
            'acronym' => 'A7',
            'width' => 74,
            'height' => 105,
        ]);
        DB::table('print_formats')->insert([
            'acronym' => 'A6',
            'width' => 105,
            'height' => 148,
        ]);
        DB::table('print_formats')->insert([
            'acronym' => 'A5',
            'width' => 148,
            'height' => 210,
        ]);
        DB::table('print_formats')->insert([
            'acronym' => 'A4',
            'width' => 210,
            'height' => 297,
        ]);
        DB::table('print_formats')->insert([
            'acronym' => 'A3',
            'width' => 297,
            'height' => 420,
        ]);
        DB::table('print_formats')->insert([
            'acronym' => 'A2',
            'width' => 420,
            'height' => 594,
        ]);
        DB::table('print_formats')->insert([
            'acronym' => 'A1',
            'width' => 594,
            'height' => 841,
        ]);
        DB::table('print_formats')->insert([
            'acronym' => 'A0',
            'width' => 841,
            'height' => 1189,
        ]);
        DB::table('print_formats')->insert([
            'acronym' => 'B7',
            'width' => 88,
            'height' => 125,
        ]);
        DB::table('print_formats')->insert([
            'acronym' => 'B6',
            'width' => 125,
            'height' => 176,
        ]);
        DB::table('print_formats')->insert([
            'acronym' => 'B5',
            'width' => 176,
            'height' => 250,
        ]);
        DB::table('print_formats')->insert([
            'acronym' => 'B4',
            'width' => 250,
            'height' => 353,
        ]);
        DB::table('print_formats')->insert([
            'acronym' => 'B3',
            'width' => 353,
            'height' => 500,
        ]);
        DB::table('print_formats')->insert([
            'acronym' => 'B2',
            'width' => 500,
            'height' => 707,
        ]);
        DB::table('print_formats')->insert([
            'acronym' => 'B1',
            'width' => 707,
            'height' => 1000,
        ]);
        DB::table('print_formats')->insert([
            'acronym' => 'B0',
            'width' => 1000,
            'height' => 1414,
        ]);
        DB::table('print_formats')->insert([
            'acronym' => 'DL',
            'width' => 99,
            'height' => 210,
        ]);

    }
}
