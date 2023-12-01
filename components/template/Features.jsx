import React                from 'react'
import { FaHome  }          from "react-icons/fa";
import { GiMoneyStack }     from "react-icons/gi";
import { BsFillHousesFill } from "react-icons/bs";
import { FaRegBuilding }    from "react-icons/fa";
import { FaPerson }         from "react-icons/fa6";



const Features = () => {
  return (
    <>
    <div className="py-8">
        <h2 className="text-center text-3xl font-bold text-[#606C38] py-10">چرا املاک امپراطور؟</h2>
        <div className="md:px-32 grid grid-cols-3 gap-8">
            <div>
                <div className="flex items-center">
                    <div>{<FaHome className="text-2xl me-3 text-[#DDA15E]" /> }</div>
                    <h3 className="text-2xl text-[#606C38]">بهترین خانه های لوکس جهان </h3>
                </div>
                <p>
                    نکته بعدی در مورد متن ساختگی لورم ایپسوم این است که بعضی از طراحان وبسایت و گرافیست کاران بعد از آنکه قالب و محتوای مورد نظرشون را ایجاد کردند
                </p>
            </div>
            <div>
                <div className="flex items-center">
                    <div>{<BsFillHousesFill  className="text-2xl me-3 text-[#DDA15E]" /> }</div>
                    <h3 className="text-2xl text-[#606C38]">همه خانه ها در مکان های برتر </h3>
                </div>
                <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                </p>
            </div>
            <div>
                <div className="flex items-center">
                    <div>{<FaRegBuilding  className="text-2xl me-3 text-[#DDA15E]" /> }</div>
                    <h3 className="text-2xl text-[#606C38]">خانه جدید در یک هفته </h3>
                </div>
                <p>
                    ز آنجا که لورم ایپسوم، شباهت زیادی به متن های واقعی دارد، طراحان معمولا از لورم ایپسوم استفاده میکنند تا فقط به مشتری یا کار فرما نشان دهند که قالب طراحی شده
                </p>
            </div>
            <div>
                <div className="flex items-center">
                    <div>{<FaHome className="text-2xl me-3 text-[#DDA15E]" /> }</div>
                    <h3 className="text-2xl text-[#606C38]">فقط بهترین خواص </h3>
                </div>
                <p>
                    تا فقط به مشتری یا کار فرما نشان دهند که قالب طراحی شده بعد از اینکه متن در آن قرار میگرد چگونه خواهد بود و فونت ها و اندازه ها چگونه در نظر گرفته شده است.
                </p>
            </div>
            <div>
                <div className="flex items-center">
                    <div>{<GiMoneyStack className="text-2xl me-3 text-[#DDA15E]" /> }</div>
                    <h3 className="text-2xl text-[#606C38]">پرداخت های ایمن در بعدی </h3>
                </div>
                <p>
                    ر نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد دنبال متن های مرتبط بگردد تمرکزش از روی کار اصلی برداشته میشود و اینکار زمان بر خواهد بود.
                </p>
            </div>
            <div>
                <div className="flex items-center">
                    <div>{<FaPerson className="text-2xl me-3 text-[#DDA15E]" /> }</div>
                    <h3 className="text-2xl text-[#606C38]">1% مشاوران املاک برتر</h3>
                </div>
                <p>
                    همچنین طراح به دنبال این است که پس از ارایه کار نظر دیگران را در مورد طراحی جویا شود و نمی‌خواهد افراد روی متن های موجود تمرکز کنند.
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Features