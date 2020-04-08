import React from 'react';
import './App.css';
import axios from 'axios';
import moment from 'moment';

class App extends React.Component {
    state = {
        wallPaperLink: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&w=1000&q=80',
        quoteText: '',
        quoteAuthor: '',
        time: null
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
        axios.get('https://type.fit/api/quotes')
            .then(res => {
                console.log(res)
                const num = Math.floor(Math.random()*res.data.length);
                this.setState({
                    quoteText: res.data[num].text,
                    quoteAuthor: res.data[num].author
                })
            })
            .catch(err => {
                console.log(err)
            })
    
    }

    render(){
        
        return (
            <div className="box" style={{backgroundImage:`url(${this.state.wallPaperLink})`}}>
                <div className="container">
                   
                    <div className="row content">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-8">
                            <h1 className="title">Good morning</h1>
                            <h3 className="date">{moment().format('ll')}</h3>
                            <h3 className="time">{moment().format('LT')}</h3>
                        </div>
                        <div className="col-sm-2"></div>
                    </div>
                    <div className="row qbox">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-8">
                            <h1 className="qtitle">Quote of the day</h1>
                            <p className="quote">{this.state.quoteText} - {this.state.quoteAuthor}</p>
                        </div>
                        <div className="col-sm-2"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
