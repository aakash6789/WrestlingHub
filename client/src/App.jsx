import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Footer from "./components/Footer";
import {
  RouterProvider,
  NavLink,
  Router,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Rivalries from "./components/Rivalries";
import SuperStars from "./components/SuperStars";
import Layout from "./components/Layout";
import Gmoat from "./components/Gmoat";
import Register from "./components/Register";
import Login from "./components/Login";
import StarProfile from "./components/StarProfile";
import { AuthProvider } from "./context/AuthProvider.jsx";
import Shows from "./components/Shows.jsx";
import Comments from "./components/Comments.jsx";
import useAuth from "./hooks/useAuth.js";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        path=""
        element={
          <>
            <Hero />
            <Hero2 />
          </>
        }
      />
      <Route path="/rivalries" element={<Rivalries />} />
      <Route path="/superstar" element={<SuperStars />} />
      <Route path="/superstar/:sname" element={<StarProfile />} />
      {/* <Route path='/comment/:sname' element={<Comments/>}/> */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/gmoat" element={<Gmoat />} />
      <Route path="/shows/:no" element={<Shows />} />
    </Route>
  )
);
const App = () => {
  // const { user, setUser, uname, setUname, comment, setComments } = useAuth();
  return (
    <>
      <div>
        {/* <Navbar/>
      <Hero/>
      <Hero2/>
     <Footer/> */}
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </div>
    </>
  );
};

export default App;
