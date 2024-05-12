<?php

namespace App\Models\ModelsPFE;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    protected $table = 'reservation';
    protected $primaryKey = 'idReservation';
    public $timestamps = true;
    protected $fillable = [
        'nombre_chambres','nombre_adultes','nombre_enfants','nombre_bebe','montant_total','idclient','idVolDispo','idVygDispo'
    ];
    public function clients(){
        return $this->belongsTo(Clients::class,'idclient','idclient');
    }
    public function reserVol(){
        return $this->belongsTo(VoyagesDispo::class,'idVolDispo','idVolDispo');
    }
    public function reserVyg(){
        return $this->belongsTo(VoyagesDispo::class,'idVygDispo','idVygDispo');
    }
    use HasFactory;
}
