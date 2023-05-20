import React,{Suspense , lazy, Component} from 'react'
import { Route } from "react-router-dom";

function ProtectedRoutes(routeProps) {
  const {component: Component , ...otherprops} = routeProps;

  console.log("component::::", Component)
  return (
    <Route
      {...otherprops}
      element={
        <Suspense fallback={<img src="https://lottiefiles.com/97739-loader"></img>}>
          <Component />
        </Suspense>
      }
    />
  )
}

export default ProtectedRoutes


// {routingConfig.map((routePorps) => {
//   return <ProtectedRoutes
//   path={routePorps.path}
//   name={routePorps.name}
//   key={routePorps.name}
//   component={routePorps.component}
//   />
// })}