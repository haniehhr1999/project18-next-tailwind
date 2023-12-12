import React from 'react'

const Story = () => {
  return (
    <>
    <div className="md:px-32 px-8 pt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="left relative">
            <img className="rounded-md w-4/5" src="img/story-1.jpeg" alt=""/>
            <img className="rounded-md w-1/2 absolute left-7 md:top-0 -top-10" src="img/story-2.jpeg" alt=""/>
        </div>
        <div className="right ">
            <p className="pt-12 font-bold">مشتریان خوشحال</p>
            <h3 className="text-3xl font-bold text-[#606C38]">بهترین تصمیم زندگی ما</h3>
            <p className='pt-8'>متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود. طراحان وب و گرافیک از این متن برای پرکردن</p>
            <button className="bg-[#606C38] hover:bg-[#283618] duration-500  mt-8 rounded-md py-2 px-4 text-white">خانه خود را پیدا کنید</button>
        </div>
    </div>
    </>
    )
}

export default Story