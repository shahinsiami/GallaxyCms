<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWebArticleSubsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('web_article_subs', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('web_article_id')->unsigned()->nullable();
            $table->foreign('web_article_id')->references('id')->on('web_articles')->onDelete('cascade');
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
            $table->integer('priority')->default(0);
            $table->string('slug');
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
        Schema::dropIfExists('web_article_subs');
    }
}
