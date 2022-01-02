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
    'testingProps' => PHP_VERSION]);
});


Route::get('/contact', function () {
    return Inertia::render('Contact', [
        'testingProps' => PHP_VERSION]);
});

Route::get('/creator', function () {
    return Inertia::render('Creator', [
            'testingProps' => PHP_VERSION]);
});

Route::get('/hello', function () {
    return Inertia::render('Hello', [
            'testingProps' => PHP_VERSION]);
});

Route::get('/printshop', function () {
    return Inertia::render('Printshop', [
    'testingProps' => PHP_VERSION]);
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
