<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class AdminToolsPageController extends PageController
{
    public function index(CssController $css)
    {

        $cssStoredData = $css->download();

        return Inertia::render($this->routeName, [
            'title' => $this->routeName,
            'cssStoredData' => $cssStoredData,
        ]);

    }
}
