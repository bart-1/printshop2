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
        'symbol',
        'name',
        'width',
        'height',
        'iso_size',
        'thickness',
        'weight',
        'tax',
        'gross_price',
        'description',
        'elements',
        'warehouse',
    ];
}
