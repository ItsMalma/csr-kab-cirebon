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
Route::inertia('/sectors', "Sectors")->name("sectors");
Route::get('/sectors/{slug}', function (string $slug) {
    return Inertia::render("SectorDetail", [
        "slug" => $slug
    ]);
})->name("sector-detail");
Route::get('/sectors/{sectorSlug}/projects/{projectSlug}', function (string $sectorSlug, string $projectSlug) {
    return Inertia::render("ProjectDetail", [
        "sectorSlug" => $sectorSlug,
        "projectSlug" => $projectSlug
    ]);
})->name("project-detail");
Route::inertia('/reports', "Reports")->name("reports");
Route::get('/reports/{slug}', function (string $slug) {
    return Inertia::render("ReportDetail", [
        "slug" => $slug
    ]);
})->name("report-detail");
Route::inertia('/partners', "Partners")->name("partners");
Route::get('/partners/{slug}', function (string $slug) {
    return Inertia::render("PartnerDetail", [
        "slug" => $slug
    ]);
})->name("partner-detail");

Route::get('/dashboard', function () {
    return inertia('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
