<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    /**
    * The attributes that are mass assignable.
    *
    * @var array<int, string>
    */
    protected $fillable = [
        'acronym',
        'slug',
        'name',
        'description',
        'img',
        'width',
        'height',
        'thickness',
        'weight',
        'tax',
        'price',
        'components',
        'warehouse',
        'expose_level'
    ];
}
