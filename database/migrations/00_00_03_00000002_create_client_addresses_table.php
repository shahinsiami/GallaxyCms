<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClientAddressesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('client_addresses', function (Blueprint $table) {
            $table->increments('id');
            $table->text('superscription')->nullable();
            $table->string('state')->nullable();
            $table->string('city')->nullable();
            $table->string('zone')->nullable();
            $table->string('postcode')->nullable();
            $table->integer('area_state_id')->unsigned()->nullable();
            $table->foreign('area_state_id')->references('id')->on('area_states')->onDelete('cascade');
            $table->integer('area_city_id')->unsigned()->nullable();
            $table->foreign('area_city_id')->references('id')->on('area_cities')->onDelete('cascade');
            $table->integer('area_zone_id')->unsigned()->nullable();
            $table->foreign('area_zone_id')->references('id')->on('area_zones')->onDelete('cascade');
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('client_addresses');
    }
}
