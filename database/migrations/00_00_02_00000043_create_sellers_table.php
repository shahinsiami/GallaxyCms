<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSellersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sellers', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('phonenumber');
            $table->string('imagestore1')->nullable();
            $table->string('imagestore2')->nullable();
            $table->string('imagestore3')->nullable();
            $table->string('slug');
            $table->integer('seller_evidence_id')->unsigned();
            $table->foreign('seller_evidence_id')->references('id')->on('seller_evidence')->onDelete('cascade');
            $table->integer('crop_category_id')->unsigned();
            $table->foreign('crop_category_id')->references('id')->on('crop_categories')->onDelete('cascade');
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('timagestore1')->nullable();
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
        Schema::dropIfExists('sellers');
    }
}
