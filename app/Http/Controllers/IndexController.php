<?php

namespace SgyAnalytics\Http\Controllers;

use Illuminate\Http\Request;

use SgyAnalytics\Http\Requests;
use SgyAnalytics\Http\Controllers\Controller;

class IndexController extends Controller
{

    public function index()
    {
        return view('index');
    }

}
