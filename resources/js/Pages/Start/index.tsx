import { Page } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import { InertiaRouteProps, ParsedJSONData } from "../../Shared/Interfaces";
import ImageFrame from "../../Shared/ImageFrame";
import useStore from "../../Shared/Store";
import ProductCard from "../../Shared/ProductCard";

const Start = () => {
    const { title, imagesCollection, dataDump } = usePage<Page & InertiaRouteProps>()
        .props;
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

    const products = dataPack.map(product => {
        if (product.expose_level === "4" || product.expose_level === "3")
            return (
                <ProductCard
                    key={Number(product.id)}
                    productDescription={String(product.description)}
                    productId={Number(product.id)}
                    productImg={Object(product.image)}
                    productName={String(product.name)}
                    productPrice={Number(product.price)}
                    classNameProps={store}
                />
            );
    })

    return (
        <>
            <div className={`${store} w-full`}>
                <ImageFrame imagesCollection={imagesCollection} time={4} />
            </div>
            <div
                className={` ${store} justify-center text-[color:var(--text-body)]`}
            >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                accusantium vero repellendus excepturi, quae temporibus,
                molestiae fugit, tenetur voluptates aliquam corrupti
                consequatur! Itaque, ut debitis hic quibusdam laboriosam
                recusandae voluptatum. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Animi unde necessitatibus quas nobis, esse
                minima eaque est! Et officia possimus distinctio harum molestias
                beatae nemo iusto magnam ipsa, sapiente enim! Nihil, earum est
                sit debitis labore provident distinctio, dignissimos iste harum
                suscipit mollitia consequuntur consectetur tenetur vitae nemo!
                Non exercitationem quam quos error odit, nihil maiores est
                voluptate reprehenderit nesciunt. Mollitia numquam aliquam
                ducimus, sit explicabo magni earum illum, quibusdam rem totam
                alias itaque laborum expedita repellendus inventore architecto
                repudiandae esse voluptatem fuga officia minus molestias!
                Impedit sunt quaerat veniam. Test.
            </div>
            {products}
        </>
    );
};

export default Start;
