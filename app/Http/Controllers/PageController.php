<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    protected $routeName;
    protected $cssStoredData;

    public function __construct(Request $request, CssController $css)
    {
        $this->routeName = $request->route()->getName();
        $this->cssStoredData = $css->download();
    }
}
