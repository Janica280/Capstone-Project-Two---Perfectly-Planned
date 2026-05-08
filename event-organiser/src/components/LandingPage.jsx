//importing necessary resources
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
//importing the NavBar component from NavBar.jsx
import NavBar from "../routes/NavBar";
//importing styling
import "./Stylesheet.css";

//function that creates the landing page
export default function LandingPage() {
  //creating the navigation hook
  const nav = useNavigate();

  return (
    <div>
      {/*displaying the navigation bar*/}
      <NavBar />

      {/*displaying the heading for this webpage/component*/}
      <h1 className="heading">Welcome!</h1>

      <Container className="landingContainer">
        {/*displaying some informative information to the user*/}
        <Row>
          <p>
            This website can assists you with your busy schedule, allowing you
            to keep track of all those important events without breaking a
            sweat!
          </p>
        </Row>

        <Row>
          <p>
            Before we can start, please log in to your account, or create a new
            account:
          </p>
        </Row>

        {/*displaying two buttons which the user can use to navigate. Their
        options are the login button and the register button*/}
        <Row className="landingButtonRow">
          <Col xs="auto">
            <button className="landingButton" onClick={() => nav(`/Login`)}>
              Login
            </button>
          </Col>

          <Col xs="auto">
            <button className="landingButton" onClick={() => nav(`/Register`)}>
              Create account
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

/*RESOURCES:*/

/*Name: 06-034_React-Routing.pdf*/
/*From: HyperionDev*/
/*Reason: To see how I am supposed to do the routing*/

/*Name of webpage: Grid system*/
/*Name of website: React Bootstrap*/
/*Reason: I wanted to learn how I could style the columns in the
landingButtonRow better because they wen't working the normal way*/
/*URL: https://react-bootstrap.netlify.app/docs/layout/grid/ */
