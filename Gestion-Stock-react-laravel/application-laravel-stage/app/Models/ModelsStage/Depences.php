<?php

namespace App\Models\ModelsStage;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Depences extends Model
{
    protected $table = 'depenses';
    protected $primaryKey = 'idD';
    public $timestamps = true;
    protected $fillable = ['date_depense','Ref','categorie', 'Montant','idE','Note'];
    public function entrepots(){
        return $this->belongsTo(Entrepot::class,'idE','idE');
    }
    public function categorieDepences(){
        return $this->belongsTo(CategorieDepences::class,'idCate_dep','idCate_dep');
    }
    use HasFactory;
}
