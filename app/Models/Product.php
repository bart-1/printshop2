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
        'image_id',
        'width',
        'height',
        'thickness',
        'weight',
        'tax',
        'price',
        'components',
        'warehouse',
        'expose_level',
    ];

    public function image()
    {
        return $this->hasOne(Image::class, 'id', 'image_id');
    }

    public function category()
    {
        return $this->belongsToMany(Category::class, 'product_category', 'product_id', 'category_id')->withPivot('category_id');
    }
}
