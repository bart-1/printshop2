import React, { SyntheticEvent, useEffect } from "react";
import Button from "../../Shared/Button";
import Checkbox from "../../Shared/Checkbox";
import Guest from "../../Layouts/Guest";
import Input, { InputType } from "../../Shared/Input";
import ValidationErrors from "../../Shared/ValidationErrors";
import { Link, useForm } from "@inertiajs/inertia-react";

interface LoginProps {
    status: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event: SyntheticEvent) => {
        const currentTarget =
            event.currentTarget as typeof event.currentTarget & {
                name: "email" | "password" | "remember" | any;
                type: string;
                checked: boolean;
                value: typeof data;
            };
        setData(
            currentTarget.name,
            currentTarget.type === "checkbox"
                ? currentTarget.checked
                : currentTarget.value
        );
    };

    const submit = (e: SyntheticEvent) => {
        e.preventDefault();

        post("/login");
    };

    return (
        <Guest>
            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div>

                    <Input
                        type="text"
                        name="email"
                        value={data.email}
                        className="block w-full mt-1"
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="mt-4">

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="block w-full mt-1"
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="block mt-4">
                        <Checkbox
                            name="remember"
                            value={data.remember}
                            handleChange={onHandleChange}
                        />

                        <span className="ml-2 text-sm text-gray-600">
                            Remember me
                        </span>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={"/password.request"}
                            className="text-sm text-gray-600 underline hover:text-gray-900"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <Button
                        className="ml-4"
                        disabled={processing}
                        type="submit"
                        dataCy="submit"
                    >
                        Log in
                    </Button>
                </div>
            </form>
        </Guest>
    );
}
