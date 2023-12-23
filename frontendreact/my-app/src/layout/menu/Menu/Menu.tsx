import { Menubar } from 'primereact/menubar';
import { MenuItemCommandEvent } from 'primereact/menuitem';
import { useNavigate } from 'react-router-dom';


function Menu(){
    const navigate = useNavigate();
    const items =[
        {
            label:'Home',
            command:(e: MenuItemCommandEvent)=>{ navigate('/') }
            
         },
        {
           label:'Customer',
           command:(e: MenuItemCommandEvent)=>{ navigate('/customer') }
        }
     ];

    return (
        <Menubar model={items}/>
    )
};


export default Menu;