//importing necessary resources
import { Container, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
//importing UserContext from Context.jsx;
import { UserContext } from "./Context";
//importing the NavBar component from NavBar.jsx
import NavBar from "../routes/NavBar";
//importing styling
import "./Stylesheet.css";

//function that creates the login page
export default function Login() {
  //creating the navigation hook
  const nav = useNavigate();

  //getting the login function from UserContext
  const { login } = useContext(UserContext);

  //creating a function that will validate the user input based on
  //certain criteria
  const validate = (values) => {
    //creating the errors object
    const errors = {};

    //if the username input box is empty, is shorter than --
    //-- 3 characters, or contains any special characters --> error
    if (!values.username) {
      errors.username = "Required";
    } else if (values.username.length < 3) {
      errors.username = "Username should not be less than 3 characters";
    } else if (/[!@#$%^&*(),.?":{}|<>]/.test(values.username)) {
      errors.username = "Username cannot contain special case characters";
    }

    //if the password input box is empty, is too short, does not contain
    //at least one number, one uppercase letter, one lowercase letter,
    //or one special case character --> error
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    } else if (!/\d/.test(values.password)) {
      errors.password = "Password must contain at least one number";
    } else if (!/[A-Z]/.test(values.password)) {
      errors.password = "Password must contain at least one UPPERCASE letter";
    } else if (!/[a-z]/.test(values.password)) {
      errors.password = "Password must contain at least one lowercase letter";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(values.password)) {
      errors.password =
        "Password must contain at least one special case character";
    }

    return errors;
  };

  //using formik and passing the initial values, validate function
  //that was created above, and an onSubmit function to it
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      //checking that the user has produced the correct username and password
      const validUser = login(formik.values.username, formik.values.password);

      if (validUser) {
        //if the user has successfully logged in
        alert(`You have successfully logged in, ${formik.values.username}!`);
        //navigating to the Login page
        nav("/Dashboard");
      } else {
        //if the user has not successfully logged in
        alert("Invalid username or password!");
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        {/*displaying the navigation bar*/}
        <NavBar />

        {/*displaying the heading for this webpage/component*/}
        <h1 className="heading">Login</h1>

        <Container className="loginContainer">
          <Row>
            {/*spacer column*/}
            <Col md={4}></Col>

            {/*creating the label for the user's username*/}
            <Col md={2} className="loginLabels">
              <label htmlFor="username">Username:</label>
            </Col>

            {/*creating the input for the user's username*/}
            <Col md={6} className="loginInput">
              <input
                id="username"
                name="username"
                type="text"
                /*using formik*/
                value={formik.values.username}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </Col>
          </Row>

          {/*displaying the error messages if a user has visited the username input box
          and there are errors*/}
          {formik.touched.username && formik.errors.username ? (
            <Row>
              <Col>
                <div style={{ color: "red" }}>*{formik.errors.username}</div>
              </Col>
            </Row>
          ) : null}

          <Row>
            {/*spacer column*/}
            <Col md={4}></Col>

            {/*creating the label for the user's password*/}
            <Col md={2} className="loginLabels">
              <label htmlFor="password">Password:</label>
            </Col>

            {/*creating the input for the user's password*/}
            <Col md={6} className="loginInput">
              <input
                id="password"
                name="password"
                type="password"
                /*using formik*/
                value={formik.values.password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </Col>
          </Row>

          {/*displaying the error messages if a user has visited the password input box
          and there are errors*/}
          {formik.touched.password && formik.errors.password ? (
            <Row>
              <Col>
                <div style={{ color: "red" }}>*{formik.errors.password}</div>
              </Col>
            </Row>
          ) : null}

          <Row>
            {/*spacer column*/}
            <Col md={10}></Col>

            {/*button for the user to submit their information and login*/}
            <Col md={2}>
              <button className="loginButton" type="submit">
                Login
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    </form>
  );
}

/*RESOURCES:*/

/*Name: 06-035 React - Form Validation.pdf*/
/*From: HyperionDev*/
/*Reason: To see how I should do the form validation*/
/*Disclaimer: The code I used where I utilised Formik is code that I recycled from a previous 
task - the Login.jsx component from the level 2 task 10 Form Validation task*/
