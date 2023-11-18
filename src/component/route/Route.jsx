import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/homepage/Home";
import Error from "../pages/homepage/errorpage/Error";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<Error></Error>,
        children: [
            {
                path:'/',
                element:<Home></Home>,

            }]
    },
]);