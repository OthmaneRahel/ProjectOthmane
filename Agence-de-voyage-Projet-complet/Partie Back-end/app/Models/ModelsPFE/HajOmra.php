<?php

namespace App\Models\ModelsPFE;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HajOmra extends Model
{
    protected $table = 'HajOmra';
    protected $primaryKey = 'idHO';
    protected $fillable = ['nom', 'image','date_depart','date_arrivee','prix','description'];
    use HasFactory;
}
