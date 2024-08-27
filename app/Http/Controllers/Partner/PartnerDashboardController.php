<?php

namespace App\Http\Controllers\Partner;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Inertia\Inertia;

class PartnerDashboardController extends Controller
{
    public function index()
    {
        return Inertia::render("Partner/Dashboard", [
            "reports" => [
                [
                    "title" => "Pengadaan sarana keterampilan Olahan Pangan",
                    "location" => "Kec. Karangwareng",
                    "realization" => 100_000_000,
                    "realizationDate" => Carbon::now(),
                    "createdAt" => Carbon::now(),
                    "status" => "Diterima"
                ],
                [
                    "title" => "Pengadaan sarana keterampilan Olahan Pangan",
                    "location" => "Kec. Karangwareng",
                    "realization" => 100_000_000,
                    "realizationDate" => Carbon::now(),
                    "createdAt" => Carbon::now(),
                    "status" => "Revisi"
                ]
            ]
        ]);
    }
}
