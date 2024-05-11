import Home from "../pages/site/Home/Home";
import Shop from "../pages/site/Shop/Shop";
import AdminRoot from "../pages/admin/AdminRoot";
import SiteRoot from "../pages/site/SiteRoot";
import Error from "../pages/Error/Error";
import Products from "../components/admin/Products/Products";
const ROUTES = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <Products />,
      },
    ],
  },
];
export default ROUTES;
