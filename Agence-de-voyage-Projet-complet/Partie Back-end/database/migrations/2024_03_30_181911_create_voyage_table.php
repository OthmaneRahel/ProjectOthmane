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
        Schema::create('voyage', function (Blueprint $table) {
            $table->id('idVoyage');
            $table->string('nomVille');
            $table->string('image');
            $table->integer('prix');
            $table->date('date_depart');
            $table->date('date_arrivee');
            $table->string('description');
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
        Schema::dropIfExists('voyage');
    }
};
