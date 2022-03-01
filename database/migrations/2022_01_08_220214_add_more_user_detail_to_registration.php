<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddMoreUserDetailToRegistration extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->char('phone', 20);
            $table->enum('account_type', ['business', 'private']);
            $table->string('company')->nullable();
            $table->decimal('nip', $precision = 10, $scale = 0)->nullable();
            $table->string('street');
            $table->char('house_number', 10);
            $table->string('apartment_number')->nullable();
            $table->string('zip_code');
            $table->char('city', 90);
            $table->char('country', 70)->default('Polska');
            $table->boolean('admin')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('phone');
            $table->dropColumn('account_type');
            $table->dropColumn('company');
            $table->dropColumn('nip');
            $table->dropColumn('street');
            $table->dropColumn('house_number');
            $table->dropColumn('apartment_number');
            $table->dropColumn('zip_code');
            $table->dropColumn('city');
            $table->dropColumn('country');
            $table->dropColumn('admin');
        });
    }
}
