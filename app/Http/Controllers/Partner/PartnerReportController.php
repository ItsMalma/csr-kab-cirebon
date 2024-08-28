<?php

namespace App\Http\Controllers\Partner;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Inertia\Inertia;

class PartnerReportController extends Controller
{
    public function list()
    {
        return Inertia::render('Partner/ReportList', [
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
