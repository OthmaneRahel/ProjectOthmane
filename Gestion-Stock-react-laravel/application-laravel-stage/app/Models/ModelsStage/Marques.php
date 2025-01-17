<?php

namespace App\Models\ModelsStage;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Marques extends Model
{
    protected $table = 'marque';
    protected $primaryKey = 'idMarque';
    protected $fillable = ['nomMarque'];
    use HasFactory;
}
