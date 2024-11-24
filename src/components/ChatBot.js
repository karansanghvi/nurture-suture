import React, { useState, useEffect, useRef } from 'react';
import "../assets/styles/chatbotStyles.css";
import botAvatar from '../assets/images/Group 2.png';
import userAvatar from '../assets/images/Group 3.png';
import clinicData from '../data/clinicData.json'; 
import alternativeQueries from '../data/alternativeQueries.json'; // Import the JSON file

const Chatbot = ({ setIsChatOpen }) => {
    const [messages, setMessages] = useState([
        {
            sender: 'bot',
            text: 'Hi! I am Nurture and Suture. What is your name?',
        },
    ]);
    const [userInput, setUserInput] = useState('');
    const [step, setStep] = useState(1);
    const [isTyping, setIsTyping] = useState(false);

    const chatWindowRef = useRef(null); 

    useEffect(() => {
        if (chatWindowRef.current) {
            chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
        }
    }, [messages]); 

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleUserSubmit = () => {
        if (!userInput.trim()) return;

        setMessages((prevMessages) => [
            ...prevMessages,
            { sender: 'user', text: userInput },
        ]);
        setUserInput('');
        setIsTyping(true);

        setTimeout(() => {
            if (step === 1) {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { sender: 'bot', text: `Hello ${userInput}! How can I help you today?` },
                ]);
                setStep(2);
            } else if (step === 2) {
                handleClinicQuery(userInput.toLowerCase());
            }
            setIsTyping(false);
        }, 1000); 
    };

    const handleClinicQuery = (query) => {
        let response;

        // Check for each category's alternatives from the imported JSON
        for (const [key, queries] of Object.entries(alternativeQueries)) {
            if (queries.some((altQuery) => query.includes(altQuery))) {
                response = clinicData[key];
                break;
            }
        }

        // If no match, give a default response
        if (!response) {
            response = "Sorry, I didn't understand that. Can you ask about location, working hours, or services?";
        }

        setMessages((prevMessages) => [
            ...prevMessages,
            { sender: 'bot', text: response },
            { sender: 'bot', text: 'What else would you like to know?' },
        ]);
    };

    return (
        <div className="chatContainer">
            <button className="close-chat-btn" onClick={() => setIsChatOpen(false)}>
                ✖
            </button>
            <div className="chatWindow" ref={chatWindowRef}>
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={message.sender === 'bot' ? 'botMessage' : 'userMessage'}
                    >
                        <img
                            src={message.sender === 'bot' ? botAvatar : userAvatar}
                            alt={`${message.sender} avatar`}
                            className="avatar"
                        />
                        <span className="messageText">{message.text}</span>
                    </div>
                ))}
                {isTyping && (
                    <div className="botMessage typingIndicator">
                        <img
                            src={botAvatar}
                            alt="bot avatar"
                            className="avatar"
                        />
                        <span className="typingText">...</span>
                    </div>
                )}
            </div>
            <div style={{ display: 'flex' }}>
                <input
                    type="text"
                    value={userInput}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                    className="input"
                />
                <button onClick={handleUserSubmit} className="button">
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chatbot;
