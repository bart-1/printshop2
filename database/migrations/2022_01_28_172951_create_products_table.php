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
            $table->string('acronym', 30)->unique();
            $table->string('slug')->unique();
            $table->string('name')->nullable();
            $table->string('description', 255)->nullable();
            $table->unsignedBigInteger('image_id')->default(1);
            $table->foreign('image_id')->references('id')->on('images')->onDelete('cascade')->onUpdate('cascade');
            $table->smallInteger('width')->unsigned()->nullable();
            $table->smallInteger('height')->unsigned()->nullable();
            $table->smallInteger('thickness')->unsigned()->nullable();
            $table->smallInteger('weight')->unsigned()->nullable();
            $table->tinyInteger('tax')->unsigned()->default(23);
            $table->decimal('price', 9, 4)->default(0);
            $table->string('components')->nullable();
            $table->integer('warehouse')->unsigned()->default(0);
            $table->enum('expose_level', [0, 1, 2, 3, 4])->default(1);
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
        Schema::dropIfExists('products');
    }
}
