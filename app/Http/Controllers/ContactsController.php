<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contact;

class ContactsController extends Controller
{
    public function index(){
        $contacts = Contact::all();
        return response()->json($contacts,200);
    }

}
