import { Link } from "react-router-dom";

export default function Menus({dataMenus}) {
    return ( 
        <>
            {dataMenus.map( menu => (
                <li><Link to={menu.linkTo}>{menu.menu}</Link></li>
            )
            )}
        </>
     );
}