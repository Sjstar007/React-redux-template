import React,{ useEffect, useState} from "react";
import classes from "./chatBox.module.scss";
import { socket } from '../../utils/socket.util';

function index() {

  const [isConnected, setIsConnected] = useState(socket.connected);
  const [clientMessages,setClientMessages] = useState([]);
  const [messageStr,setMessageStr] = useState('');

  console.log("isConnected::::",isConnected);

  const handleMessageType = (e) => {
    const { value } = e.target;
    setMessageStr(value)
  }

  const sendMessage = () => {
      socket.emit('user-message',messageStr)
  }

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function handleClientMessages(value) {
      setClientMessages(previous => [...previous, value]);
    }

    socket.connect()
    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('message', handleClientMessages);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('message', handleClientMessages);
    };
  }, []);

  return (
    <div className={classes.container}>
      <h1> 
        Chat Module

        <input type="text" placeholder="Please Enter Message" onChange={handleMessageType} value={messageStr}/>
        <button onClick={sendMessage}>Sned</button>

          <p>{clientMessages.map(ele =>{
            return (<p>{ele}</p>)
          })} </p>
      </h1>
    </div>
  );
}

export default index;
