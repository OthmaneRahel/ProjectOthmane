<?php

namespace App\Models\ModelsStage;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produits extends Model
{
    protected $table = 'produit';
    protected $primaryKey = 'idP';
    public $timestamps = true;
    protected $fillable = ['image','nom','code','unite','caisse','tare','poids','qte','Nombre_palette','Fourchette_de','Fourchette_a','prix','Alerte_Quantité','idMarque','idCat','idE'];
    public function Marque(){
        return $this->belongsTo(Marques::class,'idMarque','idMarque');
    }
    public function Categorie(){
        return $this->belongsTo(Categories::class,'idCat','idCat');
    }
    public function entrepots(){
        return $this->belongsTo(Entrepot::class,'idE','idE');
    }
    use HasFactory;
}
