<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class categorie extends Model
{
    protected $table = 'categories';
    protected $primaryKey = 'idcategorie';
    public $timestamps = true;
    protected $fillable = [
        'nom','description'
    ];
    public function produits()
    {
        return $this->hasMany('App\Models\Produit', 'idcategorie');
    }
    use HasFactory;
}
