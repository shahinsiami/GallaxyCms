<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTempClientCartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('temp_client_carts', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('temp_client_id')->unsigned();
            $table->foreign('temp_client_id')->references('id')->on('temp_clients')->onDelete('cascade');
            $table->integer('seller_product_id')->unsigned();
            $table->foreign('seller_product_id')->references('pid')->on('seller_products')->onDelete('cascade');
            $table->integer('temp_client_invoice_id')->unsigned();
            $table->foreign('temp_client_invoice_id')->references('id')->on('temp_client_invoices')->onDelete('cascade');
            $table->text('color')->nullable();
            $table->text('size')->nullable();
            $table->string('guarantee')->nullable();
            $table->integer('count')->unsigned();
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
        Schema::dropIfExists('temp_client_carts');
    }
}
