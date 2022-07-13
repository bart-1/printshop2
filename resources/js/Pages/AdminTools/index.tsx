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

    return (
        <>
            <div
                className={`${store} flex flex-wrap justify-center gap-x-3 w-full gap-y-2 font-semibold text-sm text-[color:var(--text-body)]`}
            >
                {/* <ColorAdminTools cssInputData={cssStoredData} /> */}
                {submenu && (
                    <NavSubMenu
                        links={submenu}
                        classNameProps={store}
                        path="/admin-tools"
                    />
                )}
                <Search />
            </div>

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
