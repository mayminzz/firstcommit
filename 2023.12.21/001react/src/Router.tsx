import React from "react";
import Home from "./component/Home";
import About from "./component/About";
import NotFound from "./component/NotFound";
import User from "./component/User";
import Follower from "./component/Follower";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorComponent from "./component/ErrorComponent";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home />, errorElement: <ErrorComponent /> },
      { path: "about", element: <About /> },
      { path: "user/:userId", element: <User />, children:[{path:"followers", element: <Follower/> }] },
    ],
    errorElement: <NotFound />,
  },
]);

export default Router;

{
  /* 구버전 <BrowserRouter>
<Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/" element={<About/>}/>
  </Routes>
</BrowserRouter> */
}
