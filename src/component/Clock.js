import React, { Component } from 'react';
import Calendar from 'react-icons/lib/fa/calendar'

export class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timer = setInterval(
            () => {this.tick()}, 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render(){
        return (
            <div>
                 <h2> <Calendar/>{this.state.date.toLocaleTimeString()} and I'm STATEFUL</h2>
            </div>
        );
    }
}