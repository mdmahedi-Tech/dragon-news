
import { detailsBycategoryId } from '@/lib/data';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2, CiStar } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';

// const detailsheadib


const Newspage = async({params}) => {
    const {news_Id}= await params;
    const details=await detailsBycategoryId(news_Id)
    console.log(details)
    return (
        <div className="max-w-xl mx-auto card bg-base-100 shadow-sm">
          <div className="card-body">
            {/* for author */}
               <div className='flex items-center justify-between bg-mist-200'>
                <div className='flex items-center gap-2'>
                   
                    <button className='btn'>image</button>
                    
                    <div>
                      <p>{details.author?.name}</p>
                    <p className='text-xs'>{details.author?.published_date}</p>
                    </div>
                   
                  </div>
                   <div className='flex'>
                    <CiBookmark className='text-xl'/>
                    <CiShare2  className='text-xl'/>
                 </div>
               </div>
            <h2 className="card-title">{details.title}</h2>
            
          </div>
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <p className=''>{details.details}</p>
          {/* footer of card */}
          <div className='flex items-center justify-between'>
              <div className='flex items-center font-bold gap-2'>
                <p className='flex items-center'><CiStar />{details.rating.number}</p>
                <p className='flex items-center'><FaEye />{details.total_view}</p>
              </div>
             <Link href={`/category/${details.category_id}`}>
             <button className='btn bg-pink-800'>All news in this category</button></Link>
          </div>
        </div>
    );
};

export default Newspage;