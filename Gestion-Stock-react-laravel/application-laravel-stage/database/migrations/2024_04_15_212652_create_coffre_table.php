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
        Schema::create('coffre', function (Blueprint $table) {
            $table->id('idCoffre');
            $table->string('NomCoffre');
            $table->decimal('solde');
            $table->string('detailSolde');
            $table->bigInteger('idE')->unsigned();
            $table->foreign('idE')->references('idE')->on('entrepots');
            $table->string('Nom_de_la_part')->nullable();
            $table->string('type_Solde_coffre');
            $table->date('date_echeance')->nullable();
            $table->decimal('Montant_total');
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
        Schema::dropIfExists('coffre');
    }
};
