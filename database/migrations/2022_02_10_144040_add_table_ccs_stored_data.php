<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTableCcsStoredData extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('css_stored_data', function (Blueprint $table) {
            $table->id();
            $table->string('property');
            $table->string('value');
            $table->enum('theme', ['light', 'dark'])->nullable();
            $table->enum('scope', ['color', 'text', 'layout'])->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('css_stored_data');
    }
}
