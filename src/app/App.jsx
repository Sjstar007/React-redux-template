import React,{ useState,Suspense, useEffect } from 'react'
import { GlobalContext } from '../context/globalContext';
import ProtectedRoutes from '../routes/protectedRoutes';
import { Routes,Route } from 'react-router-dom';
import routingConfig from '../routes/layoutRoute';
// import Header from '../app/module/header/header';
import { fetchStatistics } from '../redux/slice';
import { useDispatch, useSelector } from "react-redux";
import ErrorBoundary from './shared/Error/ErrorBoundary';

import './App.css'

function App() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.firstApiCalll);

  console.log("data:::",data)
  const [globalContext ,setGlobalContext] = useState({
    userInfo: null,
    token: null,
    isLoading: false,
    language: ''  
  })

  useEffect(() => {
    dispatch(fetchStatistics())
  },[])

  return (
    <>
    <ErrorBoundary>
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
    </ErrorBoundary>
    </>
  )
}

export default App