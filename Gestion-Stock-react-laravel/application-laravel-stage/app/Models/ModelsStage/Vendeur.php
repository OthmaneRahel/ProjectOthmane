<?php

namespace App\Models\ModelsStage;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vendeur extends Model
{
    protected $table = 'vendeur';
    protected $primaryKey = 'idV';
    protected $fillable = ['nom', 'status','tele','login','password','idE'];
    public function Entrepot(){
        return $this->belongsTo(Entrepot::class,'idE','idE');
    }
    use HasFactory;
}
