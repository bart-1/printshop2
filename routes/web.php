<?php

use App\Http\Controllers\PageController;

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

Route::get('/admin-tools', [PageController::class, 'index'])->middleware('auth', 'isAdmin', 'verified')->name('AdminTools');

Route::get('/contact', [PageController::class, 'index'])->name('Contact');

    Route::get('/creator', [PageController::class, 'index'])->name('Creator');

    Route::get('/printshop', [PageController::class, 'index'])->name('Printshop');

    Route::get('/start', [PageController::class, 'index'])->name('Start');




Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
