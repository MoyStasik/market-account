import "./input.css"

interface InputProps {
    type: string;
    placeholder: string;
    isDisabled?: boolean;
};

const Input: React.FC<InputProps> = ({type, placeholder, isDisabled}) => {
    return (
        <>
            {isDisabled && <input  className="input" type={type} placeholder={placeholder} disabled ></input>}
            {!isDisabled && <input  className="input" type={type} placeholder={placeholder} ></input>}
        </>
    );
}



export default Input;

