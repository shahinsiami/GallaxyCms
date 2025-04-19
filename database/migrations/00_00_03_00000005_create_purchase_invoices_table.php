<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePurchaseInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchase_invoices', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->integer('status')->unsigned();
            $table->integer('amount_paid')->unsigned();
            $table->integer('discount')->unsigned();
            $table->integer('price')->unsigned();
            $table->integer('transport_cost')->unsigned();
            $table->string('delivery_date');
            $table->string('delivery_time');
            $table->integer('payment_method')->unsigned();
            $table->integer('client_address_id')->unsigned();
            $table->foreign('client_address_id')->references('id')->on('client_addresses')->onDelete('cascade');
            $table->text('description')->nullable();
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
        Schema::dropIfExists('purchase_invoices');
    }
}
