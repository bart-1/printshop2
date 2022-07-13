<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Inertia\Inertia;

class StartPageController extends PageController
{
    public function index()
    {
        $imagesCollection = Image::select()->where('purpose', 'baner')->get();

        return Inertia::render($this->routeName, [
            'title' => $this->routeName,
            'imagesCollection' => $imagesCollection,
        ]);

    }

}
