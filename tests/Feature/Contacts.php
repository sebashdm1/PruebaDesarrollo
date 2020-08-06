<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class Contacts extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testGetContacts()
    {
        $response = $this->get('https://sigma-studios.s3-us-west-2.amazonaws.com/test/colombia.json');

        $response->assertStatus(200);
    }
}
