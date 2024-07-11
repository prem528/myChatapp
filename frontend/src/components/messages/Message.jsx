import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img 
                alt='Tailwind CSS chat bubble component'
                src=''/>

            </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}>Hey how are uhh</div>
      
    </div>
  )
}

export default Message
