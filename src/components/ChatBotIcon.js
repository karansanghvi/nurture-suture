import React, { useState } from 'react';
import Chatbot from './ChatBot'; 
import '../assets/styles/chatbotStyles.css';
import { IoChatbubbleEllipses } from "react-icons/io5";

const ChatBotIcon = () => {
    const [isChatOpen, setIsChatOpen] = useState(false); 

    const toggleChat = () => {
        setIsChatOpen((prev) => !prev); 
    };

    return (
        <div>
            <button
                className="chatbot-icon"
                onClick={toggleChat} 
            >
                <IoChatbubbleEllipses />
            </button>
            {isChatOpen && (
                <div className="chatbot-popup">
                    <Chatbot setIsChatOpen={setIsChatOpen} />
                </div>
            )}
        </div>
    );
};

export default ChatBotIcon;
