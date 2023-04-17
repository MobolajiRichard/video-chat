import {useState} from 'react'
import Active from './Active'
import Room from './Room'
import Chat from './Chat'

const Main = ({active, chat, id}) => {
   
  return (
    <div className='flex flex-1 justify-between bg-slate-950 md:static relative'>
      { active && <div className='w-full h-full md:basis-1/5 absolute md:static md:block'>
            <Active/>
        </div>}
        <div className='flex-1'>
            <Room id={id}/>
        </div>
        {chat && <div className='w-full h-full md:basis-1/5 absolute md:static md:block'>
            <Chat/>
        </div>}
    </div>
  )
}

export default Main