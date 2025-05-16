import React, { useState } from "react";

function Cart() {
    // ✅ cartItems is an array that holds all the items a user adds. ✅ setCartItems is the function that updates the cart. ✅ The initial state useState([]) starts as an empty array because the cart is empty at first.
    const [cartItems, setCartItems] = useState([]); // Stores selected items

    const addToCart = (item) => {
        setCartItems([...cartItems, item]); // Updates state
        //The spread operator (...cartItems) ensures that the previous items are not lost.
    };

    // Function to Remove Items from Cart
    const removeFromCart = (index) => {
        setCartItems(cartItems.filter((_, i) => i !== index)); // Remove item at given index
    };

    return (
        <div>
            <h2>🛒 Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Cart is empty. Add some delicious food! 🍕</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item} 
                            <button onClick={() => removeFromCart(index)}>❌ Remove</button>
                        </li>
                    ))}
                </ul>
            )}

            {/* Buttons to add items */}
            <button onClick={() => addToCart("Pasta")}>Add Pasta</button>
            <button onClick={() => addToCart("Burger")}>Add Burger</button>
        </div>
    );
}

export default Cart;
