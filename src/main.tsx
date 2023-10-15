import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import "./index.scss";

const render = (status: Status) => {
    switch (status) {
        case Status.LOADING:
            return <>Loading...</>;
        case Status.SUCCESS:
            return <App />;
        default:
            return <>Loading...</>;
    }
};
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Wrapper {...{ render, apiKey: import.meta.env.VITE_GOOGLE_API_KEY }} />
    </React.StrictMode>
);
