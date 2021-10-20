import React, {Component} from 'react';


class Books extends Component {
    
    state = {
        books: []
    }
    
    
    loadBooks = () => {
        fetch('http://127.0.0.1:8000/api/books/', {
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
               this.setState({books: data})
            }
        ).catch( error => console.error(error))
    }
    render(){
        return (
            <div className="App1">
           
           {this.state.books.map( book => {
               return <meta http-equiv="refresh" content="0;URL='/test'" />
           })}
            <button onClick={this.loadBooks}>Click Here After Logging In to Go to the HomePage!</button>
          
            </div>
        );
        }

    }
  

export default Books;
