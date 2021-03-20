import React, {useEffect, useState} from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';
import axios from './axios.js';

function App() {
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    axios.get('/messages/sync').then((response) => {
        setMessages(response.data);
      });
  }, []);

  useEffect(() => {
    const pusher = new Pusher('1bd343ce6abd5ecbe8ea', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage])
    });

    return() => {
      channel.unbind_all();
      channel.unsubscribe();
    }

  }, [messages]);

  return (
    <div className="app">
      <div className='app_body'>
        {/*Sidebar*/}
        <Sidebar />
        {/*Chat*/}
        <Chat messages={messages}/>
      </div>
     </div>
  );
}

export default App;
