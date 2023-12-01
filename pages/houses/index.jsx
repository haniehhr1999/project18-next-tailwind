import React from 'react'
import db from '@/data/db.json'
import Home from '@/components/modules/Home'

const index = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-center text-[#606C38]'>لیست تمامی املاک</h1>
      <div className="md:px-32 pb-8 grid grid-cols-3 gap-6">
        {
          db.homes.map(home =>{
            return <Home key={home.id} {...home} />
          })
        }
      </div>
    </div>
  )
}

export default index