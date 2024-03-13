import Home from "./components/Home";
import About from "./pages/About";
import Favorite from "./pages/Favorites";

const routes = [
    {
        path: "/",
        element: <Home />,
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