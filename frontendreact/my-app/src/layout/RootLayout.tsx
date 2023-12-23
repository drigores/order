import { Outlet } from "react-router-dom";
import Menu from "./menu/Menu/Menu";
import { Card } from 'primereact/card';

function RootLayout() {

    const centerClass = 'center';
    return(
        <>
        <Menu/> 
        <div className={centerClass} >
        <Card>
            <Outlet></Outlet>
        </Card>
        </div>
        </>
    )
}

export default RootLayout;
