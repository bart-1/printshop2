import React, {
    ChangeEvent,
    KeyboardEvent,
    MouseEvent,
    useEffect,
    useState,
} from "react";
import Button from "./Button";
import Input from "./Input";
import useStore from "../Shared/Store";
import { Inertia, Page } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { InertiaRouteProps } from "./Interfaces";

interface NavPagesScrollProps {
    recordsTotal?: number;
    classNameProps: string;
}

const NavPagesScroll = ({
    recordsTotal = 1,
    classNameProps,
}: NavPagesScrollProps) => {
    const { returnedPageNumber } = usePage<Page & InertiaRouteProps>().props;

    const [pagesTotal, setPagesTotal] = useState(1);
    const [refreshPage, setRefreshPage] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        setPagesTotal(Math.ceil(recordsTotal / 10));
        if (returnedPageNumber) setPageNumber(returnedPageNumber);
    }, []);

    const handleButton = (e: MouseEvent<HTMLButtonElement>) => {
        switch (true) {
            case e.currentTarget.name === "start":
                setPageNumber(1);
                break;
            case e.currentTarget.name === "minus":
                if (pageNumber > 1) setPageNumber(Number(pageNumber) - 1);
                break;
            case e.currentTarget.name === "plus":
                if (pageNumber < pagesTotal)
                    setPageNumber(Number(pageNumber) + 1);
                break;
            case e.currentTarget.name === "end":
                setPageNumber(pagesTotal);
                break;
        }
        setRefreshPage(true);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") Inertia.visit(`./${pageNumber}`);
    };

    useEffect(() => {
        if (refreshPage) Inertia.visit(`./${pageNumber}`);
        setRefreshPage(false);
    }, [pageNumber]);

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        if (!isNaN(Number(e.currentTarget.value))) setPageNumber(Number(e.currentTarget.value));
        else setPageNumber(prevState => prevState )
    };

    return (
        <>
            <div
                className={`${classNameProps} flex flex-wrap justify-center gap-x-3 w-full gap-y-2 font-semibold text-sm text-[color:var(--text-body)] content-center`}
            >
                <Button
                    type="button"
                    onClick={(e) => handleButton(e)}
                    name="start"
                    size="s"
                >{`|<`}</Button>
                <Button
                    type="button"
                    onClick={(e) => handleButton(e)}
                    name="minus"
                    size="s"
                >{`<<`}</Button>
                <Input
                    type="text"
                    className="w-16 p-0.5 text-center appearance-none text-black"
                    handleChange={(e) => handleInput(e)}
                    handleEnterKeyDown={(e) => handleKeyDown(e)}
                    name="Page"
                    value={pageNumber}
                    appearance={false}
                    min={1}
                    max={pagesTotal}
                />
                <Button
                    type="button"
                    onClick={(e) => handleButton(e)}
                    name="plus"
                    size="s"
                >{`>>`}</Button>
                <Button
                    type="button"
                    onClick={(e) => handleButton(e)}
                    name="end"
                    size="s"
                >{`>|`}</Button>
            </div>
        </>
    );
};
export default NavPagesScroll;
