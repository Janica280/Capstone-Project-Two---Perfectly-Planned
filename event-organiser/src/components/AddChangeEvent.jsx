//importing necessary resources
import { Container, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
//import necessary components
import { UserContext } from "./Context";
import NavBar from "../routes/NavBar";
//importing styling
import "./Stylesheet.css";

//function that creates the form where users can input the --
//-- details of events
export default function AddChangeEvent() {
  //getting the addEvent and updateEvent functions from UserContext
  const { addEvent, updateEvent } = useContext(UserContext);

  //creating the navigation hook
  const nav = useNavigate();

  //creating the location hook
  const location = useLocation();
  //if the user clicked the edit button in the AddChangeEvent form --
  //-- it will send the event's details to this form.
  //checking if the form received information from another form --
  //-- and storing the information in a variable
  let eventToEdit = null;
  if (location.state && location.state.editEvent) {
    eventToEdit = location.state.editEvent;
  }

  //creating a function that will validate the user input based on --
  //-- certain criteria
  const validate = (values) => {
    //creating the errors object
    const errors = {};

    //all of the input fields need to be filled out
    if (!values.name) {
      errors.name = "Required";
    }

    if (!values.date) {
      errors.date = "Required";
    }

    if (!values.time) {
      errors.time = "Required";
    }

    if (!values.description) {
      errors.description = "Required";
    }

    if (!values.location) {
      errors.location = "Required";
    }

    if (!values.importance) {
      errors.importance = "Required";
    }

    return errors;
  };

  //using formik and passing the initial values OR the values of --
  //-- the event that is being edited, validate function that was --
  //-- created above, and an onSubmit function to it
  const formik = useFormik({
    initialValues: {
      name: eventToEdit ? eventToEdit.name : "",
      date: eventToEdit ? eventToEdit.date : "",
      time: eventToEdit ? eventToEdit.time : "",
      description: eventToEdit ? eventToEdit.description : "",
      location: eventToEdit ? eventToEdit.location : "",
      importance: eventToEdit ? eventToEdit.importance : "",
    },
    validate,
    onSubmit: (values) => {
      //if the form did receive an event that needs to be edited --
      //-- the updateEvent function will be called and the new values --
      //-- and the specific event's id and user will be passed to it
      if (eventToEdit) {
        updateEvent({ ...values, id: eventToEdit.id, user: eventToEdit.user });
        nav("/Dashboard");
        //otherwise the addEvent function will be called and the new --
        //-- values will be passed to it
      } else {
        addEvent(values);
        alert("Event was added");
        nav("/Dashboard");
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {/*displaying the navigation bar*/}
      <NavBar />

      {/*displaying the heading for this webpage/component*/}
      <h1 className="heading">Event Details</h1>

      <Container className="addChangeEventContainer">
        <p>Please provide the following information about your event:</p>
        <Row>
          {/*spacer column*/}
          <Col md={4}></Col>

          {/*creating the label for the event's name*/}
          <Col md={2} className="eventLabel">
            <label htmlFor="name">Name:</label>
          </Col>

          {/*creating the input for the event's name*/}
          <Col md={6} className="eventInput">
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

          {/*creating the label for the event's date*/}
          <Col md={2} className="eventLabel">
            <label htmlFor="date">Date:</label>
          </Col>

          {/*creating the input for the event's date*/}
          <Col md={6} className="eventInput">
            <input
              id="date"
              name="date"
              type="date"
              /*using formik*/
              value={formik.values.date}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </Col>
        </Row>

        {/*displaying the error messages if a user has visited the date input box
        and there are errors*/}
        {formik.touched.date && formik.errors.date ? (
          <Row>
            <Col>
              <div style={{ color: "red" }}>*{formik.errors.date}</div>
            </Col>
          </Row>
        ) : null}

        <Row>
          {/*spacer column*/}
          <Col md={4}></Col>

          {/*creating the label for the event's time*/}
          <Col md={2} className="eventLabel">
            <label htmlFor="time">Time:</label>
          </Col>

          {/*creating the input for the event's time*/}
          <Col md={6} className="eventInput">
            <input
              id="time"
              name="time"
              type="time"
              /*using formik*/
              value={formik.values.time}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </Col>
        </Row>

        {/*displaying the error messages if a user has visited the time input box
        and there are errors*/}
        {formik.touched.time && formik.errors.time ? (
          <Row>
            <Col>
              <div style={{ color: "red" }}>*{formik.errors.time}</div>
            </Col>
          </Row>
        ) : null}

        <Row>
          {/*spacer column*/}
          <Col md={4}></Col>

          {/*creating the label for the event's description*/}
          <Col md={2} className="eventLabel">
            <label htmlFor="description">Description:</label>
          </Col>

          {/*creating the input for the event's description*/}
          <Col md={6} className="eventInput">
            <input
              id="description"
              name="description"
              type="text"
              /*using formik*/
              value={formik.values.description}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </Col>
        </Row>

        {/*displaying the error messages if a user has visited the description input box
        and there are errors*/}
        {formik.touched.description && formik.errors.description ? (
          <Row>
            <Col>
              <div style={{ color: "red" }}>*{formik.errors.description}</div>
            </Col>
          </Row>
        ) : null}

        <Row>
          {/*spacer column*/}
          <Col md={4}></Col>

          {/*creating the label for the event's location*/}
          <Col md={2} className="eventLabel">
            <label htmlFor="location">Location:</label>
          </Col>

          {/*creating the input for the event's location*/}
          <Col md={6} className="eventInput">
            <input
              id="location"
              name="location"
              type="text"
              /*using formik*/
              value={formik.values.location}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </Col>
        </Row>

        {/*displaying the error messages if a user has visited the location input box
        and there are errors*/}
        {formik.touched.location && formik.errors.location ? (
          <Row>
            <Col>
              <div style={{ color: "red" }}>*{formik.errors.location}</div>
            </Col>
          </Row>
        ) : null}

        <Row>
          {/*spacer column*/}
          <Col md={4}></Col>

          {/*creating the label for the event's importance*/}
          <Col md={2} className="eventLabel">
            <label>Importance:</label>
          </Col>

          {/*creating the input for the event's importance*/}
          <Col md={6} id="eventImportance" className="eventInput">
            <label htmlFor="high">High</label>
            <input
              id="high"
              name="importance"
              type="radio"
              value="High"
              /*using formik*/
              onChange={formik.handleChange}
              checked={formik.values.importance === "High"}
            />

            <label htmlFor="medium">Medium</label>
            <input
              id="medium"
              name="importance"
              type="radio"
              value="Medium"
              /*using formik*/
              onChange={formik.handleChange}
              checked={formik.values.importance === "Medium"}
            />

            <label htmlFor="low">Low</label>
            <input
              id="low"
              name="importance"
              type="radio"
              value="Low"
              /*using formik*/
              onChange={formik.handleChange}
              checked={formik.values.importance === "Low"}
            />
          </Col>
        </Row>

        {/*displaying the error messages if a user has visited the importance radio boxes
        and there are errors*/}
        {formik.touched.importance && formik.errors.importance ? (
          <Row>
            <Col>
              <div style={{ color: "red" }}>*{formik.errors.importance}</div>
            </Col>
          </Row>
        ) : null}

        <Row>
          {/*spacer column*/}
          <Col md={10}></Col>

          {/*button for the user to submit the event information*/}
          <Col md={2}>
            <button className="submitEvent">Submit</button>
          </Col>
        </Row>
      </Container>
    </form>
  );
}

/*RESOURCES:*/

/*Name: 06-035 React - Form Validation.pdf*/
/*From: HyperionDev*/
/*Reason: To see how I should do the form validation*/

/*Name: 06-034_React-Routing.pdf*/
/*From: HyperionDev*/
/*Reason: To understand the useLocation hook and how to use it*/

/*Name of webpage: How to Add Property to an object in JavaScript?*/
/*Name of website: Scaler*/
/*Type of source: Blog*/
/*Author: Mayank Jain*/
/*Last updated: 04/05/2023*/
/*Reason: I was searching for a way to add property to an object when
some of it was coming from props*/
/*URL_1: https://www.scaler.com/topics/add-property-to-object-javascript/ */

/*Name of webpage: Understanding the Spread Operator in React Native*/
/*Name of website: Medium*/
/*Reason: To understand how the spread operator works*/
/*URL_2: https://medium.com/@fa20-bse-059/understanding-the-spread-operator-
in-react-native-21be8f660d65 */

/*Name of webpage: Simple way to use multiple radio buttons in React*/
/*Name of website: Medium*/
/*Type of source: Blog/Article*/
/*Author: Dirask React*/
/*Last updated: 08/03/2021*/
/*Reason: To find out which type of buttons I could use for the importance so
that users could only choose one at a time and they "work together"*/
/*URL: https://dirask-react.medium.com/simple-way-to-use-multiple-radio-buttons
-in-react-cf0a835578fe */

/*Name of webpage: How to create Radio buttons with Formik?*/
/*Name of website: Stack Overflow*/
/*Author: Abd0m1nals*/
/*Last updated: 07/05/2020*/
/*Reason: To find out how formik works with radio buttons, as they don't work quite the 
same as the other inputs I have used*/
/*URL: https://stackoverflow.com/questions/61658020/how-to-create-radio-buttons-with-formik */
