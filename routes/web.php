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

Route::get('/printshop', [PrintshopPageController::class, 'index'])->name('Printshop');
Route::get('/printshop/{id}', [PrintshopPageController::class, 'show'])->name('Printshop');

Route::get('/creator', [CreatorPageController::class, 'index'])->name('Creator');

Route::get('/contact', [ContactPageController::class, 'index'])->name('Contact');

Route::get('/admin-tools', [AdminToolsPageController::class, 'index'])->middleware('auth', 'isAdmin', 'verified')->name('AdminTools');

Route::get('/forgot-password', [NewPasswordController::class, 'create'])->middleware('guest')->name('password.request');

require __DIR__ . '/auth.php';
