import "./button.css";

type buttonProps = {
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    buttonText: string,
}

function Button(props : buttonProps) {
    const {onClick, buttonText} = props;

    return (
        <button className="btn" onClick={(event) => onClick(event)} >{buttonText}</button>
    );
}

export default Button;
