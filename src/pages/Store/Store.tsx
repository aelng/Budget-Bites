import { useNavigate, useParams } from "react-router-dom";
import { useAppContext } from "../../hooks/useAppContext";

const Store = () => {
    const { products } = useAppContext();
    const { query } = useParams();
    const navigate = useNavigate();

    if (!query) {
        navigate("/");
        return <></>;
    }

    return <div className="page"></div>;
};

export default Store;
