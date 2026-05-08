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

//function that creates the register page
export default function Register() {
  //creating the navigation hook
  const nav = useNavigate();

  //getting the registerUser function from UserContext
  const { registerUser } = useContext(UserContext);

  //creating a function that will validate the user input based on --
  //-- certain criteria
  const validate = (values) => {
    //creating the errors object
    const errors = {};

    //if the name input box is empty or is longer than --
    //-- 15 characters --> error
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length > 15) {
      errors.name = "Name should not exceed 15 characters";
    }

    //if the email input box is empty or contain characters that it --
    //-- should not --> error
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    //if the username input box is empty, is shorter than --
    //-- 3 characters, or contains any special characters --> error
    if (!values.username) {
      errors.username = "Required";
    } else if (values.username.length < 3) {
      errors.username = "Username should not be less than 3 characters";
    } else if (/[!@#$%^&*(),.?":{}|<>]/.test(values.username)) {
      errors.username = "Username cannot contain special case characters";
    }

    //if the password input box is empty, is too short, does not contain --
    //-- at least one number, one uppercase letter, one lowercase letter, --
    //-- or one special case character --> error
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

  //using formik and passing the initial values, validate function --
  //-- that was created above, and an onSubmit function to it
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      username: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      //passing the values to the registerUser function in UserContext
      registerUser(values);
      alert("You have successfully registered!");
      //navigating to the Login page
      nav("/Login");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        {/*displaying the navigation bar*/}
        <NavBar />

        {/*displaying the heading for this webpage/component*/}
        <h1 className="heading">Register an Account</h1>

        <Container className="registerContainer">
          <Row>
            {/*spacer column*/}
            <Col md={4}></Col>

            {/*creating the label for the user's name*/}
            <Col md={2} className="registrationLabels">
              <label htmlFor="name">Name:</label>
            </Col>

            {/*creating the input for the user's name*/}
            <Col md={6} className="registrationInput">
              <input
                id="name"
                name="name"
                type="text"
                /*using formik*/
                value={formik.values.name}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </Col>
          </Row>

          {/*displaying the error messages if a user has visited the name input box
          and there are errors*/}
          {formik.touched.name && formik.errors.name ? (
            <Row>
              <Col>
                <div style={{ color: "red" }}>*{formik.errors.name}</div>
              </Col>
            </Row>
          ) : null}

          <Row>
            {/*spacer column*/}
            <Col md={4}></Col>

            {/*creating the label for the user's email*/}
            <Col md={2} className="registrationLabels">
              <label htmlFor="email">Email:</label>
            </Col>

            {/*creating the input for the user's email*/}
            <Col md={6} className="registrationInput">
              <input
                id="email"
                name="email"
                type="email"
                /*using formik*/
                value={formik.values.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </Col>
          </Row>

          {/*displaying the error messages if a user has visited the email input box
          and there are errors*/}
          {formik.touched.email && formik.errors.email ? (
            <Row>
              <Col>
                <div style={{ color: "red" }}>*{formik.errors.email}</div>
              </Col>
            </Row>
          ) : null}

          <Row>
            {/*spacer column*/}
            <Col md={4}></Col>

            {/*creating the label for the user's username*/}
            <Col md={2} className="registrationLabels">
              <label htmlFor="username">Username:</label>
            </Col>

            {/*creating the input for the user's username*/}
            <Col md={6} className="registrationInput">
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
            <Col md={2} className="registrationLabels">
              <label htmlFor="password">Password:</label>
            </Col>

            {/*creating the input for the user's password*/}
            <Col md={6} className="registrationInput">
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

            {/*button for the user to submit their information and officially register*/}
            <Col md={2}>
              <button className="registerButton" type="submit">
                Register
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
task - the Registration.jsx component from the level 2 task 10 Form Validation task*/
