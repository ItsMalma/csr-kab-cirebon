<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia('/', "Home")->name("home");
Route::inertia('/about', "About")->name("about");
Route::inertia('/activity', "Activity")->name("activity");
Route::get('/activity/{slug}', function (string $slug) {
    return Inertia::render("ActivityDetail", [
        "slug" => $slug
    ]);
})->name("activity-detail");
Route::inertia('/statistics', "Statistics")->name("statistics");

Route::get('/dashboard', function () {
    return inertia('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
