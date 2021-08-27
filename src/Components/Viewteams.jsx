import "../css/Viewteams.css";

import React,{Component} from 'react';

export default class teamSubmission extends Component{

    constructor(props){
        super(props);
        this.state={deps:[]}
    }

    refreshList(){
        fetch( 'http://127.0.0.1:8000/teamSubmission')
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
        return(
            <div>
                <h2>Team Submissions</h2>
                {deps.map(dep=>
                    <div>
                    <h4>Team Submission {dep.TeamId} </h4>
                    <p>Video link: {dep.VideoLink}</p>
                    <p>GitHub link: {dep.GithubLink}</p>
                    <p>Project idea: {dep.ProjectIdea}</p>
                    <p>Coding languages: {dep.CodingLanguages}</p>
                    </div>
                )}
            </div>
        )
    }
}