<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Contact;

class Contacts extends TestCase
{

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testGetContacts()

    {
        $contacts = factory(Contacts::class)->create();
        $response = $this->get('api/contacts');

        $response->assertStatus(200)
        ->assertJsonStructure(['id','name','email','state','city']);

    }
}
