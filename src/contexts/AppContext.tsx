import {
    createContext,
    useState,
    ReactNode,
    Dispatch,
    SetStateAction,
} from "react";
import { Product } from "../types/types";
import { Coordinate } from "../types/coordinate";

type AppContextValue = {
    products: Product[];
    setProducts: Dispatch<SetStateAction<Product[]>>;
    addProduct: (arg0: Product) => void;
    location?: Coordinate;
    setLocation?: Dispatch<SetStateAction<Coordinate>>;
    DistanceMatrixService: google.maps.DistanceMatrixService;
    Geocoder: google.maps.Geocoder;
    cart: Product[];
    addToCart: (arg0: Product) => void;
    removeFromCart: (arg0: Product) => void;
};

export const AppContext = createContext<AppContextValue | null>(null);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [location, setLocation] = useState<Coordinate>([
        43.78709226329809, -79.18961737715792,
    ]);

    const service = new google.maps.DistanceMatrixService();
    const geocoder = new google.maps.Geocoder();

    // navigator.geolocation.getCurrentPosition(
    //     (position) => {
    //         console.log(position);
    //         setLocation([position.coords.longitude, position.coords.latitude]);
    //     },
    //     (err) => console.error(err)
    // );

    const [products, setProducts] = useState<Product[]>([
        {
            name: "Milk",
            image: "https://www.tampabay.com/resizer//qVyNWUKJvqdZM2nZvW9IMTqX0iM=/900x506/smart/filters:format(webP)/arc-anglerfish-arc2-prod-tbt.s3.amazonaws.com/public/HBKH7YGH6EI6TJTLIBWI6S7HAY.jpg",
            left: 5,
            storeName: "Walmart Supercentre",
            storeIcon:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAUVBMVEVHcEw/WGnLmjXjrjxDW0b2tS+mlU38ujD8ujCKg037uTDiqzXeqDTztjT8uS/Inzv/uy/qsDTtrzD2tzLapDDpsDf+uy/Vq0Hysi7orTP3tS5RPCkhAAAAG3RSTlMABTU3Er0U3dAMxnBkprEo/px1eZpQ5xfGReX/NcVzAAAApklEQVR4Ab1RAwLAMAzcas7+/z9n23Vz4cX4YZgAboMIY7INUroNmozxFWl7Y9H+zQHjUjXutNW4V3LwYAvHBdXD8+ucA0fYg2WoI1EZx3FllkQ6HMcmoStUHchUiRvOcyaw9WRD8iKvCHRuAZ9DaZD0CQUpGkOhmzFZlkGqciTL3HBEQuJoWNnJmgSoJyT4ckIfkT7fJt4wN1p2q9lIiB3q0tT4YRQZhQaNlGZesQAAAABJRU5ErkJggg==",
            pickupTime: "3pm-5pm",
            cost: "$0.49",
            location: [43.79823453032201, -79.2007036978067],
        },
        {
            name: "Rotisserie Chicken",
            image: "https://cdn.discordapp.com/attachments/1162120421026578522/1162931896133619863/chicken.png?ex=653dbbba&is=652b46ba&hm=6bcba85c6bc73cd0f0c7142ebbc8b7d57a0c72c2781a900c01f3f0782fa45bec&",
            left: 7,
            storeName: "Costco Wholesale",
            storeIcon:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACsElEQVR4AWLMy8vTUVNTW8nHx6fw+/dvQGfkEDDLEUXh71ZVd/82Ytu2vYpt21jGXMe2vYlt206e/cbT013ITM8q25wyrs5pAQEAkf8OuhCQyESxs/nMm2+++ThuueWWv8L/xK233jrHtCMvD1CtVvEAcYxKEnwI2Pc/xL/5NvkffyIIbRuUMSSbb8rIGaei+/tHTZZlNWDUA76vD9Ga5lPPkt50G+HHnwlJBChEOg481KqEdz6gduB+pDZvGiAAMDgACM0LLiF78FFkaBBZcfnCEGshyxGtEBOh116DbGKMvJWGjmsABCE96wJaDzyCLL8cMj4OIeAXLCR0jKenCM7jZ80ijI/QiBN8mmFQCoDs8afIHn4MtcpKSBwTrCWUSsRHHk7PuaejJicIixZjb7odN9BHdfFCvHMYoqjr4KHHkKGhwhgRWFIiOe4o+q66DE8XZvnlMTdczYJ5c2nNmQfOoehJIM2wM/6BtuciI+/xeYbZbVcEuhzkGQDVZoNyp6zcAqCUKGg2oZGCNhTQGtXXT+vOu8krFcQYJIrJv/mGxa+9Sa4UntCV1bdaMDqMXnEFqNaK6AVGhnCffkF9132oHXYM1f0Opb7DnvTceU9RqguuUEjRcQAkJx+PqpSh0SyciFLIyDAhTbGffUFoR9c9CX6DDYqMbO66GUgIAtB39BHYC89FymXM/PnoUgndbKKBKE6KVYsm23pzQivFW4u0YeIo6gFYvHQx844/kmTLTRl6/kWSv/9G1eto53BxAklMc+UVSddcndq8eUieY4zpkQceeOD3Qw89dPV/ZswgC4EwOEDo6yVUa+hSuWDbxhGufZfHMfmcOdh6g0hrPvnkkxmy5ZZbbn3EEUc8qrWets5lXW4FpxRBa4IE8CA2h9wBXpIojpxz8x966KEL/wXom4HtQRrNHQAAAABJRU5ErkJggg==",
            pickupTime: "3pm-5pm",
            cost: "$2.99",
            location: [43.75961103483255, -79.29779819951865],
        },
        {
            name: "Bannanas",
            image: "https://th.bing.com/th/id/OIP.SQVdxKvswNRbvU-UwXk03gAAAA?pid=ImgDet&rs=1",
            left: 1,
            storeName: "Food Basics",
            storeIcon:
                "https://cdn.discordapp.com/attachments/1162120421026578522/1162984791092760666/a.png?ex=653decfd&is=652b77fd&hm=d68c49e67d5ba89e694c3b4911f57f32884057a1d80bece6c12d49d318421848&",
            pickupTime: "3pm-5pm",
            cost: "$0.99",
            location: [43.81011637266236, -79.27037412310364],
        },
        {
            name: "Chicken On The Rocks",
            image: "https://i.redd.it/kxi5axqo9uo91.jpg",
            left: 1,
            storeName: "Lazeez",
            storeIcon:
                "https://cdn.discordapp.com/attachments/1162120421026578522/1162991156683079681/lazeez.png?ex=653df2eb&is=652b7deb&hm=ea976f04bd06949d07e74121ba66aeba41994ee91420977134d33a382515f83d&",
            pickupTime: "3pm-5pm",
            cost: "$4.99",
            location: [43.78323022514291, -79.16968970436169],
        },
        {
            name: "ดาร์ธ เวเดอร์กินสุนัขของฉัน",
            image: "https://www.google.com/maps/place/Geylang+Serai+Market+and+Food+Centre/@1.3163459,103.8984807,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipO57xIgFcmokVAG-R6iugJnBQRSDuYn3F38S3NY!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipO57xIgFcmokVAG-R6iugJnBQRSDuYn3F38S3NY%3Dw86-h114-k-no!7i6936!8i9248!4m7!3m6!1s0x31da1810a1928cf5:0xe32ae7206bb3ada7!8m2!3d1.3167284!4d103.8982767!10e5!16s%2Fg%2F11b76gjzdf?entry=ttu#",
            left: 1,
            storeName: "Geylang Serai Market and Food Centre",
            storeIcon:
                "https://wallpapers.com/images/hd/big-luffy-smile-ej9gxxz5rfs2om9m.jpg",
            pickupTime: "3pm-5pm",
            cost: "Free",
            location: [1.3167901136442113, 103.8983060507915],
        },
    ]);

    service
        .getDistanceMatrix({
            origins: [{ lat: location[0], lng: location[1] }],
            destinations: products.map((p) => {
                return { lat: p.location[0], lng: p.location[1] };
            }),
            travelMode: google.maps.TravelMode.DRIVING,
        })
        .then((res) => {
            const tempProducts = [...products];
            res.rows[0].elements.map((element, i) => {
                tempProducts[i].DistanceMatrixResponseElement = element;
            });
            setProducts(tempProducts);
        });

    const [cart, setCart] = useState<Product[]>([]);

    const providerValue: AppContextValue = {
        products,
        setProducts,
        addProduct: (newProduct: Product) => {
            setProducts((p) => [...p, newProduct]);
        },
        location,
        setLocation,
        Geocoder: geocoder,
        DistanceMatrixService: service,
        cart,
        addToCart: (cartItem: Product) => {
            setCart((prevCart) => [...prevCart, cartItem]);
        },
        removeFromCart: (cartItem: Product) => {
            setCart((prevCart) => prevCart.filter((item) => item !== cartItem));
        },
    };
    return (
        <AppContext.Provider value={providerValue}>
            {children}
        </AppContext.Provider>
    );
};
