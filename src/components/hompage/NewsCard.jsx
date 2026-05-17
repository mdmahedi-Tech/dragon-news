import Image from 'next/image';
import Link from 'next/link';

import React from 'react';
import { CiBookmark, CiShare2, CiStar } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';

const NewsCard = ({news}) => {
    return (
      <div className="card bg-base-100 w-96 shadow-sm">
  <div className="card-body">
    {/* for author */}
       <div className='flex items-center justify-between bg-mist-200'>
        <div className='flex items-center gap-2'>
           
            <button className='btn'>image</button>
            
            <div>
              <p>{news.author?.name}</p>
            <p className='text-xs'>{news.author?.published_date}</p>
            </div>
           
          </div>
           <div className='flex'>
            <CiBookmark className='text-xl'/>
            <CiShare2  className='text-xl'/>
         </div>
       </div>
    <h2 className="card-title">{news.title}</h2>
    
  </div>
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <p className='line-clamp-3'>{news.details}</p>
  {/* footer of card */}
  <div className='flex items-center justify-between'>
      <div className='flex items-center font-bold gap-2'>
        <p className='flex items-center'><CiStar />{news.rating.number}</p>
        <p className='flex items-center'><FaEye />{news.total_view}</p>
      </div>
     <Link href={`/news/${news._id}`}><button className='btn'>details</button></Link>
  </div>
</div>
    );
};

export default NewsCard;