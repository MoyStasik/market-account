import { useState } from "react";
import Input from "../input/input";
import "./settings.css";
import Button from "../button/button";

function Settings() {
    const [isDisabledInput, setIsDisabledInput] = useState(true);

    const [username, setUsername] = useState("Станислав Кригер");
    const [bio, setBio] = useState(""); 

    const handleClickEdit = () => {
        setIsDisabledInput(!isDisabledInput);
    }

    const settingsEditImgClasses = isDisabledInput ? "/src/assets/update.svg" : "/src/assets/cancel.svg";
    const avatarImgClasses = isDisabledInput ? "settings-user-avatar__img" : "settings-user-avatar__img change-avatar-image";

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
                        <Input type="text" placeholder="Введите имя" value={username} OnChange={(e) => setUsername(e.target.value)} isDisabled={isDisabledInput}/>
                        <Input type="text" placeholder="Какую-нибудь информацию о себе" value={bio} OnChange={(e) => setBio(e.target.value)} isDisabled={isDisabledInput}/>
                    </div>
                    <div className="settings-submit">
                        {!isDisabledInput && <Button onClick={(event) => event.preventDefault()} buttonText={"Отправить"} />}

                    </div>
                </div>
            </div>
        </>
    );
}

export default Settings;