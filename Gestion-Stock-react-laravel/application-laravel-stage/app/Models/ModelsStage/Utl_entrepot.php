<?php

namespace App\Models\ModelsStage;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Utl_entrepot extends Model
{
    protected $table = 'utl_entrepot';
    protected $primaryKey = 'idUE';
    protected $fillable = ['idE', 'idU'];
    use HasFactory;
}
