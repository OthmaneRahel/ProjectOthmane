<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Etudiant extends Authenticatable
{
    use HasApiTokens , Notifiable;
    protected $table = 'etudiant';
    protected $primaryKey = 'id_etu';
    protected $fillable = ['nom', 'prenom','CNE','CIN','sexe','img','date_naissance','id_group','password'];
    protected $hidden = ['password'];
    public function Avis()
    {
        return $this->hasMany(Avis::class, 'id_etu', 'id_etu');
    }
    public function AbsEtu()
    {
        return $this->hasMany(AbsEtu::class, 'id_etu', 'id_etu');
    }
    public function DemandeEtu()
    {
        return $this->hasMany(DemandeEtu::class, 'id_etu', 'id_etu');
    }
    public function BackList()
    {
        return $this->hasMany(BackList::class, 'id_etu', 'id_etu');
    }
    public function Notes()
    {
        return $this->hasMany(Notes::class, 'id_etu', 'id_etu');
    }
    public function Groupe()
    {
        return $this->belongsTo(Groupe::class, 'id_group',          'id_group');
		                             
    }
    use HasFactory;
}
