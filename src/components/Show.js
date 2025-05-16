import Button from "./Button"; 

function Show() {
    return (
        <div>
            <Button text="Button 1" onClick={() => alert("Button 1 custom meesage!")} ></Button>
            <Button text="Button 2" onClick={() => alert("Button 2 message")} />
        </div>
    )
}

export default Show;