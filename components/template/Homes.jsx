import React from 'react'
import db from '@/data/db.json'
import Home from '../modules/Home'

const Homes = () => {
  return (
    <>
    <h2 className="text-center font-bold text-3xl py-10 text-[#606C38]">آخرین املاک</h2>

    <div className="md:px-32 px-8 pb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {
            db.homes.slice(0, 6).map(home => <Home key={home.id} {...home} />)
        }
    </div>
    </>
  )
}

export default Homes