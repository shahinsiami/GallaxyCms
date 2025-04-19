<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTempClientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('temp_clients', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->nullable();
            $table->string('family')->nullable();
            $table->string('birthday')->nullable();
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
            $table->boolean('sex')->nullable();
            $table->integer('degree')->nullable();
            $table->string('email')->nullable();
            $table->text('description');
            $table->bigInteger('phonenumber')->unsigned()->nullable();
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
        Schema::dropIfExists('temp_clients');
    }
}
