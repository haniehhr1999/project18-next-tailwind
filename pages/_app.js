import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="md:px-32">
          <div className="bg-[#DDA15E] py-4 my-8 flex rounded-md">
              <ul className="unstyled flex">
                  <li><a className="inline-block px-6 bg-transparent rounded-md hover:bg-green-700 duration-500" href="#">خانه</a></li>
                  <li><a className="inline-block px-6 bg-transparent rounded-md hover:bg-green-700 duration-500" href="#">بلاگ</a></li>
                  <li><a className="inline-block px-6 bg-transparent rounded-md hover:bg-green-700 duration-500" href="#">املاک</a></li>
                  <li><a className="inline-block px-6 bg-transparent rounded-md hover:bg-green-700 duration-500" href="#">ورود</a></li>
              </ul>
          </div>
      </div>
      <Component {...pageProps} />
      <footer className="md:px-32 pt-16 bg-[#656d4a]">
        <div className="flex justify-between text-white">
            <div className="text-center">خانه رویایی خود را پیدا کنید</div>
            <div className="text-center">درخواست پروپوزال</div>
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
