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
        Schema::create('reservation', function (Blueprint $table) {
            $table->id('idReservation');
            $table->integer('nombre_chambres');
            $table->integer('nombre_adultes');
            $table->integer('nombre_enfants');
            $table->integer('nombre_bebe');
            $table->decimal('montant_total');
            $table->bigInteger('idclient')->unsigned();
            $table->bigInteger('idVolDispo')->unsigned();
            $table->bigInteger('idVygDispo')->unsigned();
            $table->foreign('idclient')->references('idclient')->on('client');
            $table->foreign('idVolDispo')->references('idVolDispo')->on('reservation_vol_dispo');
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
        Schema::dropIfExists('reservation');
    }
};
