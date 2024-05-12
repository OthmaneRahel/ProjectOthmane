<?php

namespace App\Models\ModelsPFE;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Clients extends Model
{
    protected $table = 'client';
    protected $primaryKey = 'idclient';
    public $timestamps = true;
    protected $fillable = [
        'nom','prenom','telephone','email'
    ];
    public function reservations(){
        return $this->hasMany(Reservation::class,'idclient','idclient');    
    }
    use HasFactory;
}
