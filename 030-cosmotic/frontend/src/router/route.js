import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import Home from "../pages/home/Home";
import NotFound from "../components/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                path: '/',
                Component: Home
            }
        ]
    },
    {
        path: '*',
        Component: NotFound
    }
])