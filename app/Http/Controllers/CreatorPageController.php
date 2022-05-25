<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class CreatorPageController extends PageController
{
    public function index()
    {
        return Inertia::render($this->routeName, [
            'title' => $this->routeName,
        ]);

    }
}
