import Home from "./pages/Home";
import About from "./pages/About";
import CountryProfile from "./components/CountryProfile";

const routes = [
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/country/:id",
        element: <CountryProfile />
    }
]

export default routes;