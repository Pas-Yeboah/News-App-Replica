import React from 'react'
import lego from '../images/image-web-3-desktop.jpg'
import pc from '../images/image-retro-pcs.jpg'
import laptops from '../images/image-top-laptops.jpg'
import console from '../images/image-gaming-growth.jpg'
const Hero = () => {
  return (
    <section >
      <div className='grid grid-cols-[2fr_1fr] mt-10  gap-8'>
        <div>
        <img src={lego} alt="" />
          <div className='flex mt-10 gap-8 '>
            <h1 className='font-extrabold text-6xl'>
              The Bright Future of <br /> Web 3.0?
            </h1>
            <div className='space-y-10 '>
              <p className='text-gray-500'>
                  We dive into the next evolution of the web that <br /> claims to put the power of platforms back  into the hands of people.But is it really fullfilling it's promise?
              </p>
              <button className='bg-[hsl(5,85%,63%)] px-5 py-2 font-bold'>
                  READ MORE 
              </button>
            </div>
          </div>
      </div>
      <div className='bg-black p-4'>
        <h1 className='text-[hsl(35,77%,62%)] font-bold text-4xl'>
          New
        </h1>
        <div className='space-y-3 mt-8'>
          <p className='text-white text-3xl font-bold'>
              Hydrogen Vs Electric Cars
          </p>
          <p className='text-gray-500 text-md '>
              Will hydrogen fueled cars ever  catch up to EVs?
          </p>
          <hr className=' border-t-2 border-gray-500 '/>
        </div>
        <div className='space-y-3 mt-8'>
          <p className='text-white  text-3xl font-bold'>
              The Downsides of Ai Artistry
          </p>
          <p className='text-gray-500 text-md '>
              What are possible adverse effects of on-demand Ai image generation?
          </p>
          <hr className=' border-t-2 border-gray-500 '/>
        </div>
        <div className='space-y-3 mt-8'>
          <p className='text-white text-3xl font-bold'>
              Is VC Funding Drying Up?
          </p>
          <p className='text-gray-500 text-md '>
              Private funding by VC firmsis down by 50% YOY.We take a look at what that means.
          </p>
         
        </div>
        
      </div>
      </div>

      <div className='grid grid-cols-3  mt-12'>
        <div className='flex flex-row gap-6'> 
          <img src={pc} alt="" className='w-38 h-42' />
          <div className='space-y-3'>
            <p className='text-[hsl(5,85%,63%)] font-bold text-3xl'> 01</p>
            <p className='font-bold'>Reviving Retro PCs</p> 
            <p className='text-gray-500'>What happens when old pcs are given modern upgrages</p>
          </div>
        </div>
        <div className='flex flex-row gap-6'> 
          <img src={laptops} alt="" className='w-38 h-42'/> 
          <div className='space-y-3'>
            <p className='text-[hsl(5,85%,63%)] font-bold text-3xl'>02</p> 
            <p className='font-bold'>Top 10 Laptops of 2022</p> 
            <p className='text-gray-500'>Our best picks for various  needs and budgets.</p>
          </div>
        </div>
        <div className='flex flex-row gap-6 ml-2'> 
          <img src={console} alt="" className='w-38 h-42' /> 
          <div className='space-y-3'>
            <p className='text-[hsl(5,85%,63%)] font-bold text-3xl'>03 </p> 
            <p className='font-bold'> The Growth of Gaming</p> 
            <p className='text-gray-500'> How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero