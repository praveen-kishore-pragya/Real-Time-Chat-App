import './Utilities/Init' //to resolve global variable issue
import { useEffect, useRef, useState } from 'react'
import './App.css'
import ChatRoom from './ChatRoom'
import Login from './Login'
import SockJS from 'sockjs-client';
// import SockJS from "sockjs-client/dist/sockjs"
import Stomp from 'stompjs'

function App() {
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [connected, setConnected] = useState(false)
  const [message, setMessage] = useState();
  const [messages, setMessages] = useState([]);
  
  console.log(typeof(messages))
  
  let stompClientRef = useRef(null) // Use useRef to persist the stompClient instance
  let stompClient = null
  let socket = null

  useEffect(() => {    
    
    socket = new SockJS('http://localhost:8080/server');
    
    stompClient = Stomp.over(socket)

    if(connected){
      
      
      stompClient.connect({}, (frame)=>{
          console.log("Connected: " + frame);
          stompClient.subscribe('/topic/reply', (response)=>{
            const receivedMessage = JSON.parse(response.body);
            //prevents from printing the send and own message received fromn the subscription
            if(receivedMessage.name != localStorage.getItem("name"))
                setUserMessages(receivedMessage);
    
        })
      })

      //Storing the stompClient in the ref
      stompClientRef.current = stompClient

    }

    return ()=>{
      
      if(stompClientRef.current != null){
        stompClientRef.current.disconnect()
        stompClientRef.current = null
      }
      socket.close()  
    }

  },[connected])



  const setUserName = (e) => {
      let userName = e
      if(userName != null)
      {
        localStorage.setItem("name", e) 
        setName(userName)
      }
  }

  function setUserConnected(){
      setConnected(true)
  }

  function setUserMessage(msg){
      setMessage(msg)
  }

  function setUserMessages(newMessage){
      setMessages(prevMessages => {
        if(Array.isArray(prevMessages)){
          return [newMessage, ...prevMessages]
        }
        else{
          return [newMessage]
        }
      })
  }

  function handleSendMessage(event){
    event.preventDefault();
    if(stompClientRef.current){
      const msgObj = {
        name : localStorage.getItem("name"),
        content : message
      }
      console.log("msgObj" + typeof(msgObj))
      stompClientRef.current.send('/app/message',{}, JSON.stringify(msgObj))
      setUserMessages(msgObj)
      setMessage("")
      console.log(message)
    }
  }
  
  function handleLogout(){
    localStorage.removeItem("name");
    setConnected(false);
    
    (stompClientRef.current != null) ?
      stompClientRef.current.disconnect() :
      stompClientRef.current = null
  }

  return (
    <>
      <div>
        { (connected) ? 
        <ChatRoom
          name={name}
          messages={messages}
          setUserMessage={setUserMessage}
          handleSendMessage={handleSendMessage}
          handleLogout={handleLogout}
          />
         : <Login props={[setUserName, setUserConnected]}/> }
      </div>
    </>
  )
}

export default App
