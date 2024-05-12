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
        Schema::create('commentaires_voyages', function (Blueprint $table) {
            $table->id('idC');
            $table->string('nom');
            $table->string('comments');
            $table->bigInteger('idVygDispo')->unsigned();
            $table->foreign('idVygDispo')->references('idVygDispo')->on('reservation_voyage_dispo');
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
        Schema::dropIfExists('commentaires_voyages');
    }
};
