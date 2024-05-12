<?php

namespace App\Models\ModelsPFE;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $table = 'contact';
    protected $primaryKey = 'idC';
    protected $fillable = ['Nom', 'Prenom','adresseEmail','NomDemande','autre_demande','demande'];
    use HasFactory;

}
