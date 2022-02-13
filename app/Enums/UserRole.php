<?php

namespace App\Enums;


class UserRole
{
    const ADMIN = 'admin';
    const EMPLOYEE = 'employee';
    const CUSTOMER = 'customer';

    const TYPES = [
        self::ADMIN,
        self::EMPLOYEE,
        self::CUSTOMER
    ];
}
