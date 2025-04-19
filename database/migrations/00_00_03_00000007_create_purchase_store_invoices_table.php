<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePurchaseStoreInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchase_store_invoices', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('purchase_invoice_id')->unsigned();
            $table->foreign('purchase_invoice_id')->references('id')->on('purchase_invoices')->onDelete('cascade');
            $table->integer('seller_product_id')->unsigned();
            $table->foreign('seller_product_id')->references('pid')->on('seller_products')->onDelete('cascade');
            //
            $table->bigInteger('seller_price')->unsigned();
            //
            $table->integer('discount')->unsigned()->default(0);
            //
            $table->bigInteger('site_discount')->unsigned();
            $table->bigInteger('seller_discount')->unsigned();
            //
            $table->bigInteger('gain_seller')->unsigned();
            $table->bigInteger('gain_site')->unsigned();
            $table->bigInteger('gain_seller_with_discount')->unsigned();
            $table->bigInteger('gain_site_with_discount')->unsigned();
            //
            $table->bigInteger('price')->unsigned();
            $table->bigInteger('price_with_discount')->unsigned()->nullable();
            $table->integer('crop_event_id')->unsigned()->nullable();
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
        Schema::dropIfExists('purchase_store_invoices');
    }
}
