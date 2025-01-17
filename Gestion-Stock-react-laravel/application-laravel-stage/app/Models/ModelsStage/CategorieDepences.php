<?php

namespace App\Models\ModelsStage;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategorieDepences extends Model
{
    protected $table = 'categorie_depense';
    protected $primaryKey = 'idCate_dep';
    public $timestamps = true;
    protected $fillable = ['code_categorie','nom'];
    public function depences(){
        return $this->hasMany(Depences::class,'idCate_dep','idCate_dep');
    }
    use HasFactory;
}
