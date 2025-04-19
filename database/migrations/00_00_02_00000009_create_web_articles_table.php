<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWebArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('web_articles', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('web_category_id')->unsigned()->nullable();
            $table->foreign('web_category_id')->references('id')->on('web_categories')->onDelete('cascade');
            $table->integer('web_sub_category_id')->unsigned()->nullable();
            $table->foreign('web_sub_category_id')->references('id')->on('web_sub_categories')->onDelete('cascade');
            $table->integer('web_segment_id')->unsigned()->nullable();
            $table->foreign('web_segment_id')->references('id')->on('web_segments')->onDelete('cascade');
            $table->string('title');
            $table->text('shortdescription')->nullable();
            $table->text('description');
            $table->text('tag')->nullable();
            $table->string('image1')->nullable();
            $table->string('image2')->nullable();
            $table->string('image3')->nullable();
            $table->string('image4')->nullable();
            $table->string('image5')->nullable();
            $table->string('image6')->nullable();
            $table->string('seo')->nullable();
            $table->string('writer')->nullable();
            $table->integer('priority')->default(0);
            $table->string('slug');
            $table->integer('page_language_id')->unsigned();
            $table->foreign('page_language_id')->references('id')->on('page_languages')->onDelete('cascade');;
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
        Schema::dropIfExists('web_articles');
    }
}
