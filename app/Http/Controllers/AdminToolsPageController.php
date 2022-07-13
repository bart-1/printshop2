<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class AdminToolsPageController extends PageController
{

    public function index(CssController $css)
    {

        $cssStoredData = $css->download();

        return Inertia::render($this->routeName, [
            'title' => $this->routeName,
            'submenu' => $this->adminToolsSubmenu,
        ]);

    }

    public function usersIndex(CssController $css, User $model, $chunk = 1)
    {
        $users = $this->indexWithSelectedColumns($model, ['id', 'name', 'role', 'phone', 'company', 'nip', 'street', 'house_number', 'apartment_number', 'zip_code', 'city'], $chunk, 'Status 204: no users found');
        $recordsTotal = DB::select(DB::raw("SELECT COUNT(*) as count FROM users"));

        $cssStoredData = $css->download();

        return Inertia::render($this->routeName, [
            'title' => $this->routeName,
            'submenu' => $this->adminToolsSubmenu,
            'dataDump' => $users->original['response'],
            'responseStatus' => $users->original['status'],
            'recordsTotal' => $recordsTotal[0]->count,
            'returnedPageNumber' => $chunk,
        ]);

    }
    public function productsIndex(CssController $css, Product $model, $chunk = 1)
    {
        $products = $this->indexWithSelectedColumns($model, ['id', 'acronym', 'name', 'description', 'tax', 'price', 'warehouse', 'expose_level', 'image_id'], $chunk, 'Status 204: no products found');
        $recordsTotal = DB::select(DB::raw("SELECT COUNT(*) as count FROM products"));

        $cssStoredData = $css->download();

        return Inertia::render($this->routeName, [
            'title' => $this->routeName,
            'submenu' => $this->adminToolsSubmenu,
            'dataDump' => $products->original['response'],
            'responseStatus' => $products->original['status'],
            'returnedPageNumber' => $chunk,
            'recordsTotal' => $recordsTotal[0]->count,
            'returnedPageNumber' => $chunk,

        ]);

    }

    public function userShow(UserController $users, $id)
    {
        $user = $users->show($id, ['name', 'email', 'role', 'phone', 'account_type']);

        return Inertia::render($this->routeName, [
            'title' => $this->routeName,
            'submenu' => $this->adminToolsSubmenu,
            'dataDump' => $user->original['response'],
            'responseStatus' => $user->original['status'],
        ]);
    }
    public function userSearch(User $user, $name)
    {
        $searchResult = $this->searchWithSelectedColumns($user, $name, ['id', 'name', 'role', 'phone', 'company', 'nip', 'street', 'house_number', 'apartment_number', 'zip_code', 'city'], 'name', 'Status 204: no users found');

        return Inertia::render($this->routeName, [
            'title' => $this->routeName,
            'submenu' => $this->adminToolsSubmenu,
            'dataDump' => $searchResult->original['response'],
            'responseStatus' => $searchResult->original['status'],
        ]);
    }
    public function productSearch(Product $product, $name)
    {
        $searchResult = $this->searchWithSelectedColumns($product, $name, ['id', 'acronym', 'name', 'description', 'tax', 'price', 'warehouse', 'expose_level', 'image_id'], 'name', 'Status 204: no products found');

        return Inertia::render($this->routeName, [
            'title' => $this->routeName,
            'submenu' => $this->adminToolsSubmenu,
            'dataDump' => $searchResult->original['response'],
            'responseStatus' => $searchResult->original['status'],
        ]);
    }

    public function productShow(ProductController $products, $id)
    {
        $product = $products->show($id, ['id', 'acronym', 'name', 'description', 'tax', 'price', 'warehouse', 'expose_level', 'image_id']);

        return Inertia::render($this->routeName, [
            'title' => $this->routeName,
            'submenu' => $this->adminToolsSubmenu,
            'dataDump' => $product->original['response'],
            'responseStatus' => $product->original['status'],
        ]);

    }

}
