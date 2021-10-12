import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditTeamModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
   

    handleSubmit(event){
        event.preventDefault();
        fetch('http://127.0.0.1:8000/teamProfile/',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                TeamId:event.target.TeamId.value,
                TeamName:event.target.TeamName.value,
                HSorColl:event.target.HSorColl.value,
                Names:event.target.Names.value,
                Schools:event.target.Schools.value,
                Grades:event.target.Grades.value,
                Struggle:event.target.Struggle.value,
                IdeaProject:event.target.IdeaProject.value,
                Location:event.target.Location.value,
                ContactInfo:event.target.ContactInfo.value,
                PhoneNumber:event.target.PhoneNumber.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }
    
        render(){
        return (
            <div className="container">

<Modal
{...this.props}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
>
    <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
            Edit Team
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="TeamId">
                        <Form.Label>TeamId</Form.Label>
                        <Form.Control type="text" name="TeamId" required
                        disabled
                        defaultValue={this.props.teamid} 
                        placeholder="TeamId"/>
                    </Form.Group>

                    <Form.Group controlId="TeamName">
                        <Form.Label>TeamName</Form.Label>
                        <Form.Control type="text" name="TeamName" required 
                        defaultValue={this.props.teamname}
                        placeholder="TeamName"/>
                    </Form.Group>
                    <Form.Group controlId="HSorColl">
                        <Form.Label>Highschool or College</Form.Label>
                        <Form.Control type="text" name="HSorColl" required 
                        defaultValue={this.props.teamhsorcoll}
                        placeholder="HighSchool or College"/>
                    </Form.Group>
                    <Form.Group controlId="Names">
                        <Form.Label>Names</Form.Label>
                        <Form.Control type="text" name="Names" required 
                        defaultValue={this.props.teamnames}
                        placeholder="Names"/>
                    </Form.Group>
                    <Form.Group controlId="Schools">
                        <Form.Label>Schools</Form.Label>
                        <Form.Control type="text" name="Schools" required 
                        defaultValue={this.props.teamschools}
                        placeholder="Schools"/>
                    </Form.Group>
                    <Form.Group controlId="Grades">
                        <Form.Label>Grade levels</Form.Label>
                        <Form.Control type="text" name="Grades" required 
                        defaultValue={this.props.teamgrades}
                        placeholder="Grade Levels"/>
                    </Form.Group>
                    <Form.Group controlId="Struggle">
                        <Form.Label>Struggles</Form.Label>
                        <Form.Control type="text" name="Struggle" required 
                        defaultValue={this.props.teamstruggle}
                        placeholder="List all struggles here"/>
                    </Form.Group>
                    <Form.Group controlId="IdeaProject">
                        <Form.Label>Project Idea</Form.Label>
                        <Form.Control type="text" name="IdeaProject" required 
                        defaultValue={this.props.teamideaproject}
                        placeholder="Enter Project Idea here"/>
                    </Form.Group>
                    <Form.Group controlId="Location">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" name="Location" required 
                        defaultValue={this.props.teamlocation}
                        placeholder="Location"/>
                    </Form.Group>
                    <Form.Group controlId="ContactInfo">
                        <Form.Label>Contact Information</Form.Label>
                        <Form.Control type="text" name="ContactInfo" required 
                        defaultValue={this.props.teamcontactinfo}
                        placeholder="ContactInfo"/>
                    </Form.Group>
                    <Form.Group controlId="PhoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" name="PhoneNumber" required 
                        defaultValue={this.props.teamphonenumber}
                        placeholder="Phone Number"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Update Team
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    </Modal.Body>
    
    <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
    </Modal.Footer>

</Modal>

            </div>
        )
    }

}