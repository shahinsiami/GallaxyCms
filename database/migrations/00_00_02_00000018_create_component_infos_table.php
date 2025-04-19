<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateComponentInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('component_infos', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('type');
            $table->text('address');
            $table->integer('page_template_id')->unsigned();
            $table->foreign('page_template_id')->references('id')->on('page_templates')->onDelete('cascade');
            $table->integer('page_language_id')->unsigned();
            $table->foreign('page_language_id')->references('id')->on('page_languages')->onDelete('cascade');
            $table->string('image1')->nullable();;
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
        Schema::dropIfExists('component_infos');
    }
}
