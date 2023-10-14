import { FunctionComponent } from "react";
import Card from "../../components/Card/Card";
import { useAppContext } from "../../hooks/useAppContext";

const Home: FunctionComponent = () => {
    const { products } = useAppContext();
    return (
        <div className="page">
            <h2 className="text-[2rem]">Recommended for you</h2>
            {products.map((product) => (
                <Card {...{ product }} />
            ))}
        </div>
    );
};

export default Home;
