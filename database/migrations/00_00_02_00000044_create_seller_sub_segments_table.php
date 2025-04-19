<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSellerSubSegmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('seller_sub_segments', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('percentage');
            $table->string('subsegmentname');
            $table->string('storename');
            $table->integer('crop_sub_segment_id')->unsigned();
            $table->foreign('crop_sub_segment_id')->references('id')->on('crop_sub_segments')->onDelete('cascade');
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
        Schema::dropIfExists('seller_sub_segments');
    }
}
