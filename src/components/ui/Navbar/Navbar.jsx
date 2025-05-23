import { NavLink } from "react-router-dom";

import navigation from "../../../constants/navigation";


export default function Navbar() {

    return (
        <div className="flex mx-4">

            {navigation.map(({route, title}) => 
                <NavLink key={route} to={route} className={({ isActive }) =>
                `${isActive ? 'mx-2 border-b-2 border-orange-600 ' : 'mx-2'}`
            }>
                <p className="mx-2 hover:text-orange-600"> {title} </p>
            </NavLink>
            )}

        </div>
    )
}
