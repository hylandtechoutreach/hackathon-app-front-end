import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class AddSubModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('http://127.0.0.1:8000/teamSubmission/',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                TeamId:null,
               VideoLink:event.target.VideoLink.value,
               GithubLink:event.target.GithubLink.value,
               ProjectIdea:event.target.ProjectIdea.value,
               CodingLanguages:event.target.CodingLanguages.value

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
            Add Submission
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
               
                    <Form.Group controlId="VideoLink">
                        <Form.Label>VideoLink</Form.Label>
                        <Form.Control type="text" name="VideoLink" required 
                        placeholder="VideoLink"/>
                    </Form.Group>
                    <Form.Group controlId="GithubLink">
                        <Form.Label>GithubLink</Form.Label>
                        <Form.Control type="text" name="GithubLink" required 
                        placeholder="GithubLink"/>
                    </Form.Group>
                    <Form.Group controlId="ProjectIdea">
                        <Form.Label>ProjectIdea</Form.Label>
                        <Form.Control type="text" name="ProjectIdea" required 
                        placeholder="ProjectIdea"/>
                    </Form.Group>
                    <Form.Group controlId="CodingLanguages">
                        <Form.Label>CodingLanguages</Form.Label>
                        <Form.Control type="text" name="CodingLanguages" required 
                        placeholder="CodingLanguages"/>
                    </Form.Group>
                  

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Add Submission
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
