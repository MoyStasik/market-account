import "./advertisementContainer.css";

function AdvertisementContainter() {
    return(
        <>
            <div className="advertisement-container">
                <div className="advertisement-container-header">
                    <div className="advertise-search">
                        <img src="advertise-search__img" alt="" />
                        
                        
                    </div>
                    <div>
                        <input type="text" placeholder="Найти объявление" />
                    </div>
                    <div>
                        <button>+ Добавить</button>
                    </div>
                </div>
                <div className="advertisement-container-products">
                    <img src="" alt="..." />
                    <img src="" alt="..." />
                    <img src="" alt="..." />
                    <img src="" alt="..." />
                    <img src="" alt="..." />
                    <img src="" alt="..." />
                </div>
            </div>
        </>
    );
};

export default AdvertisementContainter;