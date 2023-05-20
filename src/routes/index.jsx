import { lazy } from 'react';

const Dashboard = lazy(() => import("../app/module/dashboard/"));
const PageNotFound = lazy(() => import("../app/shared/pageNotFound"));
const MeetPage = lazy(() => import("../app/module/meetRoom"))
const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/new-meet',
    name: 'new-meet',
    component: MeetPage
  }
]

const defaultRoutes = [
    {
      path: "*",
      name: "Page Not Found",
      component: PageNotFound
    }
  ];

  let appRoutes = [...routes,...defaultRoutes];
  export default appRoutes ;