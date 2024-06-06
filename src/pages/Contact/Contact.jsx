import React from 'react'
import telegram from "./Icons/telegram.png"
import insta from "./Icons/instagram.png"
import facebook from "./Icons/facebook.png"
import youtube from "./Icons/youtube.png"


const Contact = () => {
  return (
    <div>
      <div className="contact container p-40 flex flex-col gap-20 dark:bg-gray-900 bg-gray-100 dark:text-gray-100 text-gray-800">
        <h1 className='text-5xl '>
          Bog'lanish
        </h1>
        <div className="SocialMedia">
          <div className="flex gap-16">
            <div className="facebook">
              <a href="https://m.facebook.com/p/Tuitkf-UZ-100092733941117/?mibextid=ZbWKwL&wtsid=rdr_04AjdAu2yh4MSZGsn">
                <img src={facebook} className='w-12' alt="" />
              </a>
            </div>
            <div className="insta">
              <a href="https://www.instagram.com/tuitkf.official?igsh=NTc4MTIwNjQ2YQ==">
                <img src={insta} className=' w-12' alt="" />
              </a>
            </div>
            <div className="telegram">
              <a href="https://t.me/tuitkf_uz">
                <img src={telegram} className=' w-12' alt="" />
              </a>
            </div>
            <div className="youtube">
              <a href="https://youtube.com/@tuitkf.official?si=puJrbpw0pJKWt7k4">
                <img src={youtube} className=' w-12' alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="phoneNumber">
          <h1 className=' text-5xl'>
            +998 90 000 00 00
          </h1>
        </div>
        <div className="flex">
          <div className="Email flex flex-col">
            <p className=' text-gray-400'>
              Email Manzil:
            </p>
            <p className='pl-3 text-xl'>
              info@tuitkf.uz
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
