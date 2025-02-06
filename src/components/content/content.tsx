import Header from "../header/header";

type contentProps = {
    selectedService: string,
};

function Content(props : contentProps) {
    return (
        <>
            <Header selectedService={props.selectedService}/>

        </>
    )
}

export default Content;