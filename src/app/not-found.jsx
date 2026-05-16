import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
       <>
      <div className='text-center text-6xl text-shadow-amber-300'>
            <h1>page is not found by mahedi</h1>
           
        </div>
         <div className='text-center'>
            <Link href={'/'}><button className='bg-green-400 text-white'>back home</button></Link> 
            </div> 
       </>
    );
};

export default NotFound;