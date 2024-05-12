<?php

namespace App\Models\ModelsPFE;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VoyagesDispo extends Model
{
    protected $table = 'reservation_voyage_dispo';
    protected $primaryKey = 'idVygDispo';
    public $timestamps = true;
    protected $fillable = [
        'agenceVyg','date_debut','date_fin','prixV','formule','idVoyage'
    ];
    public function voyages(){
        return $this->belongsTo(Voyages::class,'idVoyage','idVoyage');
    }
    public function commentsVoyages(){
        return $this->hasMany(CommentsVyg::class,'idVygDispo','idVygDispo');    
    }
    public function reservations(){
        return $this->hasMany(Reservation::class,'idVygDispo','idVygDispo');  
    }
    use HasFactory;
}
