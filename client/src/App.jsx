import { useState } from "react"
import Header from "./components/Header"
import Main from "./components/Main"

function App() {
  const [toggleActive, setToggleActive] = useState(true)
  const [toggleChat, setToggleChat] = useState(true)
  const [roomID, setRoomID] = useState('mobolaji')

  const showActive = () => {
    setToggleActive(prev => !prev)
  }

  const showChat = () => {
    setToggleChat(prev => !prev)
  }
  return (
    <div className="h-screen flex flex-col">
      <Header showActive={showActive} showChat={showChat} active={toggleActive} chat={toggleChat}/>
      <Main active={toggleActive} chat={toggleChat} id={roomID}/>
    </div>
  )
}

export default App
