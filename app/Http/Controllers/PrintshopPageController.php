<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PrintshopPageController extends PageController
{
    public function index(ProductController $products)
    {
        $productsList = $products->index();

        return Inertia::render($this->routeName, [
            'title' => $this->routeName,
            'products' => $productsList,
        ]);

    }
    public function show(ProductController $products, $id)
    {
        $productsList[] = $products->show($id);

        return Inertia::render($this->routeName, [
            'title' => $this->routeName,
            'products' => $productsList,
        ]);

    }
}
