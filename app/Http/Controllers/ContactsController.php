<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contact;

class ContactsController extends Controller
{
    public function index(){
        $contact = Contact::all();
        return response()->json($contact,200);
    }
}
