import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import MostRead from "../Pages/MostRead";
import ReadingHistory from "../Pages/ReadingHistory";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "most-read",
                element: <MostRead />

            },
            {
                path: "history",
                element: <ReadingHistory />
            },
            {
                path: "cart",
            },
        ],
    },
]);

export default routes;