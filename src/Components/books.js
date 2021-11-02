import React, {Component} from 'react';


class Login2 extends Component {
    
    state = {
        Login2: []
    }
    
    
    loadLogin2 = () => {
        fetch('http://127.0.0.1:8000/api/login2/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${this.props.token}`
        },
            body: JSON.stringify(this.state.credentials)
        })
        .then(data => data.json())
        .then(
            data => {
               this.setState({login2: data})
            }
        ).catch( error => console.error(error))
    }
    render(){
        return (
            <div className="App1">
           
           {this.state.login2.map( book => {
               return <meta http-equiv="refresh" content="0;URL='/test'" />
           })}
            <button onClick={this.loadLogin2}>Click Here After Logging In to Go to the HomePage!</button>
          
            </div>
        );
        }

    }
  

export default Login2;
