<?php

use App\Http\Controllers\AdminToolsPageController;
use App\Http\Controllers\ContactPageController;
use App\Http\Controllers\CreatorPageController;
use App\Http\Controllers\PrintshopPageController;
use App\Http\Controllers\StartPageController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function () {
    return redirect('/start');
});

Route::get('/start', [StartPageController::class, 'index'])->name('Start');

Route::get('/printshop', function () {
    return redirect('/printshop/category/all');
});

// Route::get('/printshop/category/all', [PrintshopPageController::class, 'showByCategory'])->name('Printshop');
Route::get('/printshop/{id}', [PrintshopPageController::class, 'show'])->where('id', '[0-9]+')->name('Printshop');
Route::get('/printshop/category/{name}', [PrintshopPageController::class, 'showByCategory'])->name('Printshop');
Route::get('/printshop/search/{name}', [PrintshopPageController::class, 'searchProduct'])->name('Printshop');

Route::get('/creator', [CreatorPageController::class, 'index'])->name('Creator');

Route::get('/contact', [ContactPageController::class, 'index'])->name('Contact');

Route::middleware(['auth', 'isAdmin', 'verified'])->group(function () {
    Route::get('/admin-tools', function () {
        return redirect('/admin-tools/users/1');
    });
    Route::get('/admin-tools/users', function () {
        return redirect('/admin-tools/users/1');
    });
      Route::get('/admin-tools/products', function () {
        return redirect('/admin-tools/products/1');
    });
    Route::get('/admin-tools/users/{chunk}', [AdminToolsPageController::class, 'usersIndex'])->name('AdminTools');
    Route::get('/admin-tools/products/{chunk}', [AdminToolsPageController::class, 'productsIndex'])->name('AdminTools');
    Route::get('/admin-tools/users/id/{id}', [AdminToolsPageController::class, 'userShow'])->where('id', '[0-9]+')->name('AdminTools');
    Route::get('/admin-tools/products/id/{id}', [AdminToolsPageController::class, 'productShow'])->where('id', '[0-9]+')->name('AdminTools');
    Route::get('/admin-tools/users/search/{name}', [AdminToolsPageController::class, 'userSearch'])->name('AdminTools');
    Route::get('/admin-tools/products/search/{name}', [AdminToolsPageController::class, 'productSearch'])->name('AdminTools');

});


Route::get('/forgot-password', [NewPasswordController::class, 'create'])->middleware('guest')->name('password.request');

require __DIR__ . '/auth.php';
