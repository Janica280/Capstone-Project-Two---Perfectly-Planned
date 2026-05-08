//import necessary resources
import { Container, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "./Context";
import { useNavigate } from "react-router-dom";
//import necessary components
import RenderEvents from "./RenderEvents";
import NavBar from "../routes/NavBar";
//importing styling
import "./Stylesheet.css";

//function that creates the dashboard page
export default function Dashboard() {
  //getting the deleteFunction function, and the events and currentUser--
  //-- states from UserContext
  const { currentUser, events, deleteEvent } = useContext(UserContext);
  //creating the navigation hook
  const nav = useNavigate();

  //filtering all the events to only get the events where the username matches
  //-- the username of the currently logged in user
  const userEvents = events.filter(
    (event) => event.user === currentUser.username,
  );

  //creating an exact timestamp of when the event was created
  const today = new Date();
  //setting the clock to midnight so we compare days instead of hours/minutes/seconds
  today.setHours(0, 0, 0, 0);

  //a function that calculates the difference of days between "today" and the --
  //-- date of the events
  const daysDifference = (date) => {
    //getting the date of the event and turning it from string to date format
    const eventDate = new Date(date);
    //setting the clock to midnight so we compare days instead of hours/minutes/seconds
    eventDate.setHours(0, 0, 0, 0);
    //turning the millisecond difference that is returned into a day difference
    const dayDifference = (eventDate - today) / (1000 * 60 * 60 * 24);
    return dayDifference;
  };

  //categorizing the user's events into:
  //past events: daysDifference < 0
  //today's events: daysDifference = 0
  //the events in the next week: 0 < daysDifference <= 7
  //the events in the next month: 7 < daysDifference <= 30
  //and events later than a month: daysDifference > 30
  const categorizeEvents = {
    past: userEvents.filter((event) => {
      return daysDifference(event.date) < 0;
    }),
    today: userEvents.filter((event) => daysDifference(event.date) === 0),
    week: userEvents.filter((event) => {
      return daysDifference(event.date) > 0 && daysDifference(event.date) <= 7;
    }),
    month: userEvents.filter((event) => {
      return daysDifference(event.date) > 7 && daysDifference(event.date) <= 30;
    }),
    other: userEvents.filter((event) => {
      return daysDifference(event.date) > 30;
    }),
  };

  return (
    <div>
      {/*displaying the navigation bar*/}
      <NavBar />

      {/*displaying the heading for this webpage/component*/}
      <h1 className="heading">Dashboard</h1>

      <Container className="dashboardContainer">
        <Row>
          {/*spacer column*/}
          <Col md={10}></Col>

          {/*button that takes the user to the Add/ChangeEvent form
          so that they can add a new event*/}
          <Col md={2}>
            <button
              className="addEventButton"
              onClick={() => nav(`/AddChangeEvent`)}
            >
              Add Event
            </button>
          </Col>
        </Row>

        {/*rendering the events for the past and passing information as props*/}
        <Row className="eventColumns">
          <RenderEvents
            title={"Past Events"}
            eventList={categorizeEvents.past}
            deleteEvent={deleteEvent}
          />
        </Row>

        {/*rendering the events for today and passing information as props*/}
        <Row className="eventColumns">
          <RenderEvents
            title={"Today's Events"}
            eventList={categorizeEvents.today}
            deleteEvent={deleteEvent}
          />
        </Row>

        {/*rendering the events for the next week and passing information as props*/}
        <Row className="eventColumns">
          <RenderEvents
            title={"Events Within a Week"}
            eventList={categorizeEvents.week}
            deleteEvent={deleteEvent}
          />
        </Row>

        {/*rendering the events for the next month and passing information as props*/}
        <Row className="eventColumns">
          <RenderEvents
            title={"Events Within a Month"}
            eventList={categorizeEvents.month}
            deleteEvent={deleteEvent}
          />
        </Row>

        {/*rendering the events for after a month and passing information as props*/}
        <Row className="eventColumns">
          <RenderEvents
            title={"Later Events"}
            eventList={categorizeEvents.other}
            deleteEvent={deleteEvent}
          />
        </Row>
      </Container>
    </div>
  );
}

/*RESOURCES:*/

/*Name of webpage: How to calculate the difference of days between two dates in 
JavaScript*/
/*Name of website: Dev*/
/*Type of source: Blog*/
/*Author: Dillion Megida*/
/*Release date: 14/05/2022*/
/*Reason: I wanted to see how I can subtract two dates from each other*/
/*URL: https://dev.to/dillionmegida/how-to-calculate-the-difference-of-days-between-
two-dates-in-javascript-chd */

/*Name of webpage: Date.prototype.setHours()*/
/*Name of website: Mozilla*/
/*Reason, I wanted to understand how setHours() work, to see if I could incorporate
it into my date subtraction logic by setting all the event's dates to midnight*/
/*URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_
Objects/Date/setHours */
