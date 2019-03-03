import React from 'react';
import MessageBanner from './MessageBanner.js';

export const MessageForm2 = ({message, onNewMessage}) => {

    let _message;

    const submit = (e) => {   
        e.preventDefault();
        onNewMessage(_message);
        _message.velue = "";       
    } 
    
    return (
        <div>
            <form onSubmit={submit} className="message-form">
                <label htmlFor="message">Stateless - Message:</label>
                <input id="message" 
                        type="text" 
                        required 
                        defaultValue={message}
                        ref={input => _message = input}/>
                <button> Do it </button>
            </form>
            <br/>
            <MessageBanner messageText={message} />
        </div>      
    )
}

MessageForm2.defaultProps = {
	message: "Write a message!"
}