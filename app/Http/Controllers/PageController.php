<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class PageController extends Controller
{
    protected $routeName;
    protected $cssStoredData;
    protected $categoriesSubmenu;
    protected $adminToolsSubmenu;

    public function __construct(Request $request, CssController $css, Category $categories)
    {
        $this->routeName = $request->route()->getName();
        $this->cssStoredData = $css->download();
        $baseCategory = (object) ['id' => 0, 'name' => 'all'];
        $cat = $categories->all();
        $this->categoriesSubmenu = collect($cat)->concat([$baseCategory])->all();
        $this->adminToolsSubmenu = $submenu = collect([['name' => 'users'], ['name' => 'products'], ['name' => 'sale'], ['name' => 'settings']])->all();


    }

}
