import React, { useEffect, useState } from "react";
import { InertiaRouteProps } from "../../Shared/Interfaces";
import ProductCard from "../../Shared/ProductCard";
import { usePage } from "@inertiajs/inertia-react";
import { Page } from "@inertiajs/inertia";
import useStore from "../../Shared/Store";
import NavSubMenu from "../../Shared/NavSubMenu";
import { ParsedJSONData } from "../../Shared/Interfaces";
import Search from "../../Shared/Search";

const Printshop = () => {
    const { dataDump, submenu, responseStatus } = usePage<
        Page & InertiaRouteProps
    >().props;
    const store = useStore((state) => state.objectsBg);
    const [dataPack, setDataPack] = useState<ParsedJSONData>([
        { Error: "sorry, no data" },
    ]);

    useEffect(() => {
        if (dataDump) setDataPack(JSON.parse(dataDump));

        return () => {
            setDataPack([{ Error: "sorry, no data" }]);
        };
    }, [dataDump]);

    const productCards = dataPack.map((element) => {
        return (
            <ProductCard
                key={Number(element.id)}
                productDescription={String(element.description)}
                productId={Number(element.id)}
                productImg={Object(element.image)}
                productName={String(element.name)}
                productPrice={Number(element.price)}
                classNameProps={store}
            />
        );
    });

    return (
        <>
            {submenu && (
                <NavSubMenu
                    links={submenu}
                    classNameProps={store}
                    path="/printshop/category"
                ><Search/></NavSubMenu>
            )}
            {responseStatus === 200 && productCards}
        </>
    );
};

export default Printshop;
