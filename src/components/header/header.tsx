import "./header.css";

function Header({selectedService} : {selectedService: string}) {

    return (
        <>
            <div className="header">{selectedService}</div>
        </>
    );
}

export default Header;