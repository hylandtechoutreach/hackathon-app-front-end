import React from "react";
import "../css/Nav.css";
import Faq from "./Faq";
import Otherteams from "./Otherteams";
import Pastevents from "./Pastevents";
import Rubric from "./Rubric";
import TeamSubmission from "./TeamSubmission.js";
import Submissions from "./Submissions";
import Teamprofile from "./Teamprofile.js";
import Viewteams from "./Viewteams";
import Homepage from "./Homepage";
import { useState } from "react";
import Login from "./login"
import App1 from "./Login App";
import TEST from "./test";
import SignOut from "./Sign Out";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Nav = () => {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);


  return (
    <Router>
      <div className="Navbar">
        <div className="top_Sidebar">

          <div className="nav_buttons">
            <Link to="/Homepage">
              <button className="button">Home</button>
            </Link>
            <Link to="/Teamprofile">
              <button className="button">Team Profile</button>
            </Link>
            <Link to="/Otherteams">
              <button className="button">Other Teams</button>
            </Link>
            <Link to="/Faq">
              <button className="button">FAQ's</button>
            </Link>
            <Link to="/Rubric">
              <button className="button">Rubric</button>
            </Link>
            <Link to="/TeamSubmission">
              <button className="button">Submission Form</button>
            </Link>
            <Link to="/Viewteams">
              <button className="button">View Teams</button>
            </Link>
            <Link to="/Submissions">
              <button className="button">Submissions</button>
            </Link>
            <Link to="/Pastevents">
              <button className="button">Past Events</button>
            </Link>
            <Link to="/SignOut">
              <button className="button">Sign Out</button>
            </Link>
           
           
           
          </div>
        </div>
          <div className="middle_Content">
            <Switch>
              <Route path="/" exact component={Homepage}></Route>
              <Route path="/Homepage" exact component={Homepage}></Route>
              <Route path="/Teamprofile" exact component={Teamprofile}></Route>
              <Route path="/Otherteams" exact component={Otherteams}></Route>
              <Route path="/Faq" exact component={Faq}></Route>
              <Route path="/Rubric" exact component={Rubric}></Route>
              <Route path="/TeamSubmission" exact component={TeamSubmission}></Route>
              <Route path="/Viewteams" exact component={Viewteams}></Route>
              <Route path="/Submissions" exact component={Submissions}></Route>
              <Route path="/Pastevents" exact component={Pastevents}></Route>
              <Route path="/login" exact component={Login}></Route>
              <Route path="/Login App" exact component={App1}></Route>
              <Route path="/test" exact component={TEST}></Route>
              <Route path="/SignOut" exact component={SignOut}></Route>
        
        
            </Switch>
          </div>
        </div>
    </Router>
  );
};

export default Nav;