import Home from "./pages/Home";
import About from "./pages/About";
import CountryProfile from "./components/CountryProfile";
import ErrorPage from "./pages/ErrorPage";

const routes = [
    {
        path: "/",
        element: <Home/>,
        errorElement: <ErrorPage />
    },
    {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />
    },
    {
        path: "/country/:id",
        element: <CountryProfile />,
        errorElement: <ErrorPage />
    }
]

export default routes;