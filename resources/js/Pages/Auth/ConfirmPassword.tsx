import React, { SyntheticEvent, useEffect } from "react";
import Button from "../../Shared/Button";
import Guest from "../../Layouts/Guest";
import Input from "../../Shared/Input";
import Label from "../../Shared/Label";
import ValidationErrors from "../../Shared/ValidationErrors";
import { useForm } from "@inertiajs/inertia-react";

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: "",
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
                value: typeof data;
            };
        setData(currentTarget.name, currentTarget.value);
    };

    const submit = (e: SyntheticEvent) => {
        e.preventDefault();

        post("password.confirm");
    };

    return (
        <Guest>
            <div className="mb-4 text-sm text-gray-600">
                This is a secure area of the application. Please confirm your
                password before continuing.
            </div>

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div className="mt-4">
                    <Label forInput="password" value="Password" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Button
                        className="ml-4"
                        disabled={processing}
                        type="submit"
                    >
                        Confirm
                    </Button>
                </div>
            </form>
        </Guest>
    );
}
