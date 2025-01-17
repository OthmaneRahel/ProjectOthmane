<?php

namespace App\Models\ModelsStage;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Utilisateurs extends Model
{
    protected $table = 'utilisateurs';
    protected $primaryKey = 'idU';
    protected $fillable = ['nom', 'status','tele','login','password','fonction','type','devise'];
    public function Entrepots(){
        return $this->belongsToMany(Entrepot::class,'idE','idU','idE');
    }
    use HasFactory;
}
