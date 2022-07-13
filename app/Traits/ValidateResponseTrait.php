<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Collection;

trait ValidateResponseTrait
{
    /**
     * @param arr collection
     * @param str message if collection is empty
     * @return \Illuminate\Http\Response
     */
    public function validateCollection($collection, $failMessage = 'unknown error')
    {
        if (!isset($collection[0]) || $collection[0] == null || count($collection) == 0) {
            $response = new Collection([["Status 204" => $failMessage]]);
            $status = 204;
        } else {
            $response = $collection;
            $status = 200;
        }

        return \response()->json(['response' => $response->toJson(), 'status' => $status]);

    }
}
