<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Partner\PartnerDashboardController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia('/', "Generic/Home")->name("home");
Route::inertia('/about', "Generic/About")->name("about");
Route::inertia('/activity', "Generic/Activity")->name("activity");
Route::get('/activity/{slug}', function (string $slug) {
    return Inertia::render("Generic/ActivityDetail", [
        "slug" => $slug
    ]);
})->name("activity-detail");
Route::inertia('/statistics', "Generic/Statistics")->name("statistics");
Route::inertia('/sectors', "Generic/Sectors")->name("sectors");
Route::get('/sectors/{slug}', function (string $slug) {
    return Inertia::render("Generic/SectorDetail", [
        "slug" => $slug
    ]);
})->name("sector-detail");
Route::get('/sectors/{sectorSlug}/projects/{projectSlug}', function (string $sectorSlug, string $projectSlug) {
    return Inertia::render("Generic/ProjectDetail", [
        "sectorSlug" => $sectorSlug,
        "projectSlug" => $projectSlug
    ]);
})->name("project-detail");
Route::inertia('/reports', "Generic/Reports")->name("reports");
Route::get('/reports/{slug}', function (string $slug) {
    return Inertia::render("Generic/ReportDetail", [
        "slug" => $slug
    ]);
})->name("report-detail");
Route::inertia('/partners', "Generic/Partners")->name("partners");
Route::get('/partners/{slug}', function (string $slug) {
    return Inertia::render("Generic/PartnerDetail", [
        "slug" => $slug
    ]);
})->name("partner-detail");

Route::controller(LoginController::class)->group(function () {
    Route::get('/login', 'get')->name('login');
});
Route::controller(RegisterController::class)->group(function () {
    Route::get('/register', 'get')->name('register');
});

Route::controller(PartnerDashboardController::class)->group(function () {
    Route::get('/partner/dashboard', 'index')->name('partner.dashboard');
});

Route::get('/dashboard', function () {
    return inertia('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
