import { FunctionComponent } from "react";
import "./Header.scss";

const Header: FunctionComponent = () => {
    return (
        <header className="bg-[#0E694A] w-auto py-5 px-10 items-center grid grid-flow-column">
            <div className="text-[#D9D9D9] justify-self-start">
                Waterloo, Ontario
            </div>
            <div className="rounded-full bg-[#D9D9D9] justify-self-stretch px-4">
                <input
                    placeholder="Search..."
                    className="w-full h-full bg-transparent block py-3 border-none outline-none"
                />
            </div>
            <div className="justify-self-end">a</div>
        </header>
    );
};

export default Header;
