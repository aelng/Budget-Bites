import { createContext, useState, ReactNode } from "react";
import { Product } from "../types/types";

type AppContextValue = {
    products: Product[];
    addProduct: (arg0: Product) => void;
};

export const AppContext = createContext<AppContextValue | null>(null);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
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
        },
    ]);
    const providerValue: AppContextValue = {
        products,
        addProduct: (newProduct: Product) => {
            setProducts((p) => [...p, newProduct]);
        },
    };
    return (
        <AppContext.Provider value={providerValue}>
            {children}
        </AppContext.Provider>
    );
};
