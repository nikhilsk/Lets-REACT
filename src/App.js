import { useState } from "react";

function App() {

  const [counter, setCounter] = useState(0)
  return (
    <div>
      <h2>Let's get started!</h2>

    <div>
      Counter value in react: {counter}
    </div>
    <button onClick={()=>setCounter(prev=>prev+1)}>CLICK ME</button>
    </div>
  );
}

export default App;
