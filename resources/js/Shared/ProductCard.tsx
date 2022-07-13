import React, { FormEvent, useEffect, useState } from "react";
import { DataDumpProps } from "../Shared/Interfaces";
import useStore from "./Store";

interface ProductCardProps {
    productDescription: string;
    productId: number;
    productImg?: { [key: string]: string | number };
    productName: string;
    productPrice: number;
    classNameProps: string;
}
//
const ProductCard = ({
    productDescription = "description",
    productId,
    productImg,
    productName = "name",
    productPrice = 0,
    classNameProps,
}: ProductCardProps) => {
    const [quantity, setQuantity] = useState(1);
    const addToCart = useStore((state) => state.addProductToCart);
    return (
        <>
            <div
                className={`${classNameProps} grid flex-none w-56 grid-cols-3 gap-2 p-1 grid-rows-8`}
            >
                <div className="col-span-3 bg-[color:var(--background)] text-[color:var(--text-body)] rounded-t-md p-1 font-normal text-center">
                    {productName}
                </div>
                <div className="row-span-3 ">
                    <img src={`${productImg?.url}`} alt="calendar" />
                </div>
                <div className="col-span-2 row-span-2 text-3xl font-thin text-center text-[color:var(--text-strong)]">
                    {productPrice * quantity},- pln
                </div>
                <div className="col-span-2 text-center text-[color:var(--text-body)]">
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
                <div className="col-span-3 row-span-3 p-1 text-xs text-[color:var(--text-body)]">
                    {productDescription}
                </div>
                <button
                    className="col-span-3 p-1 bg-[color:var(--btn-bg)] rounded-b-md hover:bg-[color:var(--btn-hov)] text-center font-strong"
                    onClick={() => null
                        // addToCart({ id: productId, quantity: quantity }) TODO
                    }
                >
                    Buy
                </button>
            </div>
        </>
    );
};

export default ProductCard;
