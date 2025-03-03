import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Oops</h1>
            <h4>{err.status}: {err.statusText}</h4>
            <h3>Something went wrong</h3>
            
        </div>
    )
}

export default Error;