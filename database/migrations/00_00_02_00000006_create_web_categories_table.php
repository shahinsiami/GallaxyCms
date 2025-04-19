<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWebCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('web_categories', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->text('description');
            $table->string('slug');
            $table->string('image')->nullable();
            $table->integer('priority')->default(0);
            $table->text('tag')->nullable();
            $table->integer('page_template_id')->unsigned();
            $table->foreign('page_template_id')->references('id')->on('page_templates')->onDelete('cascade');
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
        Schema::dropIfExists('web_categories');
    }
}
