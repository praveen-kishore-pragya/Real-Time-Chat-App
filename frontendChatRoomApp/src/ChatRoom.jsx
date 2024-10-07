import Header from "./Components/Header"
import Input from "./Components/Input"
import Button from "./Components/Button"

function ChatRoom({name, messages, setUserMessage, handleSendMessage, handleLogout}){

    return (
        <>
            <div className="hero bg-neutral-800  min-h-screen min-w-full">
                
                <div className="logout-bar flex flex-row-reverse p-4">
                    <Button label={"Logout"} onClick={handleLogout}/>
                </div>
                
                <div className="user-header flex flex-col justify-evenly items-center text-center">
                    <Header content={`Welcome! ${name}`}/>
                

                    <div className="message-input flex flex-row ">
                        <Input height={12} width={200} placeholder="Enter your message!!" onClick={setUserMessage}/>
                        <Button label="Send" onClick={handleSendMessage}/>
                    </div>

                    <div className="conversation text-white mt-4 h-20 w-full b0order-2 border-blue-800">
                        {console.log("messages : " + (messages))}
                        
                        {Array.isArray(messages) ? (
                            messages.map((message, index) => (
                            <span key={index} className="flex flex-row">
                                <h1 className="userName font-bold text-yellow-600 mr-2">{message.name}: </h1>
                                <p className="userMessage">{message.content}</p>
                            </span>
                            ))
                        ) : (
                            <p>No messages yet</p>
                        )}


                                
                        
                    </div>
                </div>

            </div>
        </>
    )

}

export default ChatRoom