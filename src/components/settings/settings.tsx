import "./settings.css";

function Settings() {
    return (
        <>
            <div className="settings">
                <div className="settings-header">
                    <div className="settings-edit">
                        <img className="settings-edit__img" src="" alt="edit-profile" />
                    </div>
                    <div className="settings-user-avatar">
                        <img className="settings-user-avatar__img" src="/src/assets/default-avatar.svg" alt="..." />
                        <span className="settings-user-avatar__span">ИП Станислав Евгеньевич</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Settings;