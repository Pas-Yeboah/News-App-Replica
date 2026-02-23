import React from 'react'
import lego from '../images/image-web-3-desktop.jpg'

const Hero = () => {
  return (
    <div className='grid grid-cols-[2fr_1fr] mt-10  gap-8'>
      <div>
        <img src={lego} alt="" />
          <div className='flex mt-10 gap-8 '>
            <h1 className='font-extrabold text-6xl'>
              The Bright Future of <br /> Web 3.0?
            </h1>
            <div className='space-y-10'>
              <p className='text-gray-500'>
                  We dive into the next evolution of the web that <br /> claims to put the power of platforms back  into the hands of people.But is it really fullfilling it's promise?
              </p>
              <button className='bg-[hsl(5,85%,63%)] px-5 py-2 font-bold'>
                  READ MORE 
              </button>
            </div>
          </div>
      </div>
      <div className='bg-black'>

      </div>

      <div className='grid grid-cols-3'>
        <div> <img src="" alt="" />
          <div>
            <p></p> <p></p> <p></p>
          </div>
        </div>
        <div> <img src="" alt="" /> 
          <div>
            <p></p> <p></p> <p></p>
          </div>
        </div>
        <div> <img src="" alt="" /> 
          <div>
            <p></p> <p></p> <p></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero