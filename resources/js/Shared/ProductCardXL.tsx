import React, { FormEvent, useEffect, useState } from "react";
import { DataDumpProps } from "./Interfaces";
import useStore from "./Store";

interface ProductCardXLProps {
    productDescription: string;
    productId: number;
    productImg?: { [key: string]: string | number };
    productName: string;
    productPrice: number;
    classNameProps: string;
}
//
const ProductCardXL = ({
    productDescription = "description",
    productId,
    productImg,
    productName = "name",
    productPrice = 0,
    classNameProps,
}: ProductCardXLProps) => {
    const [quantity, setQuantity] = useState(1);
    const addToCart = useStore((state) => state.addProductToCart);
    return (
        <>
            <div
                className={`${classNameProps} grid flex-none w-96 grid-cols-7 gap-2 p-1 grid-rows-12`}
            >
                <div className="col-span-8 row-span-1 bg-[color:var(--background)] text-[color:var(--text-body)] rounded-t-md p-1 font-normal text-center">
                    {productName}
                </div>
                <div className="col-span-4">
                    <img src={`${productImg?.url}`} alt="calendar" />
                </div>
                <div className="grid col-span-4 gap-2 grid-rows-10">
                    <div className="row-span-2 text-3xl font-thin text-center text-[color:var(--text-strong)]">
                        {productPrice * quantity},- pln
                    </div>
                    <div className="text-center row-span-2 text-[color:var(--text-body)]">
                        pcs{" "}
                        <input
                            type="number"
                            className="w-1/2 bg-[color:var(--background)] rounded-md"
                            min={0}
                            max={999}
                            value={quantity}
                            onChange={(e: FormEvent<HTMLInputElement>) =>
                                setQuantity(Number(e.currentTarget.value))
                            }
                        />
                    </div>
                    <div className="p-1 row-span-6 text-xs text-[color:var(--text-body)]">
                        {productDescription}
                    </div>
                </div>
                <button
                    className="col-span-8 row-span-1 p-1 bg-[color:var(--btn-bg)] rounded-b-md hover:bg-[color:var(--btn-hov)] text-center font-strong"
                    onClick={
                        () => null
                        // addToCart({ id: productId, quantity: quantity }) TODO
                    }
                >
                    Buy
                </button>
            </div>
        </>
    );
};

export default ProductCardXL;
