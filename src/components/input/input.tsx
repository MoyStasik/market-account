import "./input.css"

type inputProps = {
    placeholder : string;
    type: string;
}
function Input(props : inputProps) {
    return (
        <>
            <input className="input" {...props}></input>
        </>
    );
}

export default Input;
