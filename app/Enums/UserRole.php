<?php

namespace App\Enums;


class UserRole
{
    const ADMIN = 'admin';
    const EMPLOYEE = 'employee';
    const USER = 'user';

    const TYPES = [
        self::ADMIN,
        self::EMPLOYEE,
        self::USER
    ];
}
