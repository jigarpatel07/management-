import React from 'react'

function ManagementHeader() {
  return (
    <div className='flex justify-between pt-6 pb-8 items-center'>
      <p className='text-2xl'>
        Manage & Automate Support
      </p>
      <button className='bg-gradient-to-r from-[#367AFF] to-[#9300D9] rounded-md px-4 py-2 text-white'>
        + Create new bot
      </button>
    </div>
  )
}

export default ManagementHeader