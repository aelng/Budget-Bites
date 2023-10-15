import { FunctionComponent } from "react";
import Card from "../../components/Card/Card";
import { useAppContext } from "../../hooks/useAppContext";

const Home: FunctionComponent = () => {
    const { products } = useAppContext();
    return (
        <div className="page">
            <h2 className="text-[2rem] mb-4">Recommended for you</h2>
            <div className="card-container">
                {products.map((product, i) => (
                    <Card {...{ product, key: i }} />
                ))}
            </div>
        </div>
    );
};

export default Home;
