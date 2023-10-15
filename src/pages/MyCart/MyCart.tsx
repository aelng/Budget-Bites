import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useAppContext } from "../../hooks/useAppContext";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
    "pk_test_51O1IrbCB3sv2tiD79VtlEDKJwbJzK26uyX9nciH1Fz4KXplBHkNRC92YGsL6xS5EtnhoqZP5SrgiEfzWQwIZN2MG006XWKXG1K"
);

function MyCart() {
    const { cart, addToCart, removeFromCart } = useAppContext();
    const handleClick = async (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe!.redirectToCheckout({
            lineItems: [
                {
                    price: "price_1O1KidCB3sv2tiD75oiuGEk1", // Replace with the ID of your price
                    quantity: 1,
                },
            ],
            mode: "payment",
            successUrl: "http://localhost:5173/success",
            cancelUrl: "http://localhost:5173/cancel",
        });
    };

    return (
        <div className="page">
            <h1>My Cart</h1>
            {cart.length ? (
                cart.map((cartProduct) => <div>{cartProduct.name}</div>)
            ) : (
                <div>Your cart is empty.</div>
            )}
            <button
                className="bg-green-700 px-4 py-2 rounded-full text-gray-100 hover:bg-green-600 hover:shadow transition"
                onClick={handleClick}
            >
                Proceed to Checkout
            </button>
        </div>
    );
}

export default MyCart;
