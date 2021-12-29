<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use ClaudioDekker\Inertia\Assert;
use Tests\TestCase;

class PagesRenderingTest extends TestCase
{
    public function test_is_page_rendering()
    {
        $response = $this->get('/testing');
        $response -> assertStatus(200);
    }

    public function test_is_page_rendering_with_inertia()
    {
        $response = $this->get('/testing');
        $response->assertInertia(fn (Assert $page) => $page->url('/testing'));
    }

    public function test_is_component_for_testing_page_inertia()
    {
        $response = $this->get('/testing');
        $response->assertInertia(fn (Assert $page) => $page->component('Testing'));
    }
}
