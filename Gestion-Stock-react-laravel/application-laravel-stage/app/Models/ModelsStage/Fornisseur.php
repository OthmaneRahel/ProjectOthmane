<?php

namespace App\Models\ModelsStage;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fornisseur extends Model
{
    protected $table = 'fournisseur';
    protected $primaryKey = 'idF';
    protected $fillable = ['nom', 'type','tele','devise','idE','status'];
    public function Entrepot(){
        return $this->belongsTo(Entrepot::class,'idE','idE');
    }
    use HasFactory;
}
