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
            $table->string('acronym', 30);
            $table->string('slug');
            $table->string('name');
            $table->string('description', 255)->nullable();
            $table->string('img')->nullable();

            //TODO category
            // $table->enum('category', [
            //     'tshirts',
            //     'calendars',
            //     'business-cards',
            //     'leeflets',
            //     'invitations',
            //     'cups',
            //     'posters',
            //     'prints',
            //     'stamps',
            //     'brochures',
            //     'stickers',
            //     'stands',
            //     ])->nullable();
            $table->smallInteger('width')->unsigned()->nullable();
            $table->smallInteger('height')->unsigned()->nullable();
            $table->smallInteger('thickness')->unsigned()->nullable();
            $table->smallInteger('weight')->unsigned()->nullable();
            $table->tinyInteger('tax')->unsigned()->default(23);
            $table->decimal('price', 9, 4)->default(0);
            $table->string('components')->nullable();
            $table->integer('warehouse')->unsigned()->default(0);
            $table->enum('expose_level', ['hidden', 'normal', '+1', '+2', '+3'])->default('normal');
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
