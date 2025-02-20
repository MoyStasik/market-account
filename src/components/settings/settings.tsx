import { useState } from "react";
import Input from "../input/input";
import "./settings.css";
import Button from "../button/button";

function Settings() {
    const [isDisabledInput, setIsDisabledInput] = useState(true);

    const handleClickEdit = () => {
        setIsDisabledInput(!isDisabledInput);
    }

    const settingsEditImg = isDisabledInput ? "/src/assets/update.svg" : "/src/assets/cancel.svg";

    return (
        <>
            <div className="settings">
                <div className="settings-header">
                    <div className="settings-edit">
                        <img className="settings-edit__img" src={settingsEditImg} alt="edit-profile" onClick={handleClickEdit} />
                    </div>
                    <div className="settings-user-avatar">
                        <img className="settings-user-avatar__img" src="/src/assets/hameleon.jpeg" alt="..."/>
                        
                    </div>
                    <div className="settings-user-info">
                        <Input type="text" placeholder="ИП Станислав Евгеньевич" isDisabled={isDisabledInput}/>
                        {/* <span className="settings-user-avatar__span">ИП Станислав Евгеньевич</span> */}
                        <Input type="text" placeholder="Какую-нибудь информацию о себе" isDisabled={isDisabledInput}/>
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