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
        Schema::create('reservation_voyage_dispo', function (Blueprint $table) {
            $table->id('idVygDispo');
            $table->string('agenceVyg');
            $table->date('date_debut');
            $table->date('date_fin');
            $table->integer('prixV');
            $table->string('formule');
            $table->bigInteger('idVoyage')->unsigned();
            $table->foreign('idVoyage')->references('idVoyage')->on('voyage');
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
        Schema::dropIfExists('_reservation_voyage_dispo');
    }
};
