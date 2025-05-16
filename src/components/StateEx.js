import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0); // State variable

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count + 1)}>➕ Increase</button>
            <button onClick={() => setCount(count - 1)}>➖ Decrease</button>
            <button onClick={() => setCount(0)}>🔄 Reset</button>
        </div>
    );
}

export default Counter;
