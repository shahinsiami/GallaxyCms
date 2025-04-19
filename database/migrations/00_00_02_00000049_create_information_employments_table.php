<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInformationEmploymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('information_employments', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->nullable();
            $table->string('family')->nullable();
            $table->string('phonenumber')->nullable();
            $table->text('address')->nullable();
            $table->text('about')->nullable();
            $table->integer('age')->nullable();
            $table->string('job_position')->nullable();
            $table->string('education')->nullable();
            $table->text('job_experience')->nullable();
            $table->string('articles')->nullable();
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
        Schema::dropIfExists('information_employments');
    }
}
