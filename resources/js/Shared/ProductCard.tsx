import React, { FormEvent, useState } from "react";

interface ProductCardProps {
    addToCart: CallableFunction;
    productDescription: string;
    productId: number;
    productImg: string;
    productName: string;
    productPrice: number;
}

const ProductCard = ({
    addToCart,
    productDescription = "description",
    productId,
    productImg,
    productName = "name",
    productPrice = 0,
}: ProductCardProps) => {
    const [quantity, setQuantity] = useState(1);
    return (
        <>
            <div className="grid flex-none grid-cols-3 gap-2 p-3 rounded-md bg-[color:var(--background)] grid-rows-8 w-56 drop-shadow-md">
                <div className="col-span-3 bg-[color:var(--side-elements)] text-[color:var(--text-body)] rounded-t-md p-1">
                    {productName}
                </div>
                <div className="row-span-3 ">
                    <img src={`${productImg}`} alt="calendar" />
                </div>
                <div className="col-span-2 row-span-2 text-3xl font-thin text-center text-[color:var(--text-strong)]">
                    {productPrice * quantity},- pln
                </div>
                <div className="col-span-2 text-center">
                    pcs{" "}
                    <input
                        type="number"
                        className="w-1/2"
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
                <div className="col-span-3 p-1 bg-[color:var(--btn-bg)] rounded-b-md hover:bg-[color:var(--btn-hov)] text-center font-strong">
                    <button onClick={() => addToCart(productId, quantity)}>
                        Buy
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
