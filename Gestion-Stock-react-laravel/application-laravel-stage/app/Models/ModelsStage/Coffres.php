<?php

namespace App\Models\ModelsStage;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Coffres extends Model
{
    protected $table = 'coffre';
    protected $primaryKey = 'idCoffre';
    protected $fillable = ['NomCoffre', 'solde','detailSolde','Nom_de_la_part','date_echeance','Montant_total','type_Solde_coffre','idE'];
    public function Entrepot(){
        return $this->belongsTo(Coffres::class,'idE','idE');
    }
    use HasFactory;
}
