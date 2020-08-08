<?php

namespace Tests\Feature;

use App\Contact;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ContactsPostTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testExample()
    {
        $contact = factory(Contact::class)->create();
        $response = $this->json('POST','/api/contacts/save',[
            'name' => $contact->name,
            'email' => $contact->email,
            'state' =>$contact->state,
            'city' =>$contact->city,
        ]);

        $response->assertJsonStructure([
            'id','name','email','state','city'
        ])->assertStatus(201);

        $this->assertDatabaseHas('contacts',[
            'name' => $contact->name,
            'email' => $contact->email,
            'state' =>$contact->state,
            'city' =>$contact->city,
        ]);
    }
}
