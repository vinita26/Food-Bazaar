import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import Body from './src/components/Body';
import About  from "./src/components/About";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./src/utils/UserContext.js";
// import Grocery from './src/components/Grocery';

const Grocery = lazy(()=> import("./src/components/Grocery"));

const AppLayout = () => {

  const [userName, setUserName] = useState();

  useEffect(()=> {
    const data = {
      name: 'Vinita Gupta'
    }
    setUserName(data.name);
  },[]);
    return (
        <UserContext.Provider value={{loggedInUser: userName}}>
            <Header />
            <Outlet />
        </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: (
            <Suspense fallback={<h1>Loading....</h1>}>
              <About />
            </Suspense>
          ),
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/restaurants/:resId",
          element: <RestaurantMenu />,
        },
        {
          path: "/grocery",
          element: <Suspense fallback={<h2>Grocery is loading...</h2>}><Grocery /></Suspense>,
        },
      ],
      errorElement: <Error />,
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);

