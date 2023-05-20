import { lazy } from "react";

const LayoutModule = lazy(() => import("../app/module/layout"));
const Auth = lazy(() => import("../app/module/auth"));
const Pagenotfound = lazy((() => import("../app/shared/pageNotFound")));

const layoutRoutes = [
  {
    path: "/login",
    name: "Login Screen",
    component: Auth,
  },
  {
    path: "/*",
    name: "Layout",
    component: LayoutModule,
  },
  {
      path: "*",
      name: "Page Not Found",
      component: Pagenotfound
    }
];

export default layoutRoutes;