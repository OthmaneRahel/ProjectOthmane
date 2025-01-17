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
        Schema::create('utl_entrepot', function (Blueprint $table) {
            $table->id('idUE');
            $table->unsignedBigInteger('idU');
            $table->unsignedBigInteger('idE');
            $table->foreign('idU')->references('idU')->on('utilisateurs')->onDelete('cascade');
            $table->foreign('idE')->references('idE')->on('entrepots')->onDelete('cascade');
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
        Schema::dropIfExists('client_entrepot');
    }
};
