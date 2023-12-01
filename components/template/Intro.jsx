import React from 'react'
// import pic1 from '../../public/img/build.png'

const Intro = () => {
  return (
    <>
    <div className="md:px-32 grid grid-cols-2 gap-4">
        <div className="right">
            <h1 className="text-5xl font-bold text-[#606C38]">املاک امپراطور</h1>
            <h3 className="pt-4">با خرید خانه نهایت آزادی را احساس کنید</h3>
            <p className="pt-8">
                اگر طراح بخواهد دنبال متن های مرتبط بگردد تمرکزش از روی کار اصلی برداشته میشود و اینکار زمان بر خواهد بود. همچنین طراح به دنبال این است که پس از ارایه کار نظر دیگران را در مورد طراحی جویا شود و نمی‌خواهد افراد روی متن های موجود تمرکز کنند.
            </p>
            <button className="bg-[#606C38] hover:bg-[#283618] duration-500  mt-8 rounded-md py-2 px-4 text-white">املاک ما را مشاهده کنید</button>
        </div>
        <div className="left">
            <img className="w-full" src='img/build.png' alt=""/>
        </div>
    </div>
    </>
  )
}

export default Intro