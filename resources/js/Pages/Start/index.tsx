import { Page } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import React, { ReactElement, ReactText } from "react";
import { InertiaRouteProps } from "../../Shared/Interfaces";
import ImageFrame from "../../Shared/ImageFrame";
import useStore from "../../Shared/Store";

const Start = () => {
    const { title, imagesCollection } = usePage<Page & InertiaRouteProps>()
        .props;
    const store = useStore((state) => state.objectsBg);
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
        </>
    );
};

export default Start;
