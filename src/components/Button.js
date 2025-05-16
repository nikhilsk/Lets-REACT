import React from "react";
import "./Button.css"; // Import external styles

function Button({ text, onClick }) {
    return <button className="button" onClick={onClick}>{text}</button>;
}

export default Button;
