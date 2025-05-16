import React from "react";
import "./Menu.css";
import Card from "./Card";

function MenuPage() {
    return (
        <div className="menu-container">
            <h1>📜 Our Menu</h1>
            <div className="menu-items">
                <Card 
                    image="https://source.unsplash.com/300x200/?food"
                    title="Delicious Pasta"
                    description="Creamy alfredo pasta topped with fresh herbs."
                />
                <Card 
                    image="https://source.unsplash.com/300x200/?burger"
                    title="Juicy Burger"
                    description="A mouthwatering cheeseburger with crispy fries."
                />
            </div>
        </div>
    );
}

export default MenuPage;
