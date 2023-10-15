import {
    createContext,
    useState,
    ReactNode,
    Dispatch,
    SetStateAction,
} from "react";
import { Product } from "../types/types";
import { Coordinate } from "../types/coordinate";
import { useJsApiLoader } from "@react-google-maps/api";
import { DistanceMatrixService } from "google.maps";

type AppContextValue = {
    products: Product[];
    setProducts: Dispatch<SetStateAction<Product[]>>;
    addProduct: (arg0: Product) => void;
    isLoaded: boolean;
    location?: Coordinate;
    DistanceMatrixService: DistanceMatrixService;
};

export const AppContext = createContext<AppContextValue | null>(null);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [location] = useState<Coordinate>([
        43.78709226329809, -79.18961737715792,
    ]);

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
        libraries: ["routes"],
    });

    // navigator.geolocation.getCurrentPosition(
    //     (position) => {
    //         console.log(position);
    //         setLocation([position.coords.longitude, position.coords.latitude]);
    //     },
    //     (err) => console.error(err)
    // );

    const [products, setProducts] = useState<Product[]>([
        {
            name: "Factories",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbem--QBm8pMo8JwwS7U_LJzZCfxh950HxHQ&usqp=CAU",
            left: 2,
            storeName: "Alibaba Group",
            storeIcon:
                "https://wallpapers.com/images/hd/big-luffy-smile-ej9gxxz5rfs2om9m.jpg",
            pickupTime: "3pm-5pm",
            cost: "Free",
            location: [43.78323022514291, -79.16968970436169],
        },
        {
            name: "Ali Elnagmi",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbem--QBm8pMo8JwwS7U_LJzZCfxh950HxHQ&usqp=CAU",
            left: 1,
            storeName: "Alibaba Group",
            storeIcon:
                "https://wallpapers.com/images/hd/big-luffy-smile-ej9gxxz5rfs2om9m.jpg",
            pickupTime: "3pm-5pm",
            cost: "Free",
            location: [43.78323022514291, -79.16968970436169],
        },
        {
            name: "Shreyash Mishra",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbem--QBm8pMo8JwwS7U_LJzZCfxh950HxHQ&usqp=CAU",
            left: 1,
            storeName: "that one cow that got stuck in his parking garage",
            storeIcon:
                "https://wallpapers.com/images/hd/big-luffy-smile-ej9gxxz5rfs2om9m.jpg",
            pickupTime: "3pm-5pm",
            cost: "Free",
            location: [43.78323022514291, -79.16968970436169],
        },
        {
            name: "LI FANG YIN",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbem--QBm8pMo8JwwS7U_LJzZCfxh950HxHQ&usqp=CAU",
            left: 1,
            storeName: "Gary Zhang",
            storeIcon:
                "https://wallpapers.com/images/hd/big-luffy-smile-ej9gxxz5rfs2om9m.jpg",
            pickupTime: "3pm-5pm",
            cost: "Free",
            location: [43.78323022514291, -79.16968970436169],
        },
    ]);
    // const service = new DistanceMatrixService({
    //     options: {
    //         origins: [{ lat: location[0], lng: location[1] }],
    //         destinations: products.map((p) => {
    //             return { lat: p.location[0], lng: p.location[1] };
    //         }),
    //         travelMode: TravelMode.DRIVING,
    //     },
    // });

    const providerValue: AppContextValue = {
        products,

        setProducts,
        addProduct: (newProduct: Product) => {
            setProducts((p) => [...p, newProduct]);
        },
        isLoaded,
        location,
        DistanceMatrixService: service,
    };
    return (
        <AppContext.Provider value={providerValue}>
            {children}
        </AppContext.Provider>
    );
};
