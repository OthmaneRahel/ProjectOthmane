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
        Schema::create('commentaires_vol', function (Blueprint $table) {
            $table->id('idV');
            $table->string('nom');
            $table->string('comments');
            $table->bigInteger('idVolDispo')->unsigned();
            $table->foreign('idVolDispo')->references('idVolDispo')->on('reservation_vol_dispo');
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
        Schema::dropIfExists('commentaires_vol');
    }
};
