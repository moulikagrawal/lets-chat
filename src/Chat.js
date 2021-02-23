import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, SearchOutlined, SettingsInputAntenna } from '@material-ui/icons'
import MoreVert from '@material-ui/icons/MoreVert'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
import React, {useState} from 'react'
import './Chat.css'
import axios from "./axios.js"

function Chat({messages}) {
    const [input, setInput] = useState("");
    function sendMessage(e) {
        e.preventDefault()

        await axios.post('/messages/new', {
            message: input,
            name: "Demo",
            timestamp: "Just Now",
            received: false
        })

        setInput('')
    }

    return (
        <div className = 'chat'>
            <div className='chat_header'>
                <Avatar />

                <div className='chat_headerInfo'>
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
                </div>

                <div className='chat_headerRight'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className='chat_body'>
                <p className='chat_message chat_receiver'>
                    <span className='chat_name'>Moulik</span>   
                    
                    This is a message
                    
                    <span className='chat_timestamp'>
                        {new Date().toUTCString()}
                    </span>
                </p>
                {messages.map((message) => (
                    <p className={'chat_message ${message.received && "chat_receiver"}'}>
                    <span className='chat_name'>{message.name}</span>   
                    
                    {message.message}
                    
                    <span className='chat_timestamp'>
                        {message.timestamp}
                    </span>
                    </p>
                ))}
            </div>
            <div className='chat_footer'>
                <InsertEmoticonIcon />
                <form>
                    <input value = {input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='Type a message' type='text' />
                    <button onClick={sendMessage} type='submit'>
                        Send a message
                    </button>                        
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat;
