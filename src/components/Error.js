import { useRouteError } from "react-router";
const Error = () => {
    const err = useRouteError();
    console.log(err);
    
    return (
        <div>
            <h1>Opps!!
                <br/>
                <q style={{color:"red"}} >Stay Aleart !!!!!!!!!!!!!!!!!!</q >
            </h1>
            <h2 style={{color:"dodgerblue"}}>Something went wrong!</h2>
            
        </div>
    )
}
export default Error;
