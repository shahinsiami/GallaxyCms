<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateComponentManyColumnFilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('component_many_column_files', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->integer('section');
            $table->string('image1')->nullable();
            $table->string('image2')->nullable();
            $table->string('title1');
            $table->string('title2')->nullable();
            $table->string('title3')->nullable();
            $table->string('title4')->nullable();
            $table->string('title5')->nullable();
            $table->string('title6')->nullable();
            $table->text('description')->nullable();
            $table->string('file');
            $table->string('seo')->nullable();
            $table->boolean('status');
            $table->integer('type')->nullable();
            $table->integer('page_template_id')->unsigned();
            $table->foreign('page_template_id')->references('id')->on('page_templates')->onDelete('cascade');
            $table->integer('page_language_id')->unsigned();
            $table->foreign('page_language_id')->references('id')->on('page_languages')->onDelete('cascade');
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
        Schema::dropIfExists('component_many_column_files');
    }
}
