import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
    state = {
        wallPaperLink: null
    }

    componentDidMount(){
        axios.get('https://api.unsplash.com/photos/random/?client_id=N6gSTT5QTo0hwGeeZfW1HH59hwp5pBqRx2pH7EXsrLE&&collections=827743')
            .then(res => {
                console.log(res.data)
                this.setState({
                    wallPaperLink: res.data.urls.full
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render(){
        return (
            <div className="container" style={{backgroundImage:`url(${this.state.wallPaperLink})`}}>
                <div className="row">
                    
                </div>
            </div>
        );
    }
}

export default App;
