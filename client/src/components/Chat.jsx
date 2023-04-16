import { Send } from '@mui/icons-material'
import React from 'react'

const Chat = () => {
  return (
    <div className='h-[100%] bg-slate-800 flex flex-col text-slate-300 justify-between'>
      <p className='text-center text-sm mt-1'>Your message will appear here.</p>

      <div className='bg-slate-700 flex p-4'>
        <div className='bg-slate-600 w-full h-14 flex items-center justify-center rounded-lg p-2'>
        <input className='border-0 outline-0 flex-1 bg-slate-600 text-slate-300 mr-2' placeholder='Send Message'/>
        <Send sx={{color:'rgb(110, 126, 129)'}}/>
        </div>
       
      </div>
    </div>
  )
}

export default Chat