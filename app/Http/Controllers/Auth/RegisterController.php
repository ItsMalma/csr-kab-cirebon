<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class RegisterController extends Controller
{
    public function get()
    {
        return Inertia::render('Auth/Register');
    }
}
