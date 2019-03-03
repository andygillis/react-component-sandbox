import React, { Component } from 'react';

export class MessageForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: props.message
        };
        this.submit = this.submit.bind(this);
    }
    submit = (e) => {   
        e.preventDefault();
        this.setState({message: this.refs.message.value});
    } 
    
    render() {
        const {message} = this.props;
        return (
            <div>
                <form onSubmit={this.submit} className="message-form">
                    <label htmlFor="message">Stateful - Message:</label>
                    <input id="message" 
                            type="text" 
                            required 
                            defaultValue={message}
                            ref="message"/>
                    <button> Do it </button>
                </form>
                <br/>
                <div className="message-banner">
                    Current Message: "{this.state.message}"
                </div>
                <br/>
                <br/>
            </div>
            
        )
    }
}

MessageForm.defaultProps = {
	message: "Write a message!"
}