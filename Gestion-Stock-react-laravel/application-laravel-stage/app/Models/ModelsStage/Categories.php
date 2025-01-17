<?php
namespace App\Models\ModelsStage;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    protected $table = 'categorie';
    protected $primaryKey = 'idCat';
    protected $fillable = ['image', 'code_cat','Nom_categorie','Description','Categorie_parent'];
    use HasFactory;
}