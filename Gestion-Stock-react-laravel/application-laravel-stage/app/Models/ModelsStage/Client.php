<?php

namespace App\Models\ModelsStage;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $table = 'client';
    protected $primaryKey = 'idC';
    protected $fillable = ['nom', 'status','tele','solde_intial','login','password','idE'];
    public function Entrepot(){
        return $this->belongsTo(Entrepot::class,'idE','idE');
    }
    use HasFactory;
}
