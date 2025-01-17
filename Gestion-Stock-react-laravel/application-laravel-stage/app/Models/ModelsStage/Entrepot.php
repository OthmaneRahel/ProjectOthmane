<?php

namespace App\Models\ModelsStage;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Entrepot extends Model
{
    protected $table = 'entrepots';
    protected $primaryKey = 'idE';
    public $timestamps = true;
    protected $fillable = ['code','nom','adresse','entrepot_parent','type'];
    public function Entrepots(){
        return $this->hasMany(Coffres::class,'idE','idE');
    }
    public function produits(){
        return $this->hasMany(Produits::class,'idE','idE');
    }
    use HasFactory;
}
