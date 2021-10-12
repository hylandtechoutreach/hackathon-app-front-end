import "../css/Teamprofile.css";
import React, { Component } from "react";
import { Button, ButtonToolbar, Table } from "react-bootstrap";
import { AddTeamModal } from "./AddTeamModal";
import { EditTeamModal } from "./EditTeamModal";

export class TeamProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { teams: [], addModalShow: false, editModalShow: false };
  }

  refreshList() {
    fetch("http://127.0.0.1:8000/teamProfile/")
      .then((response) => response.json())

      .then((data) => {
        this.setState({teams: data});
      });
  }
  componentDidMount() {
    this.refreshList();
  }
  componentDidUpdate() {
    this.refreshList();
  }

  render() {
    const {teams, teamid, teamname, teamhsorcoll, teamnames, teamschools, teamgrades, teamstruggle, teamideaproject, teamlocation, teamcontactinfo, teamphonenumber} = this.state;
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
            {teams.map((team) => (
              <tr key={team.TeamId}>
                
                <td>{team.TeamName}</td>
                <td>{team.HSorColl}</td>
                <td>{team.Names}</td>
                <td>{team.Schools}</td>
                <td>{team.Grades}</td>
                <td>{team.Struggle}</td>
                <td>{team.IdeaProject}</td>
                <td>{team.Location}</td>
                <td>{team.ContactInfo}</td>
                <td>{team.PhoneNumber}</td>
                <td>
                  <ButtonToolbar>
                    <Button variant="info"
                      onClick={()=>this.setState({ editModalShow: true, //has to be true or will not show at all
                        teamid: team.TeamId, teamname: team.TeamName, teamhsorcoll: team.HSorColl, teamnames: team.Names, teamschools: team.Schools, teamgrades: team.Grades, teamstruggle: team.Struggle, teamideaproject: team.IdeaProject, teamlocation: team.Location, teamcontactinfo: team.ContactInfo, teamphonenumber: team.PhoneNumber,})}>
                      Edit
                    </Button>
                    <EditTeamModal
                      show={this.state.editModalShow}
                      onHide={editModalClose}
                      teamTeamName={team.TeamName}
                      teamHSorColl={team.HSorColl}
                      teamNames={team.Names}
                      teamSchools={team.Schools}
                      teamGrades={team.Grades}
                      teamStruggle={team.Struggle}
                      teamIdeaProject={team.IdeaProject}
                      teamLocation={team.Location}
                      teamContactInfo={team.ContactInfo}
                      teamPhoneNumber={team.PhoneNumber}
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
