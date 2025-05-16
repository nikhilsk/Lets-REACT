import React from "react";
import "./Menu.css";
import Card from "./Card";
import Button from "./Button";
// import Cart from "./Cart";
import Counter from "./StateEx";
import { useHistory } from "react-router-dom";

// $ npm install animate.css --save
// npm install bulma
import 'animate.css';


function MenuPage() {
    const history = useHistory();
    return (
        <div className="menu-container">
            <h1 className="animate__animated animate__bounce">📜 Our Menu</h1>
            <div className="menu-items">
                <Card 
                    image="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?semt=ais_hybrid&w=740"
                    title="Delicious Pasta"
                    description="Creamy alfredo pasta topped with fresh herbs."
                />
                <Card 
                    image="https://img.freepik.com/premium-photo/homemade-burger-with-beef-cheese-onion-marmalade-wooden-board-fast-food-concept-american-food_90258-3917.jpg?semt=ais_hybrid&w=740"
                    title="Juicy Burger"
                    description="A mouthwatering cheeseburger with crispy fries."
                />
            </div>
            <div>
                <h1>📜 Our Menu</h1>
                <Counter /> {/* Displays the Cart */}
            </div>
            <div>
                <Button text="Go to Homepage" onClick={() => history.push("/")} />
            </div>
        </div>
    );
}

export default MenuPage;
