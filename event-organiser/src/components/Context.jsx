//importing the necessary resources
import { createContext, useState } from "react";

//creating the context object
export const UserContext = createContext();

//creating the function that contains all of the logic that other --
//-- components (children) will have access to
export const UserProvider = ({ children }) => {
  //creating the states for all the user accounts, --
  //-- for the current user that is logged in, --
  //-- and for all of the events created by all the users
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [events, setEvents] = useState([]);

  //adding a new user and their details to the users array
  const registerUser = (userData) => {
    setUsers((prev) => [...prev, userData]);
  };

  //allowing users to log into the account they created if the --
  //-- username and password they provide both match that of --
  //-- a created account saved in the users array
  const login = (username, password) => {
    //searching through the users array for a match
    const user = users.find(
      (user) => user.username === username && user.password === password,
    );
    //if a match is found it will be set as the current user
    if (user) {
      setCurrentUser(user);
      return true;
    } else {
      return false;
    }
  };

  //if a user clicks the logout button, the currentUser state --
  //-- will be set to null, indicating that there is no current --
  //-- user --> no one is logged in anymore
  const logout = () => setCurrentUser(null);

  //function that adds a new event to events object
  const addEvent = (newEvent) => {
    //if no one is logged in no new event will be added
    if (!currentUser) return;

    //every new event will receive an id and the respective --
    //-- user to make the event unique
    const uniqueEvent = {
      //taking the info from the form
      ...newEvent,
      //adding a unique timestamp id
      id: Date.now(),
      //adding the user that the event belongs to
      user: currentUser.username,
    };

    //adding the unique event to the events object
    setEvents((prev) => [...prev, uniqueEvent]);
  };

  //function that deletes an event by creating a new object that --
  //-- contains all the events except for the event that needs --
  //-- to be removed
  const deleteEvent = (eventID) => {
    setEvents((prev) => prev.filter((event) => event.id !== eventID));
  };

  //function that updates an existing event by searching through the --
  //-- events object for an event thats id matches the one being edited. --
  //-- Once found it will replace the previous event with the "new" one, --
  //-- if no match is found it will simply display all of the events as they were
  const updateEvent = (updateEvent) => {
    setEvents((prev) =>
      prev.map((event) => (event.id === updateEvent.id ? updateEvent : event)),
    );
  };

  return (
    /*wrapping all of the children under the provider and making
    the values available to them*/
    <UserContext.Provider
      value={{
        currentUser,
        registerUser,
        login,
        logout,
        events,
        setEvents,
        addEvent,
        deleteEvent,
        updateEvent,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

/*RESOURCES:*/

/*Name of webpage: React Context API Explained with Examples*/
/*Name of website: freeCodeCamp*/
/*Type of source: blog*/
/*URL: https://www.freecodecamp.org/news/react-context-api-explained-with-examples/#:~:text 
=How%20Does%20the%20Context%20API,for%20better%20readability%20and%20simplicity. */

/*Name: 06-034_React-Routing.pdf*/
/*From: HyperionDev*/
/*Reason: To see how I am supposed to do the routing*/

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

/*Name of webpage: How to Generate Unique ID in JavaScript*/
/*Name of website: Dev*/
/*Type of source: Blog*/
/*Author: Abdurrahman Fadhil*/
/*Last updated: 22/12/2019*/
/*Reason: I was searching for a simple way to create a unique id for each and every event*/
/*URL: https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13#:~:text
=Using%20UUID,called%20uuid%20to%20generate%20UUID.&text=UUID%20has%20several%20versions
%2C%20but,will%20generate%20something%20like%20this. */
