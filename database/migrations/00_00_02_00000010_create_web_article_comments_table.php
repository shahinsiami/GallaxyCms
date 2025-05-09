<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWebArticleCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('web_article_comments', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('web_article_id')->unsigned();
            $table->foreign('web_article_id')->references('id')->on('web_articles')->onDelete('cascade');
            $table->integer('user_id')->unsigned()->nullable();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->integer('status')->default(0);
            $table->integer('agree')->default(0);
            $table->integer('disagree')->default(0);
            $table->string('title');
            $table->text('body');
            $table->string('ip')->default(0);
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
        Schema::dropIfExists('web_article_comments');
    }
}
