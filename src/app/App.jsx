import React,{ useState,Suspense } from 'react'
import { GlobalContext } from '../context/globalContext';
import ProtectedRoutes from '../routes/protectedRoutes';
import { Routes,Route } from 'react-router-dom';
import routingConfig from '../routes/layoutRoute';
// import Header from '../app/module/header/header';

import './App.css'

function App() {
  const [globalContext ,setGlobalContext] = useState({
    userInfo: null,
    token: null,
    isLoading: false,
    language: ''  
  })

  return (
    <>
      <GlobalContext.Provider value={{globalContext, setGlobalContext}}>
        {/* <Header /> */}
        <Routes>
          {routingConfig.map((routePorps,index) => {
            const {component: Component, path,...otherprops} = routePorps;
            return (
              <Route
              key={index}
              {...otherprops}
              path={path}
              element={
                <Suspense fallback={<img src="https://lottiefiles.com/97739-loader"></img>}>
                  <Component />
                </Suspense>
              }
            />
            )
          })}
        </Routes>
      </GlobalContext.Provider>
    </>
  )
}

export default App