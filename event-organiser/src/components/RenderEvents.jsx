//importing necessary resources
import { Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
//importing styling
import "./Stylesheet.css";

//function that creates the cards containing each event's information
//the function receives props from the dashboard which it must use --
//-- to add the correct data to the cards
export default function RenderEvents({ title, eventList, deleteEvent }) {
  //creating the navigation hook
  const nav = useNavigate();

  //function that takes the importance of each event and assigns a --
  //-- color to the event accordingly
  const importanceColor = (event) => {
    if (event.importance === "High") {
      return "Red";
    } else if (event.importance === "Medium") {
      return "Orange";
    } else if (event.importance === "Low") {
      return "Green";
    }
  };

  return (
    <div>
      {/*if the category has no events (the eventList is empty) -->
      nothing will show*/}
      {/*if the category has events (the eventList isn't empty) -->
      the category name and all its events will be displayed*/}
      {eventList.length === 0 || !eventList ? (
        <></>
      ) : (
        <div className="eventCategoryContainer">
          {/*display the category heading*/}
          <h4 className="dashboardHeading">{title}</h4>

          {/*creating the event cards*/}
          <Row>
            {eventList.map((event) => (
              /*three event cards can fit into one row*/
              <Col md={4} key={event.id}>
                <Card>
                  <Card.Body
                    className="eventCard"
                    /*making the top border of each card the color that was
                    assigned to the event based on the importance*/
                    style={{
                      borderTop: `3px solid ${importanceColor(event)}`,
                    }}
                  >
                    {/*displaying the name of each event*/}
                    <Card.Title
                      style={{ textAlign: "center", fontWeight: "bold" }}
                    >
                      {event.name}
                    </Card.Title>

                    <br />

                    {/*displaying the description of each event*/}
                    <Card.Text>
                      <span style={{ fontWeight: "bold" }}>Description: </span>
                      {event.description}
                    </Card.Text>

                    {/*displaying the date of each event*/}
                    <Card.Text>
                      <span style={{ fontWeight: "bold" }}>Date: </span>
                      {event.date}
                    </Card.Text>

                    {/*displaying the time of each event*/}
                    <Card.Text>
                      <span style={{ fontWeight: "bold" }}>Time: </span>
                      {event.time}
                    </Card.Text>

                    {/*displaying the location of each event*/}
                    <Card.Text>
                      <span style={{ fontWeight: "bold" }}>Location: </span>
                      {event.location}
                    </Card.Text>

                    {/*creating the buttons for each event card*/}
                    <div className="eventCardButtons">
                      <span>
                        {/*creating an edit button that will take users back to
                        the AddChangeEvent form*/}
                        {/*using the navigate hook to pass along the event information*/}
                        <button
                          className="renderEventsButton"
                          onClick={() =>
                            nav("/AddChangeEvent", {
                              state: { editEvent: event },
                            })
                          }
                        >
                          Edit
                        </button>
                      </span>

                      <span>
                        {/*creating a delete button to remove the event*/}
                        <button
                          className="renderEventsButton"
                          onClick={() => {
                            deleteEvent(event.id);
                          }}
                        >
                          Delete
                        </button>
                      </span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
}

/*RESOURCES:*/

/*Name: 06-034_React-Routing.pdf*/
/*From: HyperionDev*/
/*Reason: To understand the useNavigation hook and how to use it*/
