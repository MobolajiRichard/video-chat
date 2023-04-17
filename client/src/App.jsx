import { useState } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Welcome from "./components/Welcome"

function App() {
  const [toggleActive, setToggleActive] = useState(true)
  const [toggleChat, setToggleChat] = useState(true)
  const [userDetails, setUserDetails] = useState(null)

  const showActive = () => {
    setToggleActive(prev => !prev)
  }

  const showChat = () => {
    setToggleChat(prev => !prev)
  }

  const setUser = (user) => {
    setUserDetails(user)
  }
  console.log({userDetails})

  if(window.location.pathname === '/'){
    return(
      <Welcome setUser={setUser}/>
    )
  }

  return (
    <div className="h-screen flex flex-col">
      <Header showActive={showActive} showChat={showChat} active={toggleActive} chat={toggleChat}/>
      <Main active={toggleActive} chat={toggleChat} id={userDetails?.room}/>
    </div>
  )
}

export default App
