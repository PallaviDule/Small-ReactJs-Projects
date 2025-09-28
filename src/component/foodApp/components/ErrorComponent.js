import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
    const err = useRouteError(); // it gives error object
    return (
        <div>
            <h1>Ooppsss!!!!</h1>
            <h3>Something went wrong.</h3>
            <h4>{err.status}:{err.statusText}</h4>
        </div>
    )
};

export default ErrorComponent;