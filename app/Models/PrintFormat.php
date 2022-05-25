<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PrintFormat extends Model
{
    use HasFactory;

    protected $fillable = [
        'acronym',
        'width',
        'height',
    ];
}
