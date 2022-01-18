<?php

namespace Tests\Feature;

use App\Models\User;
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
    use RefreshDatabase;


    protected $fakeAdminUser;

    public function properPageName(string $name):string
    {
        $explodeString = explode('-', $name);
        $newArray = array_map('ucfirst', $explodeString);
        return  implode($newArray);
    }

    public function createFakeAdmin():void
    {
        $this->fakeAdminUser = User::factory()->create([
             'name' => 'bart-1',
            'email' => 'studio@dziwnykot.pl',
            'password' => bcrypt('1111'),
            'phone' => '504399023',
            'account_type' => 'business',
            'company' => 'Dziwny Kot',
            'nip' => 1192341997,
            'street' => 'Budrysów',
            'house_number' => '9',
            'apartment_number' => '45',
            'zip_code' => '00-119',
            'city' => 'Warszawa',
          'role' => 'admin'
        ]);
    }

    /**
        * @dataProvider pages
        */

    public function test_route_return_ok_status(string $dataProvider):void
    {
        $response = $this->get('/'.$dataProvider);
        $response -> assertStatus(200);
    }
    /**
        * @dataProvider adminPages
        */

    public function test_route_return_302_status_for_guest_user(string $dataProvider):void
    {
        $response = $this->get('/'.$dataProvider);
        $response -> assertStatus(302);
    }
    /**
        * @dataProvider adminPages
        */

    public function test_route_return_ok_status_for_admin_user(string $dataProvider):void
    {
        $this->createFakeAdmin();
        $response = $this->actingAs($this->fakeAdminUser, 'web')->withSession(['banned' => false])->get('/'.$dataProvider);
        $response -> assertStatus(200);
    }
    /**
     * @dataProvider pages
     */

    public function test_inertia_can_render_page_by_route(string $dataProvider):void
    {
        $findChar = strpos($dataProvider, '-') && $properComponentName = $this->properPageName($dataProvider);

        if ($findChar) {
            $response = $this->get('/'.$dataProvider);
            $response->assertInertia(fn (Assert $page) => $page->url('/'.$dataProvider));
        } else {
            $response = $this->get('/'.$dataProvider);
            $response->assertInertia(fn (Assert $page) => $page->url('/'.$dataProvider));
        }
    }

    /**
     * @dataProvider pages
     */
    public function test_inertia_can_find_component_by_route(string $dataProvider):void
    {
        $findChar = strpos($dataProvider, '-') && $properComponentName = $this->properPageName($dataProvider);

        if ($findChar) {
            $response = $this->get('/'.$dataProvider);
            $response->assertInertia(fn (Assert $page) => $page->component($properComponentName));
        } else {
            $response = $this->get('/'.$dataProvider);
            $response->assertInertia(fn (Assert $page) => $page->component(ucfirst(strval($dataProvider))));
        }
    }

    /**
     * @dataProvider adminPages
     */

    public function test_inertia_can_render_admin_pages_by_route(string $dataProvider):void
    {
        $this->createFakeAdmin();

        $response = $this->actingAs($this->fakeAdminUser, 'web')->withSession(['banned' => false])->get('/'.$dataProvider);
        $response->assertInertia(fn (Assert $page) => $page->url('/'.$dataProvider));
    }

    /**
     * @dataProvider adminPages
     */
    public function test_inertia_can_find_admin_components_by_route(string $dataProvider):void
    {
        $this->createFakeAdmin();


        $findChar = strpos($dataProvider, '-') && $properComponentName = $this->properPageName($dataProvider);


        if ($findChar) {
            $response = $this->actingAs($this->fakeAdminUser)->withSession(['banned' => false])->get('/'.$dataProvider);
            $response->assertInertia(fn (Assert $page) => $page->component($properComponentName));
        } else {
            $response = $this->actingAs($this->fakeAdminUser)->withSession(['banned' => false])->get('/'.$dataProvider);
            $response->assertInertia(fn (Assert $page) => $page->component(ucfirst(strval($dataProvider))));
        }
    }





    public function pages():array
    {
        return [
            'start' => ['start'],
            'printshop'=>['printshop'],
            'creator'=>['creator'],
            'contact'=>['contact'],
        ];
    }
    public function adminPages():array
    {
        return [
            'admin-tools'=>['admin-tools'],
        ];
    }
}
;
