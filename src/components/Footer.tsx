import React from 'react'

const Footer = () => {
  return (
   <footer className='bg-black text-gray-400 py-12 bottom-0 left-0 w-full'>
   <div className='max-w-6x1 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8'>
     <div>
       <h3 className='text-lg font-bold text-white mb-4'>About us</h3>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolores omnis perspiciatis nemo molestias fugiat necessitatibus eos. Neque, expedita iure cumque qui fugiat laborum adipisci quod dolores voluptatem eos nostrum!</p>
    </div>
    <div>
        <h3 className='text-lg font-bold text-white mb-4'>links</h3>
        <ul>
            <li><a href="/">home</a></li>
            <li><a href="/courses" className='hover:text-slate-300'>courses</a></li>
            <li><a href="/about"className='hover:text-slate-300'>about</a></li>
            <li><a href="/contact"className='hover:text-slate-300'>contact</a></li>
        </ul>
    </div>
    <div>
        <h3 className='text-lg font-bold text-white mb-4'>follow us</h3>
        <ul>
        <li><a href="/">home</a></li>
            <li><a href="/courses" className='hover:text-slate-300'>courses</a></li>
            <li><a href="/about"className='hover:text-slate-300'>about</a></li>
            <li><a href="/contact"className='hover:text-slate-300'>contact</a></li>
        </ul>   
    </div>
    <div>
        <h3 className='text-lg font-bold text-white mb-4'>contact us</h3>
        <p>Email<a href="/.mail@gmail.com">emmaiftikhar3gmail.com</a></p>
        <p>Phone no: <span className='hover:text-white'>03458464645</span></p>
    </div>
    </div>
    <p className='flex justify-center p-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab suscipit harum libero perspiciatis ipsam! Libero consequatur dicta fugiat distinctio, ducimus repellendus rem eum explicabo, esse beatae, adipisci voluptatum rerum temporibus?</p>
    </footer>
  )
}

export default Footer