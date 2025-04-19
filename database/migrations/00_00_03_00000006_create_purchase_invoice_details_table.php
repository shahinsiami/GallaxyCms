<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePurchaseInvoiceDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchase_invoice_details', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->integer('seller_product_id')->unsigned();
            $table->foreign('seller_product_id')->references('pid')->on('seller_products')->onDelete('cascade');
            $table->integer('purchase_invoice_id')->unsigned();
            $table->foreign('purchase_invoice_id')->references('id')->on('purchase_invoices')->onDelete('cascade');
            $table->integer('count')->unsigned();
            $table->integer('amount_paid')->unsigned();
            $table->integer('discount')->unsigned();
            $table->text('color')->nullable();
            $table->text('size')->nullable();
            $table->string('guarantee')->nullable();
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
        Schema::dropIfExists('purchase_invoice_details');
    }
}
