<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCropSubSegmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('crop_sub_segments', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->text('description');
            $table->integer('priority')->default(0);
            $table->string('image')->nullable();
            $table->string('timage')->nullable();
            $table->string('slug');
            $table->integer('crop_segment_id')->unsigned();
            $table->foreign('crop_segment_id')->references('id')->on('crop_segments')->onDelete('cascade');
            $table->integer('crop_event_id')->unsigned()->default(0);
            $table->foreign('crop_event_id')->references('id')->on('crop_events')->onDelete('cascade');
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
        Schema::dropIfExists('crop_sub_segments');
    }
}
