<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Inertia\Inertia;

class PrintshopPageController extends PageController
{

    public function index(ProductController $products, Category $categories, Product $model)
    {
        $productsList = $this->indexWithSelectedColumns($model);

        return Inertia::render($this->routeName, [
            'title' => $this->routeName,
            'dataDump' => $productsList->original['response'],
            'submenu' => $this->categoriesSubmenu,
            'responseStatus' => $productsList->original['status'],
        ]);

    }
    public function show(ProductController $products, $id)
    {
        $productsList = $products->show($id);

        return Inertia::render($this->routeName, [
            'title' => $this->routeName,
            'dataDump' => $productsList->original['response'],
            'responseStatus' => $productsList->original['status'],
        ]);

    }

    public function showByCategory(ProductController $products, Product $model, $name)
    {
        $productsList = $products->searchByCategory($name);
        if ($name === 'all') {
            $productsList = $products->indexWithSelectedColumns($model, 'Status 204: Sorry, No products found');
        }

        return Inertia::render($this->routeName, [
            'title' => $this->routeName,
            'dataDump' => $productsList->original['response'],
            'submenu' => $this->categoriesSubmenu,
            'responseStatus' => $productsList->original['status'],
        ]);

    }
    public function searchProduct(ProductController $products, $name)
    {

        $productsListByName = $products->search('name', $name);
        $productsListByDescription = $products->search('description', $name);

        if (!$productsListByName->isEmpty()) {
            $productsList = $productsListByName->merge($productsListByDescription);
        } else {
            $productsList = $productsListByDescription;
        }

        return Inertia::render($this->routeName, [
            'title' => $this->routeName,
            'dataDump' => $productsList,
            'submenu' => $this->categoriesSubmenu,
            'responseStatus' => $productsList->original['status'],
        ]);

    }
}
