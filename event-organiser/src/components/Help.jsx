//importing necessary resources
import { Container, Row, Col } from "react-bootstrap";
//importing necessary components
import NavBar from "../routes/NavBar";
//importing styling
import "./Stylesheet.css";

//function that creates the help page
export default function Help() {
  return (
    <div>
      {/*displaying the navigation bar*/}
      <NavBar />

      {/*displaying the heading for this webpage/component*/}
      <h1 className="heading">Help Page</h1>

      <Container className="helpContainer">
        {/*creating the index with links where users can quickly
        navigate to their desired section*/}
        <h3 className="helpHeading">Help Index</h3>
        <nav>
          <ul>
            <a href="#navigating" className="helpNav">
              Navigating the website
            </a>
          </ul>

          <ul>
            <a href="#registering" className="helpNav">
              How to register an account
            </a>
          </ul>

          <ul>
            <a href="#events" className="helpNav">
              How to create, edit and delete events
            </a>
          </ul>

          <ul>
            <a href="#organising" className="helpNav">
              Tips for organising events effectively
            </a>
          </ul>
        </nav>

        {/*creating a section to assist users in navigating the website*/}
        <div>
          <h3 className="helpHeading" id="navigating">
            Navigating the website
          </h3>

          <p>
            The bar at the top of the window containing the website's name and a
            row of buttons is called the navigation bar. It contains the
            following buttons:
          </p>

          <ul>
            <li>
              <span style={{ fontWeight: "bold" }}>Landing page</span> : This
              page contains a small introduction to the website along with two
              navigational buttons, the sign-up button and the login button.
              This button is always visible in the navigation bar.
            </li>

            <li>
              <span style={{ fontWeight: "bold" }}>Sign up</span>: This page
              contains input fields where user's enter their personal
              information to create a user's account. This button is only
              visible if the user has not logged into their account yet.
            </li>

            <li>
              <span style={{ fontWeight: "bold" }}>Login</span>: This is where
              user's can enter their username and password in order to log into
              their user's account. This button is only visible if the user has
              not logged into their account yet.
            </li>

            <li>
              <span style={{ fontWeight: "bold" }}>Logout</span>: Once a user
              has logged into their account, the navigation bar will display
              this button. Once pressed, this button will log the user out of
              the current user's account.
            </li>

            <li>
              <span style={{ fontWeight: "bold" }}>Dashboard</span>: This page
              contains an "Add Event" button that allows users to add events to
              their dashboard. The button takes users to a new page where they
              need to provide the details of their events. Once they have
              finished filling in all the details, the users will be taken back
              to the dashboard where their new event will be displayed. Every
              event will be categorized and displayed under one of the following
              headings: Past Events, Today's Events, Events Within A Week,
              Events Within A Month, and Later Events. Each event will also have
              a color assigned to it depending the importance of the event, and
              the color will be displayed at the top of each card. The colors
              work as follows: High importance = red, Medium importance =
              orange, Low importance = green. This button is only visible once
              the user has logged into their account.
            </li>

            <li>
              <span style={{ fontWeight: "bold" }}>Help</span>: This is the page
              you are currently on. It provides instructions and explanations to
              how the website works.
            </li>
          </ul>
        </div>

        <br />

        {/*creating a section to assist users in registering an account on 
        the website*/}
        <div>
          <h3 className="helpHeading" id="registering">
            How to register an account
          </h3>

          <p>
            To register an account, the user needs to start by clicking the
            "Sign Up" button at the top of the navigation bar, or the "Create
            Account" button on the landing page. This will take users to the
            register form, where they must fill out their name, email address,
            username and password. Once the register button is clicked, the user
            account will be created and stored, and the user will be taken the
            login page. From there they can log into their account that they
            just created using their username and password.
          </p>
        </div>

        <br />

        {/*creating a section to assist users in creating, editing and deleting events
        in the website*/}
        <div>
          <h3 className="helpHeading" id="events">
            How to create, edit and delete events
          </h3>

          <p>
            To create, edit or delete an event, a user must first log into their
            account. From there, their dashboard will be made available to them.
          </p>

          <ul>
            <li>
              To <span style={{ fontWeight: "bold" }}>Add an event</span>: Press
              the "Add Event" button on the dashboard. This will take users to a
              form where they must fill out the details of their events. These
              details include the name, date, time, description, location and
              importance of the events. Once all the information is filled out,
              the users can go ahead and press the "Submit" button. They will
              then be taken back to the Dashboard where their new events will
              then be displayed.
            </li>

            <li>
              To <span style={{ fontWeight: "bold" }}>Edit an event</span>: At
              the bottom-right of each event card there will be an "Edit"
              button. By clicking the button, users will be taken back to the
              same form where they created the event, displaying all of the
              event's details as they currently are. Users can then change
              whatever details they like and once again click the "Submit"
              button. The dashboard will then display the event with the newly
              updated details.
            </li>

            <li>
              To <span style={{ fontWeight: "bold" }}>Delete an event</span>: At
              the bottom-right of each event card there will be a "Delete"
              button. Users only have to press the delete button, and the event
              will be removed from their dashboard.
            </li>
          </ul>
        </div>

        <br />

        {/*creating a section that gives users tips for organising their events*/}
        <div>
          <h3 className="helpHeading" id="organising">
            Tips for organising events effectively
          </h3>

          <p>
            While the website takes the initiative on categorising user's events
            in respective timeframes and importance levels, it can be good
            practice for users to do the following:
          </p>

          <ul>
            <li>Organise events in order of most to least relevance.</li>

            <li>
              Organise events that are on the same day in order of occurrence.
            </li>

            <li>
              Organise events that are in the same category in order of
              occurrence.
            </li>

            <li>Group events of the same importance level together.</li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
