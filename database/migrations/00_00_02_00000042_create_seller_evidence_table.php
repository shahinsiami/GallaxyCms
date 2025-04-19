<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSellerEvidenceTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('seller_evidence', function (Blueprint $table) {
            $table->increments('id');
            $table->string('storename');
            $table->string('type');
            $table->string('status')->default('غیر فعال');
            $table->string('owner');
            $table->bigInteger('postcode');
            $table->bigInteger('phonenumber');
            $table->text('address');
            $table->string('cardnumber');
            $table->bigInteger('economiccode')->nullable();
            $table->bigInteger('companynumber')->nullable();;
            $table->bigInteger('companynationalcode')->nullable();
            $table->string('license')->nullable();
            $table->string('stewardship')->nullable();
            $table->string('nationalcard')->nullable();
            $table->string('officialnewspaper')->nullable();
            $table->string('registration')->nullable();
            $table->string('activitypermission')->nullable();
            $table->string('formalrequest')->nullable();
            $table->string('latestofficialnewspaper')->nullable();
            $table->integer('area_state_id')->unsigned();
            $table->foreign('area_state_id')->references('id')->on('area_states')->onDelete('cascade');
            $table->integer('area_city_id')->unsigned();
            $table->foreign('area_city_id')->references('id')->on('area_cities')->onDelete('cascade');
            $table->integer('area_zone_id')->unsigned();
            $table->foreign('area_zone_id')->references('id')->on('area_zones')->onDelete('cascade');
            $table->integer('crop_category_id')->unsigned();
            $table->foreign('crop_category_id')->references('id')->on('crop_categories')->onDelete('cascade');
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
        Schema::dropIfExists('seller_evidence');
    }
}
