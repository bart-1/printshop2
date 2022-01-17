import React, { SyntheticEvent } from "react";
import Button from "../../Components/Button";
import Guest from "../../Layouts/Guest";
import Input from "../../Components/Input";
import ValidationErrors from "../../Components/ValidationErrors";
import { useForm } from "@inertiajs/inertia-react";

export default function ForgotPassword({ status }: { status: string }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const onHandleChange = (event: SyntheticEvent) => {
        const currentTarget =
            event.currentTarget as typeof event.currentTarget & {
                name: "email" | "password" | "remember" | any;
                value: typeof data;
            };
        setData(currentTarget.name, currentTarget.value);
    };

    const submit = (e: SyntheticEvent) => {
        e.preventDefault();

        post("password.email");
    };

    return (
        <Guest>
            <div className="mb-4 text-sm text-gray-500 leading-normal">
                Forgot your password? No problem. Just let us know your email
                address and we will email you a password reset link that will
                allow you to choose a new one.
            </div>

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <Input
                    type="text"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    isFocused={true}
                    handleChange={onHandleChange}
                />

                <div className="flex items-center justify-end mt-4">
                    <Button
                        className="ml-4"
                        disabled={processing}
                        type="submit"
                    >
                        Email Password Reset Link
                    </Button>
                </div>
            </form>
        </Guest>
    );
}
