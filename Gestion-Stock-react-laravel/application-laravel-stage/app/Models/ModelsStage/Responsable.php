<?php

namespace App\Models\ModelsStage;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Responsable extends Model
{
    protected $table = 'responsable';
    protected $primaryKey = 'idR';
    protected $fillable = ['nom', 'status','tele','idE','login','password'];
    public function Entrepot(){
        return $this->belongsTo(Entrepot::class,'idE','idE');
    }
    use HasFactory;
}
