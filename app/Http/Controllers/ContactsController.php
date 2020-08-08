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

    public function store(Request $request){
        $contact = new Contact();
        $contact->name = $request->name;
        $contact->email = $request->email;
        $contact->state = $request->state;
        $contact->city = $request->city;
        $contact->save();

        return response()->json($contact,201);
    }


}
