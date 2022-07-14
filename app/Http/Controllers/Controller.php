<?php

namespace App\Http\Controllers;

use App\Traits\ValidateResponseTrait;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    use ValidateResponseTrait;

    public function consoleLog($var)
    {
        echo '<script>';
        echo 'console.log(' . ($var) . ')';
        echo '</script>';
    }

    /**
     * Show selected columns of all resources from storage
     *
     * @param  obj  $model
     * @param  str|arr  $columns you whant to return, default value is '*' (all)
     * @return \Illuminate\Http\Response
     */
    public function indexWithSelectedColumns($model, $columns = '*', $failMessage = 'unknown error', $chunk = 1 )
    {
        $data = $model->where('id', '>', $chunk * 10 - 10)->where('id', '<=', $chunk * 10)->select($columns)->with('image')->get();
        return $this->validateCollection($data, $failMessage);

    }
    /**
     * Show selected columns of all resources from storage
     *
     * @param  obj  $model
     * @param  str|arr  $columns you whant to return, default value is '*' (all)
     * @return \Illuminate\Http\Response
     */
    public function searchWithSelectedColumns($model, $phrase, $columns = '*', $columnsToSearch, $failMessage = 'unknown error')
    {
        $agragatedData = collect();
        foreach ($columnsToSearch as $column) {
            $data = $model->where($column, 'like', '%' . $phrase . '%')->select($columns)->get();
            $agragatedData = $agragatedData->concat($data);
        }
        return $this->validateCollection($agragatedData, $failMessage);

    }
}
