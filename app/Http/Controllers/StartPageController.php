<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Product;
use Inertia\Inertia;

class StartPageController extends PageController
{
    public function index(ProductController $product, Product $model)
    {
        $imagesCollection = Image::select()->where('purpose', 'baner')->get();

        $products = $product->indexWithSelectedColumns($model, ['id', 'acronym', 'name', 'description', 'tax', 'price', 'warehouse', 'expose_level', 'image_id'], 'Status 204: Sorry, No products found', 1);

        return Inertia::render($this->routeName, [
            'title' => $this->routeName,
            'imagesCollection' => $imagesCollection,
            'dataDump' => $products->original['response'],
        ]);

    }

}
