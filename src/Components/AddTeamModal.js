import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class AddTeamModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('http://127.0.0.1:8000/teamProfile/',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                TeamId:null,
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
    <Modal.Header clooseButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Add Team
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
               
                    <Form.Group controlId="TeamName">
                        <Form.Label>Team Name</Form.Label>
                        <Form.Control type="text" name="TeamName" required 
                        placeholder="TeamName"/>
                    </Form.Group>
                    <Form.Group controlId="HSorColl">
                        <Form.Label>HS or College</Form.Label>
                        <Form.Control type="int" name="HSorColl" required 
                        placeholder="HSorColl"/>
                    </Form.Group>
                    <Form.Group controlId="Names">
                        <Form.Label>Names</Form.Label>
                        <Form.Control type="text" name="Names" required 
                        placeholder="Names"/>
                    </Form.Group>
                    <Form.Group controlId="Schools">
                        <Form.Label>School</Form.Label>
                        <Form.Control type="text" name="Schools" required 
                        placeholder="Schools"/>
                    </Form.Group>
                    <Form.Group controlId="Grades">
                        <Form.Label>Grades</Form.Label>
                        <Form.Control type="text" name="Grades" required 
                        placeholder="Grades"/>
                    </Form.Group>
                    <Form.Group controlId="Struggle">
                        <Form.Label>Struggle</Form.Label>
                        <Form.Control type="int" name="Strugle" required 
                        placeholder="Strugle"/>
                    </Form.Group>
                    <Form.Group controlId="IdeaProject">
                        <Form.Label>IdeaProject</Form.Label>
                        <Form.Control type="text" name="IdeaProject" required 
                        placeholder="IdeaProject"/>
                    </Form.Group>
                    <Form.Group controlId="Location">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" name="Location" required 
                    placeholder="Location"/>
                </Form.Group>
                    <Form.Group controlId="ContactInfo">
                        <Form.Label>ContactInfo</Form.Label>
                        <Form.Control type="text" name="ContactInfo" required 
                        placeholder="ContactInfo"/>
                    </Form.Group>
                    <Form.Group controlId="PhoneNumber">
                        <Form.Label>PhoneNumber</Form.Label>
                        <Form.Control type="text" name="PhoneNumber" required 
                        placeholder="PhoneNumber"/>
                    </Form.Group>
                  

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Add Team
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
