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
        Schema::create('depenses', function (Blueprint $table) {
            $table->id('idD');
            $table->date('date_depense');
            $table->string('Ref');
            $table->float('Montant');
            $table->string('Note');
            $table->string('categorie');
            $table->bigInteger('idE')->unsigned();
            $table->foreign('idE')->references('idE')->on('entrepots');
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
        Schema::dropIfExists('depenses');
    }
};
