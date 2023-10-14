import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar: FunctionComponent = () => {
    return (
        <nav className="bg-[#85A074] sticky h-screen py-10 w-[20vw]">
            <NavLink to="/">Home</NavLink>
        </nav>
    );
};

export default Navbar;
