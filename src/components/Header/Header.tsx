import {
    FunctionComponent,
    useState,
    ChangeEvent,
    FormEvent,
    useEffect,
} from "react";
import "./Header.scss";
import { IconSearch } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
// import {}

const Header: FunctionComponent = () => {
    const [search, setSearch] = useState("");
    const [city, setCity] = useState("Scarborough, Ontario");
    const navigate = useNavigate();

    function handleSearch(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!search) navigate("/");
        else navigate(`/search/${encodeURIComponent(search)}`);
    }

    useEffect(() => {}, []);

    return (
        <header className="bg-[#0E694A] w-auto py-5 px-10 items-center grid grid-flow-column">
            <div className="text-[#D9D9D9] justify-self-start">{city}</div>
            <div className="rounded-full bg-[#D9D9D9] justify-self-stretch px-[5px] flex">
                <IconSearch size={24} className="m-2" color="#444444" />
                <form onSubmit={handleSearch}>
                    <input
                        name="search"
                        placeholder="Search..."
                        className="w-full h-full bg-transparent block py-3 border-none outline-none"
                        value={search}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setSearch(e.target.value)
                        }
                    />
                </form>
            </div>
            <div className="justify-self-end">pfp and stuff</div>
        </header>
    );
};

export default Header;
