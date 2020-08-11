<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Contact;

class Contacts extends Controller
{
    public function save(Request $request)
    {
        $contact = new Contact;
        $contact->name = $request->name;
        $contact->email = $request->email;
        $contact->state = $request->state;
        $contact->city = $request->city;
        $contact->save();
        return response()->json($contact,201);
    }
}
