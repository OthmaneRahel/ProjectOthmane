<?php

namespace App\Models\ModelsPFE;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voyages extends Model
{
    protected $table = 'voyage';
    protected $primaryKey = 'idVoyage';
    public $timestamps = true;
    protected $fillable = [
        'nomVille','image','prix','date_depart','date_arrivee','description'
    ];

    public function voyagesdispo(){
        return $this->hasMany(VoyagesDispo::class,'idVoyage','idVoyage');
    }
    use HasFactory;
}
