import "../css/Teamprofile.css";
import React, { Component } from "react";
import { Button, ButtonToolbar, Table } from "react-bootstrap";
import { AddTeamModal } from "./AddTeamModal";
import { EditTeamModal } from "./EditTeamModal";

export class TeamProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { deps: [], addModalShow: false, editModalShow: false };
  }

  refreshList() {
    fetch("http://127.0.0.1:8000/teamProfile/")
      .then((response) => response.json())

      .then((data) => {
        this.setState({deps: data});
      });
  }
  componentDidMount() {
    this.refreshList();
  }
  componentDidUpdate() {
    this.refreshList();
  }

  render() {
    const {deps, depid, depname, dephsorcoll, depnames, depschools, depgrades, depstruggle, depideaproject, deplocation, depcontactinfo, depphonenumber} = this.state;
    let addModalClose = () => this.setState({ addModalShow: false });
    let editModalClose = () => this.setState({ editModalShow: false });
    return (
      <div>
        <Table className="mt-4" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Team Name</th>
              <th>High School or College</th>
              <th>Names</th>
              <th>Schools</th>
              <th>Grade</th>
              <th>Struggle Type</th>
              <th>Project Idea</th>
              <th>Location</th>
              <th>Contact Info</th>
              <th>Emergency Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {deps.map((dep) => (
              <tr key={dep.TeamId}>
                
                <td>{dep.TeamName}</td>
                <td>{dep.HSorColl}</td>
                <td>{dep.Names}</td>
                <td>{dep.Schools}</td>
                <td>{dep.Grades}</td>
                <td>{dep.Struggle}</td>
                <td>{dep.IdeaProject}</td>
                <td>{dep.Location}</td>
                <td>{dep.ContactInfo}</td>
                <td>{dep.PhoneNumber}</td>
                <td>
                  <ButtonToolbar>
                    <Button variant="info"
                      onClick={()=>this.setState({ editModalShow: true, //has to be true or will not show at all
                        depid: dep.TeamId, depname: dep.TeamName, dephsorcoll: dep.HSorColl, depnames: dep.Names, depschools: dep.Schools, depgrades: dep.Grades, depstruggle: dep.Struggle, depideaproject: dep.IdeaProject, deplocation: dep.Location, depcontactinfo: dep.ContactInfo, depphonenumber: dep.PhoneNumber,})}>
                      Edit
                    </Button>
                    <EditTeamModal
                      show={this.state.editModalShow}
                      onHide={editModalClose}
                      depTeamName={dep.TeamName}
                      depHSorColl={dep.HSorColl}
                      depNames={dep.Names}
                      depSchools={dep.Schools}
                      depGrades={dep.Grades}
                      depStruggle={dep.Struggle}
                      depIdeaProject={dep.IdeaProject}
                      depLocation={dep.Location}
                      depContactInfo={dep.ContactInfo}
                      depPhoneNumber={dep.PhoneNumber}
                    />
                  </ButtonToolbar>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ButtonToolbar>
          <Button
            varient="primary"
            onClick={() => this.setState({ addModalShow: true })}
          >
            Add Team
          </Button>

          <AddTeamModal show={this.state.addModalShow} onHide={addModalClose} />
        </ButtonToolbar>
      </div>
    );
  }
}

export default TeamProfile;
