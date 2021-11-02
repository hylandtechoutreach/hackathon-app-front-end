import "../css/Teamprofile.css";
import React, { Component } from "react";
import { Button, ButtonToolbar, Table } from "react-bootstrap";
import { AddTeamModal } from "./AddTeamModal";
import { EditTeamModal } from "./EditTeamModal";

export class TeamProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      TeamName: "",
      HSorColl: "",
      Names: "",
      Schools: "",
      Grades: "",
      Struggle: "",
      IdeaProject: "",
      Location: "",
      ContactInfo: "",
      PhoneNumber: "",
    };
  }

  refreshList() {
    fetch("http://127.0.0.1:8000/teamProfile/")
      .then((response) => response.json())

      .then((data) => {
        this.setState({ teams: data });
      });
  }
  componentDidMount() {
    this.refreshList();
  }
  componentDidUpdate() {
    this.refreshList();
  }
  editClick(team) {
    this.setState({
      modalTitle: "Edit Teams",
      teamTeamName: team.TeamName,
      teamHSorColl: team.HSorColl,
      teamNames: team.Names,
      teamSchools: team.Schools,
      teamGrades: team.Grades,
      teamStruggle: team.Struggle,
      teamIdeaProject: team.IdeaProject,
      teamLocation: team.Location,
      teamContactInfo: team.ContactInfo,
      teamPhoneNumber: team.PhoneNumber,
    });
  }
  updateClick() {
    fetch("http://127.0.0.1:8000/teamProfile/", {
      method: "PUT",
      body: JSON.stringify({
        teamTeamName: this.state.TeamName,
        teamHSorColl: this.state.HSorColl,
        teamNames: this.state.Names,
        teamSchools: this.state.Schools,
        teamGrades: this.state.Grades,
        teamStruggle: this.state.Struggle,
        teamIdeaProject: this.state.IdeaProject,
        teamLocation: this.state.Location,
        teamContactInfo: this.state.ContactInfo,
        teamPhoneNumber: this.state.PhoneNumber,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert(result);
          this.refreshList();
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  render() {
    const {
      teams,
      teamid,
      teamname,
      teamhsorcoll,
      teamnames,
      teamschools,
      teamgrades,
      teamstruggle,
      teamideaproject,
      teamlocation,
      teamcontactinfo,
      teamphonenumber
    } = this.state;
    let addModalClose = () => this.setState({ addModalShow: false });
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
                    <button variant="info" onClick={() => this.editClick(team)}>
                      {" "}
                      Edit
                    </button>
                  </ButtonToolbar>
                  <div className="modal-body">
                    {
                      // {TeamId!=0?
                      // <button type="button"
                      // className="btn btn-primary float-start"
                      // onClick={()=>this.updateClick()}
                      // >Update</button>
                      // :null}
                    }
                  </div>
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