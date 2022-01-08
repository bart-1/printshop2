<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::get('/admin-tools', function () {
    return Inertia::render('AdminTools', [
       'navRoutes' => ['start', 'printshop', 'creator', 'contact'],
       'title' => 'admin tools'
    ]);
});

Route::get('/contact', function () {
    return Inertia::render('Contact', [
        'navRoutes' => ['start', 'printshop', 'creator'],
        'title' => 'contact'
    ]);
});

Route::get('/creator', function () {
    return Inertia::render('Creator', [
        'navRoutes' => ['start', 'printshop', 'contact'],
        'title' => 'creator'
    ]);
});

Route::get('/start', function () {
    return Inertia::render('Start', [
        'navRoutes' => [ 'printshop', 'creator', 'contact'],
        'title' => 'start'
      ]);
});

Route::get('/printshop', function () {
    return Inertia::render('Printshop', [
        'navRoutes' => ['start', 'creator', 'contact'],
        'title' => 'printshop'
    ]);
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
