import { useRouter } from 'next/router'
import React from 'react'
import db from '@/data/db.json'

const SingleHome = ({img , id , meterage , roomCount , price , title}) => {
  const router = useRouter()
  const { id : homeId } = router.query

  
  const home = db.homes.find(home => home.id === Number(homeId))

  return (
    <div className="md:px-32 px-8 py-12 grid grid-cols-1 md:grid-cols-5 md:gap-10 dynamic-body">
        <div className="col-span-2">
            <img className="rounded-md" src={home?.img} alt="" />
        </div>
        <div className="col-span-3">
            <h2 className="text-3xl pt-5 md:pt-0 pb-4">ملک شماره {home?.id} : {home?.title}</h2>
            <div>
              <span className='text-[#BC6C25]'>متراژ :</span>
               {home?.meterage} متر
            </div>
            <div>
              <span className='text-[#BC6C25]'>تعداد اتاق : </span>
              {home?.roomCount} خوابه
            </div>
            <div>
              <span className='text-[#BC6C25]'>قیمت ملک :</span> 
              {home?.price} تومان
            </div>
            <br /><br />
            <p>
                <span className='text-[#BC6C25]'>
                توضیحات : 
                </span>
                اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود. طراحان وب و گرافیک از این متن برای پرکردن صفحه و ارائه شکل کلی طرح استفاده می‌کنند.
            </p>
        </div>
    </div>
  )
}

export default SingleHome