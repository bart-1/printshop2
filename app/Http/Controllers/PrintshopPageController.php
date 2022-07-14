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

        if ($name === 'all') {
            $productsList = $products->indexWithSelectedColumns($model, ['id', 'acronym', 'name', 'description', 'tax', 'price', 'warehouse', 'expose_level', 'image_id'], 'Status 204: Sorry, No products found', 1);
        } else {
            $productsList = $products->searchByCategory($name);

        }

        return Inertia::render($this->routeName, [
            'title' => $this->routeName,
            'dataDump' => $productsList->original['response'],
            'submenu' => $this->categoriesSubmenu,
            'responseStatus' => $productsList->original['status'],
        ]);

    }
    public function searchProduct(Product $product, $name)
    {
        $productsList = $this->searchWithSelectedColumns($product, $name, ['id', 'acronym', 'name', 'description', 'tax', 'price', 'warehouse', 'expose_level', 'image_id'], ['name', 'description'], 'Status 204: no products found');

        return Inertia::render($this->routeName, [
            'title' => $this->routeName,
            'dataDump' => $productsList->original['response'],
            'submenu' => $this->categoriesSubmenu,
            'responseStatus' => $productsList->original['status'],
        ]);

    }
}
