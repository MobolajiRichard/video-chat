import { Call, MenuOutlined, InsertComment, Close } from '@mui/icons-material'
import React from 'react'

const Header = ({showActive, showChat, active, chat}) => {
  return (
    <div className='bg-slate-900 h-[10%] flex justify-around items-center text-white '>
        <div className='w-10 h-10 rounded-full bg-slate-200 md:flex justify-center items-center hidden'><p className='text-slate-900 text-3xl'>I</p></div>
        <div className='md:hidden block' onClick={showActive}>
          {!active && <MenuOutlined/>}
          {active && <Close/>}
        </div>
        <p className='text-3xl font-mono'>Interact</p>
        <button className='bg-red-500 rounded-md py-2 px-3 hidden md:flex items-center justify-center'>
            <Call/>
            <p className='ml-4'>Leave Room</p>
        </button>
        <div className='md:hidden block' onClick={showChat}>
          {!chat && <InsertComment/>}
          {chat && <Close/>}
        </div>
    </div>
  )
}

export default Header