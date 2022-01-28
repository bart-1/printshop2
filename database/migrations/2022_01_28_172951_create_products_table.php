<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('symbol', 30);
            $table->string('name');
            $table->smallInteger('width')->unsigned()->nullable();
            $table->smallInteger('height')->unsigned()->nullable();
            $table->enum('iso_size', ['A7', 'A6', 'A5', 'A4', 'A3', 'A2', 'A1', 'A0', 'B7', 'B6', 'B5', 'B4', 'B3', 'B2', 'B1', 'B0', 'DL'])->nullable();
            $table->smallInteger('thickness')->unsigned()->nullable();
            $table->smallInteger('weight')->unsigned()->nullable();
            $table->tinyInteger('tax')->unsigned()->default(23);
            $table->decimal('gross_price', 9, 4)->default(0);
            $table->string('description', 255)->nullable();
            $table->string('elements')->nullable();
            $table->integer('warehouse')->unsigned()->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
