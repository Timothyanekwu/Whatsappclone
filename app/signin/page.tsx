
import React from 'react'

const page = () => {


  return (
    <main className={`w-full h-screen p-4 flex justify-center`} >

      <div className="w-full max-w-[1000px] h-screen bg-messageOutgoing p-4 flex flex-col items-center">
     <div className="w-full  text-2xl p-4 rounded-xl font-bold text-green-500">WhatsApp</div>
    
     <div className="w-full flex flex-col gap-4 items-center">
      
      <div className="flex gap-4 bg-purple w-full bg-white p-4 rounded-xl border-green-600 border-2">
        <span>
        <p className='text-lg font-semibold'>Download WhatsApp for Windows</p>
        <p>Make calls, share your screen and get faster experience when you download the Windows app</p>
        </span>
        <button className="px-4 py-2 rounded-full bg-green-600 border-black border-[1px] text-black">Download</button>
      </div>

    <div className='w-full h-auto flex justify-between rounded-xl border-2 bg-white px-6 py-10 border-green-600'>

    
    </div>

     </div>
     </div>
    </main>
  )
}

export default page