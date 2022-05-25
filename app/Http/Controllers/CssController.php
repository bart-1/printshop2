<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class CssController extends Controller
{
    public function download()
    {
        return DB::table('css_stored_data')->get();

    }
}
