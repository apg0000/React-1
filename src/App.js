import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar"; 
import { ProductCard } from "./components/ProductCard";

import {createBrowserRouter, RouterProvider,Outlet} from "react-router";
import Kid from "./components/kid";
import Error from "./components/Error";
import Men from "./components/Men";
import ProductDetails from "./components/ProductDetails";


const App = () => {
    return (
        <div>
            <Navbar />
            <Outlet/>

        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<ProductCard/>
            },
            {
                path:"/kid",
                element:<Kid/>
            },
            {
                path:"/men",
                element:<Men/>
            },
            {
                path:"/product/:productId",
                element:<ProductDetails/>
            },
        ],
        errorElement:<Error/>
    },
    
    
])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

