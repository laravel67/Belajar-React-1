import { useRouteError } from "react-router-dom";

function ErrorPage(){
    const error = useRouteError()

    return (
        <>
            <div>Opps, Your Page Not Found</div>
        </>
    )
}

export default ErrorPage;