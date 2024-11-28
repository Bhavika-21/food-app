import "./index.css";

import { Outlet, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy, useEffect, useState } from "react";

import About from "./components/About";
import Body from "./components/Body";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Header from "./components/Header";
import { Provider } from "react-redux";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";

const Grocery = lazy(() => import("./components/Grocery"));


function App() {
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    const data = {
      name: "Bhavika",
    };
    setUserInfo(data.name);
  }, []);

  return (
    <Provider store={appStore}> 
    <div className="App">
      <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </div>
    </Provider>
    
  );
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<h1>Content is loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      
      {
        path:'/cart',
        element: <Cart/>
      }
      ,
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

export { appRouter };
export default App;
