//class to hold stateless component's state
import React, { Component } from 'react';
import { Menu } from './Menu';
import Component1 from './Component1';//default export syntax
import { Component2 } from './Component2';//named export syntax
import { Component3 } from './Component3';
import { Component4 } from './Component4';
import { Clock } from './Clock';
import { Clock2 } from './Clock2';
import { MessageForm } from './MessageForm';
import { MessageForm2 } from './MessageForm2';
import '../styles/styles.scss';
import '../styles/less-styles.less';
 
export class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            clockDate: new Date(),
            message: "Write a message!"
        };
        this.updateMessage = this.updateMessage.bind(this);
    }

    componentDidMount() {
        this.timer = setInterval(() => {this.tickClock()}, 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tickClock() {
        this.setState({clockDate: new Date()});
    }

    updateMessage(newMessage) {
        this.setState({
            message: newMessage.value
        });
    }

    render() {
        return (
            <div className="app">
                <Menu />
                {(this.props.location.pathname === "/") ? ([
                    <Component1 key="1" renderText="HI from Component1, I'm a createClass()" />,
                    <Component2 key="2" renderText="HI from Component2, I'm an ES6 class" />,
                    <Component3 key="3" renderText="HI from Component3, I'm stateless" />,
                    <Component4 key="6" renderText="HI from Component4, I'm running clientside and don't need transpiling" />,
                    <Clock key="4"/>,
                    <Clock2 key="5" />
                ]) : ([
                    <MessageForm key="1" />,   
                    <MessageForm2 key="2" onNewMessage={this.updateMessage} message={this.state.message}/>
                ])}
            	    

            </div>
        );
    }
};
