<?php

namespace App\Models\ModelsPFE;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VolsDispo extends Model
{
    protected $table = 'reservation_vol_dispo';
    protected $primaryKey = 'idVolDispo';
    public $timestamps = true;
    protected $fillable = [
        'agenceVyg','date_debut','date_fin','prixV','formule','idVol'
    ];
    public function vols(){
        return $this->belongsTo(Vols::class,'idVolDispo','idVolDispo');
    }
    public function commentsVoyages(){
        return $this->hasMany(CommentsVyg::class,'idVolDispo','idVolDispo');    
    }
    public function reservations(){
        return $this->hasMany(Reservation::class,'idVolDispo','idVolDispo');  
    }
    use HasFactory;
}
