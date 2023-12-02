import Link from 'next/link'
import React from 'react'

const Home = ({img , id , meterage , roomCount , price , title}) => {
  return (
    <>
        <div className="rounded-md overflow-hidden bg-[#FEFAE0]">
            <img className="w-full" src={img} alt="Sunset in the mountains"/>
            <div className="px-6 py-4 relative">
            <div className="font-bold text-xl mb-2 -mt-9 w-100 text-center py-2 px-4 rounded-md bg-[#DDA15E] text-white">{title}</div>
            <div className="py-5 grid grid-cols-2 gap-4">
                <p>مالدیو</p>
                <p>{roomCount} اتاق</p>
                <p>{meterage} متر مربع</p>
                <p>{price.toLocaleString()}  تومان</p>
            </div>
            <Link href={`houses/${id}`}>
            <button className="hover:bg-[#283618] duration-500 rounded-md w-full text-white bg-[#606C38] py-2 px-4">مشاهده ملک</button>
            </Link>
            </div>
        </div>
    </>
  )
}

export default Home