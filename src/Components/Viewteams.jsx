// import "../css/Viewteams.css";

// function Viewteams() {
//     return (
//         <h2> What are the teams working on? </h2>
//     )
// }

// export default Viewteams;

import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import{Button, ButtonToolbar} from 'react-bootstrap';
import{AddSubModal} from './AddSubModal';
export class Viewteams extends Component{

    constructor(props){
        super(props);
        this.state={deps:[], addModalShow:false}
    }

    refreshList(){
        fetch( 'http://127.0.0.1:8000/Viewteams')
        .then(response=>response.json())
       
        .then(data=>{
            this.setState({deps:data});
        });
    }
    componentDidMount(){
        this.refreshList();
    }
    componentDidUpdate(){
        this.refreshList();
    }
    render(){
        const {deps}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        return(
            <div>
            <Table className="mt-4" striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>TeamId</th>
                    <th>VideoLink</th>
                    <th>GithubLink</th>
                    <th>ProjectIdea</th>
                    <th>CodingLanguages</th>
                    </tr></thead>
                    <tbody>
                        {deps.map(dep=>
                            <tr key={dep.TeamId}>
                                <td>{dep.TeamId}</td>
                                <td>{dep.VideoLink}</td>
                                <td>{dep.GithubLink}</td>
                                <td>{dep.ProjectIdea}</td>
                                <td>{dep.CodingLanguages}</td>

                            </tr>
                            
                            )}
                    </tbody>
                
            </Table>
            
            </div>
        )
    }
}

export default Viewteams;