//importing necessary resources
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import { useContext } from "react";
//importing UserContext from Context.jsx;
import { UserContext } from "../components/Context";
//importing styling
import "./NavBar.css";

//function that creates the always-present navigation bar
export default function NavBar() {
  //getting the currentUser state and logout function from UserContext
  const { currentUser } = useContext(UserContext);
  const { logout } = useContext(UserContext);

  return (
    <div className="headerView">
      <Row>
        {/*name and title of the website*/}
        <h1 className="heading">Perfectly Planned</h1>
      </Row>

      <Row className="navbar">
        <nav>
          <span>
            {/*button that will take a user to the landing page*/}
            {/*the landing page is also the default page*/}
            <button className="navButton">
              <Link to="/" className="nav_link">
                LandingPage
              </Link>
            </button>
          </span>

          {/*if the currentUser returns a null value --> no one is logged 
          in yet --> display the sign-up and login buttons*/}
          {/*if the currentUser returns a user value --> someone is logged 
          in --> display the dashboard and logout buttons*/}
          {currentUser === null ? (
            <>
              <span>
                {/*button that will take a user to the registration page*/}
                <button className="navButton">
                  <Link to="/Register" className="nav_link">
                    Sign Up
                  </Link>
                </button>
              </span>

              <span>
                {/*button that will take a user to the login page*/}
                <button className="navButton">
                  <Link to="/Login" className="nav_link">
                    Login
                  </Link>
                </button>
              </span>
            </>
          ) : (
            <>
              <span>
                {/*button that will take a user to the logout page*/}
                <button className="navButton" onClick={logout}>
                  <Link to="/" className="nav_link">
                    Logout
                  </Link>
                </button>
              </span>

              <span>
                {/*button that will take a user to the dashboard page*/}
                <button className="navButton">
                  <Link to="/Dashboard" className="nav_link">
                    Dashboard
                  </Link>
                </button>
              </span>
            </>
          )}

          <span>
            {/*button that will take a user to the help page*/}
            <button className="navButton">
              <Link to="/Help" className="nav_link">
                Help
              </Link>
            </button>
          </span>
        </nav>
      </Row>
    </div>
  );
}

/*RESOURCES:*/

/*Name: 06-034_React-Routing.pdf*/
/*From: HyperionDev*/
/*Reason: To see how I am supposed to do the routing*/
