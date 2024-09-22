<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;


class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $primaryKey='id';
    protected $fillable = [
        'name',
        'image',
        'adresse',
        'phone',
        'email',
        'idR',
        'password',
    ];


    public function Orders()
    {
        return $this->hasMany(Orders::class,'id','id');
    }
    public function Reviews()
    {
        return $this->hasMany(Reviews::class,'id','id');
    }
    public function Role()
    {
        return $this->belongsTo(Role::class,'idR','idR');
    }
   
    protected $hidden = [
        'password',
        'remember_token',
    ];

    
    protected $casts = [
        'email_verified_at' => 'datetime',
        // 'password' => 'hashed',
    ];
}