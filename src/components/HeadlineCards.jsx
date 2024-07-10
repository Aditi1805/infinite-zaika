import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        <div className='rounded-xl relative'>

            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
               <p className='font-bold text-2xl px-2 pt-4'>Suns's Out BOGO's Out</p>
               <p className='px-2'>Through 8/26</p>
               <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
        </div>

        <div className='rounded-xl relative'>

            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
               <p className='font-bold text-2xl px-2 pt-4'>New Resturent</p>
               <p className='px-2'>Added Daily</p>
               <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
        </div>

        <div className='rounded-xl relative'>

            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
               <p className='font-bold text-2xl px-2 pt-4'>We Delivered Desserts</p>
               <p className='px-2'>Testy Treats</p>
               <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
        </div>
    </div>
  )
}

export default HeadlineCards