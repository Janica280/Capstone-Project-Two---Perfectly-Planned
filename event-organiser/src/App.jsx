//importing necessary resources
import { useState } from "react";
//importing resources for routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//importing all the components that need to be accessible through routing
import LandingPage from "./components/LandingPage.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import Dashboard from "./components/Dashboard.jsx";
import AddChangeEvent from "./components/AddChangeEvent.jsx";
import Help from "./components/Help.jsx";
//importing the UserProvider
import { UserProvider } from "./components/Context.jsx";

function App() {
  const [count, setCount] = useState(0);

  //creating the routing paths
  const router = createBrowserRouter([
    {
      //default page
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/Register",
      element: <Register />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/Dashboard",
      element: <Dashboard />,
    },
    {
      path: "/AddChangeEvent",
      element: <AddChangeEvent />,
    },
    {
      path: "/Help",
      element: <Help />,
    },
  ]);

  return (
    <div>
      {/*wrapping the router in the userProvider so that all these
      elements will have access to the resources inside Context.jsx*/}
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </div>
  );
}

export default App;

/*RESOURCES:*/

/*Name: 06-034_React-Routing.pdf*/
/*From: HyperionDev*/
/*Reason: To see how I am supposed to do the routing and the 
UserProvider context*/
