import { useState } from "react";
import Input from "../input/input";
import "./settings.css";
import Button from "../button/button";
import validateUsername from "../../validation/username";
import validateBio from "../../validation/bio";

function Settings() {
    const [isDisabledInput, setIsDisabledInput] = useState(true);

    const [username, setUsername] = useState("Станислав Кригер");
    const [bio, setBio] = useState("");
    const [errorUsernameMessage, setErrorUsernameMessage] = useState(""); 
    const [errorBioMessage, setErrorBioMessage] = useState(""); 

    const handleClickEdit = () => {
        if (!isDisabledInput) {
            setUsername("Станислав Кригер");
        }
        setIsDisabledInput(!isDisabledInput);
        setErrorUsernameMessage("");
        setErrorBioMessage("");

    }

    const settingsEditImgClasses = isDisabledInput ? "/src/assets/update.svg" : "/src/assets/cancel.svg";
    const avatarImgClasses = isDisabledInput ? "settings-user-avatar__img" : "settings-user-avatar__img change-avatar-image";

    const handleConfirmChanges = (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        let errorFlag = false;
        if (!validateUsername(username.trim())) {
            
            errorFlag = true;
            setErrorUsernameMessage("Длина имени должна быть от 6 до 20 символов");
        }

        if (!validateBio(bio.trim())) {
            errorFlag = true;
            setErrorBioMessage("Допускается длина до 30 символов");
        }

        if (errorFlag) {
            return;
        }

        setErrorUsernameMessage("");
        setErrorBioMessage("");
        setUsername(username);
    }

    return (
        <>
            <div className="settings">
                <div className="settings-header">
                    <div className="settings-edit">
                        <img className="settings-edit__img" src={settingsEditImgClasses} alt="edit-profile" onClick={handleClickEdit} />
                    </div>
                    <div className="settings-user-avatar">
                        <img className={avatarImgClasses} src="/src/assets/hameleon.jpeg" alt="..."/>
                    </div>
                    <div className="settings-user-info">
                        <div className="settings-error-div">
                            <span className="username-error__span">{errorUsernameMessage}</span>
                        </div>
                        <Input type="text" placeholder="Введите имя" value={username} OnChange={(e) => setUsername(e.target.value)} isDisabled={isDisabledInput}/>
                        <div className="settings-error-div">
                            <span className="bio-error__span">{errorBioMessage}</span>
                        </div>
                        <Input type="text" placeholder="Какую-нибудь информацию о себе" value={bio} OnChange={(e) => setBio(e.target.value)} isDisabled={isDisabledInput}/>
                    </div>
                    <div className="settings-submit">
                        {!isDisabledInput && <Button onClick={handleConfirmChanges} buttonText={"Отправить"} />}

                    </div>
                </div>
            </div>
        </>
    );
}

export default Settings;