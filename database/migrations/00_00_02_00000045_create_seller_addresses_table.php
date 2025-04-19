<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSellerAddressesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('seller_addresses', function (Blueprint $table) {
            $table->increments('id');
            $table->string('superscription');
            $table->string('state');
            $table->string('city');
            $table->string('zone');
            $table->string('postcode');
            $table->integer('seller_id')->unsigned();
            $table->foreign('seller_id')->references('id')->on('sellers')->onDelete('cascade');
            $table->integer('area_state_id')->unsigned();
            $table->foreign('area_state_id')->references('id')->on('area_states')->onDelete('cascade');
            $table->integer('area_city_id')->unsigned();
            $table->foreign('area_city_id')->references('id')->on('area_cities')->onDelete('cascade');
            $table->integer('area_zone_id')->unsigned();
            $table->foreign('area_zone_id')->references('id')->on('area_zones')->onDelete('cascade');
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
        Schema::dropIfExists('seller_addresses');
    }
}
