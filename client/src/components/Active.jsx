import React from 'react'

const Active = () => {
  const active = [
    'Daniel',
    'Richard',
    'Mobolaji',
    'Tobi',
    'Clinton'
  ]
  return (
    <div className='bg-slate-800 h-[100%] text-white p-[5%]'>
      <p>Active Members</p>
      {
        active.map((a, i) =>(
          <div key={i} className='flex w-full p-3 bg-slate-700 items-center rounded-lg mt-5'>
          <div className='w-2 h-2 rounded-full bg-green-500'></div>
          <p className='ml-4'>{a}</p>
        </div>
        ))
      }
     
    </div>
  )
}

export default Active