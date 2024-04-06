import { useRouteError } from "react-router";
const Error = () => {
    
    const err=useRouteError()
    console.log(err)

    return (
        <div>
            <h1>Page Not Found...</h1>
            <h3>Try again later</h3>
            <h4>{err.status} {err.statusText}</h4>
        </div>
    )
}

export default Error
