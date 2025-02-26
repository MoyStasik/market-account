import "./input.css"

interface InputProps {
    type: string;
    placeholder: string;
    value: string;
    OnChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    isDisabled?: boolean;
};

const Input: React.FC<InputProps> = ({type, placeholder, value, OnChange, isDisabled}) => {
    return (
        <>
            {isDisabled && <input className="input" type={type} placeholder={placeholder} value={value} onChange={OnChange} disabled></input>}
            {!isDisabled && <input className="input" type={type} placeholder={placeholder} value={value} onChange={OnChange}></input>}
        </>
    );
}



export default Input;

