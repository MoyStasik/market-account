import "./header.css";

function Header({selectedService} : {selectedService: string}) {

    return (
        <>
            <div className="header">
                <div className="header-user-info">
                    <div className="header-user-info__span">
                        На главную
                    </div>
                    <div className="">
                        <img src="" alt="..." />
                    </div>
                    <div className="">
                        <img src="" alt="..." />
                    </div>
                </div>
                <div className="service-name">
                    <span className="service-name__span">{selectedService}</span>
                </div>
            </div>
        </>
    );
}

export default Header;