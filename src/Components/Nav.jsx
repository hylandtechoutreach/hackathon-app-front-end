import React from "react";
import "../css/Nav.css";
import Faq from "./Faq";
import Otherteams from "./Otherteams";
import Pastevents from "./Pastevents";
import Rubric from "./Rubric";
import Submissionform from "./Submissionform";
import Submissions from "./Submissions";
import Teamprofile from "./Teamprofile";
import Viewteams from "./Viewteams";
import Homepage from "./Homepage";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Nav = () => {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);


  return (
    <Router>
      <div className="Navbar">
        <div className="top_Sidebar">

          <div className="navigation__buttons">
            <Link to="/Homepage">
              <button className="learn-more">Home</button>
            </Link>
            <Link to="/Teamprofile">
              <button className="learn-more">Team Profile</button>
            </Link>
            <Link to="/Otherteams">
              <button className="learn-more">Other Teams</button>
            </Link>
            <Link to="/Faq">
              <button className="learn-more">FAQ's</button>
            </Link>
            <Link to="/Rubric">
              <button className="learn-more">Rubric</button>
            </Link>
            <Link to="/Submissionform">
              <button className="learn-more">Submission Form</button>
            </Link>
            <Link to="/Viewteams">
              <button className="learn-more">View Teams</button>
            </Link>
            <Link to="/Submissions">
              <button className="learn-more">Submissions</button>
            </Link>
            <Link to="/Pastevents">
              <button className="learn-more">Past Events</button>
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
              <Route path="/Submissionform" exact component={Submissionform}></Route>
              <Route path="/Viewteams" exact component={Viewteams}></Route>
              <Route path="/Submissions" exact component={Submissions}></Route>
              <Route path="/Pastevents" exact component={Pastevents}></Route>
        
            </Switch>
          </div>
        </div>
    </Router>
  );
};

export default Nav;