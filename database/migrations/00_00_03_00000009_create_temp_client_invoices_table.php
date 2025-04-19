<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTempClientInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('temp_client_invoices', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('temp_client_id')->unsigned();
            $table->foreign('temp_client_id')->references('id')->on('temp_clients')->onDelete('cascade');
            $table->integer('discount')->unsigned()->default(0);
            $table->bigInteger('price')->unsigned();
            $table->bigInteger('price_with_discount')->unsigned()->nullable();
            $table->integer('status')->default(1);
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
        Schema::dropIfExists('temp_client_invoices');
    }
}
