import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import CreateEntry from "./pages/CreateEntry";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";
import SignUp from "./pages/SignUp";

const user = 1;

const router = createBrowserRouter([    
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <LogIn />
    },
    {
        path: "/register",
        element: <SignUp />
    },
    // {
    //     path: "/my-account",
    //     element: <Settings />
    // },
    {
        path: "/newentry",
        element: <CreateEntry />
    }//,
    // {
    //     path: "view-entry",
    //     element: <Entry />
    // }
]);

function App() {
    return (
    <div>
        <Header />
        {user ? <RouterProvider router={router} /> : <LogIn />}
        <Footer />
    </div>

    );
}

export default App;
