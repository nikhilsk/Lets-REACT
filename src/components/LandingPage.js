import React from "react";
import "./LandingPage.css";
import Button from "./Button"; // Import Button Component
import { useHistory } from "react-router-dom";

function LandingPage() {
    const history = useHistory(); 
    return (
        <div className="landing-container">
            <h1>🍽️ Welcome to Gourmet Haven</h1>
            <p>Experience the finest flavors crafted with passion and perfection.  
               Indulge in a delightful dining experience that satisfies both soul and taste buds.</p>
            {/* Book a Table Button */}
            <Button text="Book a Table" onClick={() => alert("Reservation Confirmed!")} />

            {/* Place Order Button */}
            <Button text="Place Order" onClick={() => alert("Order Confirmed!")} />
            
            <Button text="Go to Menu" onClick={() => history.push("/menu")} />
        </div>
    );
}

export default LandingPage;
