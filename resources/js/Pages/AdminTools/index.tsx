import React, { useEffect, useState } from "react";
import { Inertia, Page } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import ColorAdminTools from "./ColorAdminTools";
import NavSubMenu from "../../Shared/NavSubMenu";
import useStore from "../../Shared/Store";
import Table from "../../Shared/Table";
import { InertiaRouteProps, ParsedJSONData } from "../../Shared/Interfaces";
import NavPagesScroll from "../../Shared/NavPagesScroll";
import Search from "../../Shared/Search";

const AdminTools = () => {
    const {
        cssStoredData,
        submenu,
        title,
        dataDump,
        responseStatus,
        recordsTotal,
    } = usePage<Page & InertiaRouteProps>().props;
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

     const [baseRoutePath, setBaseRouthPath] = useState("");

     useEffect(() => {
         setBaseRouthPath(window.location.pathname);

     }, []);

    const handleBasePath = () => {
        let basePath = '';
        if (baseRoutePath.includes('users'))
            basePath = 'users';
            else if (baseRoutePath.includes('products'))
            basePath = 'products';
        return basePath;
   }

    return (
        <>
            {/* <ColorAdminTools cssInputData={cssStoredData} /> */}
            {submenu && (
                <NavSubMenu
                    links={submenu}
                    classNameProps={store}
                    path="/admin-tools"
                    childrenClassNameProps="flex flex-1  mt-auto justify-end"
                >
                    {" "}
                    <Search basePath={`/admin-tools/${handleBasePath()}`} />
                </NavSubMenu>
            )}

            <Table
                parsedData={dataPack}
                classNameProps={store}
                isActiveHref={responseStatus === 200}
                biggestCellsKeys={["description", "name", "company", "street"]}
            />
            <NavPagesScroll
                recordsTotal={recordsTotal}
                classNameProps={store}
            />
        </>
    );
};

export default AdminTools;
