<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSellerProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('seller_products', function (Blueprint $table) {
            $table->increments('pid');
            $table->integer('crop_id')->unsigned();
            $table->foreign('crop_id')->references('id')->on('crops')->onDelete('cascade');
            //
            $table->bigInteger('seller_price')->unsigned();
            //
            $table->integer('discount')->unsigned()->default(0);
            //
            $table->bigInteger('site_discount')->unsigned();
            $table->bigInteger('seller_discount')->unsigned();
            //
            $table->bigInteger('gain_seller')->unsigned();
            $table->bigInteger('gain_site')->unsigned();
            $table->bigInteger('gain_seller_with_discount')->unsigned();
            $table->bigInteger('gain_site_with_discount')->unsigned();
            //
            $table->bigInteger('price')->unsigned();
            $table->bigInteger('price_with_discount')->unsigned()->nullable();
            //
            $table->timestamp('startdate')->nullable();
            $table->timestamp('enddate')->nullable();
            //
            $table->integer('count')->unsigned();
            //
            $table->integer('crop_event_id')->unsigned()->nullable();
            $table->foreign('crop_event_id')->references('id')->on('crop_events')->onDelete('cascade');
            //
            $table->integer('seller_addresse_id')->unsigned()->nullable();
            $table->foreign('seller_addresse_id')->references('id')->on('seller_addresses')->onDelete('cascade');
            //
            $table->text('color')->nullable();
            $table->text('size')->nullable();
            $table->string('guarantee')->nullable();
            //
            $table->integer('seller_id')->unsigned();
            $table->foreign('seller_id')->references('id')->on('sellers')->onDelete('cascade');
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
        Schema::dropIfExists('seller_products');
    }
}
