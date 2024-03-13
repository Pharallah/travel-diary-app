import App from "./pages/App";
import Main from "./pages/Main";
import About from "./pages/About";
import Favorite from "./pages/Favorites";

const routes = [
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/main",
        element: <Main />,
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/favorites",
        element: <Favorite />
    }
]

export default routes;