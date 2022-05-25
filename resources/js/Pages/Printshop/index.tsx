import React, { useEffect } from "react";
import { InertiaRouteProps } from "../../Layouts/Template";
import ProductCard from "../../Shared/ProductCard";
import { usePage } from "@inertiajs/inertia-react";
import { Page } from "@inertiajs/inertia";

const Printshop = () => {
    const { products } = usePage<Page & InertiaRouteProps>().props;

    useEffect(() => {
        console.log(products);
    }, []);
    const productsList = products?.map((product) => {
        return (
            <ProductCard
                key={product.id}
                addToCart={() => null}
                productDescription={product.description}
                productId={product.id}
                productImg={product.img}
                productName={product.name}
                productPrice={product.price}
            />
        );
    });

    return <>{productsList}</>;
};

export default Printshop;
