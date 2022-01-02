<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use ClaudioDekker\Inertia\Assert;
use Tests\TestCase;

use function PHPUnit\Framework\assertEquals;

/**
 * @group RenderingTests
 * @test
 * pack of tests with pages rendering
 * by Inertia
*/

class PagesRenderingTest extends TestCase
{
    /**
     * @dataProvider providePagesNames
     */

    public function test_route_return_ok_status(string $dataProvider):void
    {
        $response = $this->get('/'.$dataProvider);
        $response -> assertStatus(200);
    }
    /**
     * @dataProvider providePagesNames
     */

    public function test_inertia_can_render_page_by_route(string $dataProvider):void
    {
        $response = $this->get('/'.$dataProvider);
        $response->assertInertia(fn (Assert $page) => $page->url('/'.$dataProvider));
    }

    /**
     * @dataProvider providePagesNames
     */
    public function test_inertia_can_find_component_by_route(string $dataProvider):void
    {
        $findChar = strpos($dataProvider, '-');

        if ($findChar) {
            $explodeString = explode('-', $dataProvider);
            $newArray = array_map('ucfirst', $explodeString);
            $properComponentName = implode($newArray);
            $response = $this->get('/'.$dataProvider);
            $response->assertInertia(fn (Assert $page) => $page->component($properComponentName));
        } else {
            $response = $this->get('/'.$dataProvider);
            $response->assertInertia(fn (Assert $page) => $page->component(ucfirst(strval($dataProvider))));
        }
    }


    public function providePagesNames():array
    {
        return [
            'hello' => ['hello'],
            'printshop'=>['printshop'],
            'creator'=>['creator'],
            'contact'=>['contact'],
            'admin-tools'=>['admin-tools'],
        ];
    }
}
