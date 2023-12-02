import '@/styles/globals.css'
import Link from 'next/link'

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="md:px-32">
          <div className="bg-[#DDA15E] my-8 flex rounded-md">
              <ul className="unstyled flex">
                  <li><Link className="inline-block text-lg px-6 text-white py-4 bg-transparent rounded-md hover:bg-[#BC6C25] duration-500" href="/">خانه</Link></li>
                  <li><Link className="inline-block text-lg px-6 text-white py-4 bg-transparent rounded-md hover:bg-[#BC6C25] duration-500" href="/">بلاگ</Link></li>
                  <li><Link className="inline-block text-lg px-6 text-white py-4 bg-transparent rounded-md hover:bg-[#BC6C25] duration-500" href="/houses">املاک</Link></li>
                  <li><Link className="inline-block text-lg px-6 text-white py-4 bg-transparent rounded-md hover:bg-[#BC6C25] duration-500" href="/">ورود</Link></li>
              </ul>
          </div>
      </div>
      <Component {...pageProps} />
      <footer className="md:px-32 bg-[#656d4a]">
        <div className="flex justify-between py-8 text-white">
            <div className="text-center">خانه رویایی خود را پیدا کنید</div>
            <div className="text-center">برنامه اجاره خانه ها</div>
            <div className="text-center">با ما تماس بگیرید</div>
            <div className="text-center">ملک خود را ارسال کنید</div>
            <div className="text-center">با ما کار کنید</div>
        </div>
        <p className="text-center">
            حقوق مادی معنوی این سایت برای حانیه رحیم محفوظ میماند
        </p>
      </footer>
    </>
  )
}
