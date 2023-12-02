import React, { useEffect, useState } from 'react'
import db from '@/data/db.json'
import Home from '@/components/modules/Home'
import Link from 'next/link'

const index = () => {
  const [search , setSearch] = useState('')
  const [page , setPage] = useState(1)
  const [sort , setSort] = useState(-1)
  const [homes , setHomes] = useState([...db.homes])
  const searchHandler = (e)=>{
    setSearch(e.target.value)
  }
  const pageHandler = (e , page)=>{
    e.preventDefault()
    console.log('next page:' , page);
    const endIndex = 6 * page
    const startIndex = endIndex - 6
    const paginateHomes = db.homes.slice(startIndex , endIndex)
    console.log(paginateHomes);
    setHomes(paginateHomes)
  }
  useEffect(()=>{
    const newHomes = db.homes.filter(home => home.title.includes(search))
    setHomes(newHomes)
  } , [search])
  useEffect(()=>{
    switch (sort) {
      case "room" : {
    const newHomes = [...homes].sort((a , b) => a.roomCount - b.roomCount)      
      }
      case "metrage" : {
          const newHomes = [...homes].sort((a , b) => a.metrage - b.metrage)
          setHomes(newHomes)
          break;
      }
      case "price" : {
          const newHomes = [...homes].sort((a , b) => a.price - b.price )
          setHomes(newHomes)
          break;
      }
      default:{
        setHomes([...db.homes])
        break;
      }
    }
    
  } , [sort])
  return (
    <div className='md:px-32'>
      <h1 className='text-3xl font-bold text-center text-[#606C38]'>لیست تمامی املاک</h1>
      <div className="flex justify-between pb-6">
        <select className='border border-[#DDA15E] rounded-md w-1/4 px-4 py-2' name="" id="" defaultValue={sort} onChange={(e)=> setSort(e.target.value)}>
          <option  value="-1">انتخاب کنید</option>
          <option  value="room">براساس تعداد اتاق</option>
          <option  value="metrage">براساس متراژ</option>
          <option  value="price">براساس قیمت</option>
        </select>
        <input className='border border-[#DDA15E] rounded-md w-1/4 px-4 py-2' value={search} onChange={searchHandler} type="text" placeholder='جستجوی ملک ...' />
      </div>
      <div className=" pb-8 grid grid-cols-3 gap-6">
        {
          homes.slice(0 , 6).map(home =>{
            return <Home key={home.id} {...home} />
          })
        }
      </div>
      <div className="flex justify-center pb-5">
        {
          Array.from({length: Math.ceil(db.homes.length / 6) }).map((item , index) =>(
            <a onClick={(e) => pageHandler(e , index + 1)} className='rounded-full px-3 py-1 active:bg-[#ff5454] bg-[#606C38] text-white ' href="#" >{index + 1}</a>
          ))
        }
      </div>
    </div>
  )
}

export default index