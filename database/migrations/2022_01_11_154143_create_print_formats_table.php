<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('print_formats', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('acronym', 30);
            $table->smallInteger('width')->unsigned();
            $table->smallInteger('height')->unsigned();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('print_formats');
    }
};
