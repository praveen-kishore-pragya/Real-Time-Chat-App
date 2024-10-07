import Button from "./Components/Button"
import Header from "./Components/Header"
import Input from "./Components/Input"

function Login({props}){
    const [setUserName, setUserConnected] = props
    return(
        <>
            <div className="hero bg-neutral-800 flex flex-col justify-center items-center align-middle p-8 min-h-screen min-w-full">

                <Header content = "Connect to your friends!!"/>
                
                <div className="register flex flex-row">
                    <Input height = "5" width = "52" placeholder="Enter your Name!!" onClick={setUserName}/>
                    <Button label = "Enter" onClick={setUserConnected}/>
                </div>
            </div>
        </>
    )
}

export default Login