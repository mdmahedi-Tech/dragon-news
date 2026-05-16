import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({allcategory,activeId}) => {
    return (
        <div>
            <div className=" text-bold col-span-3 border">
        <h1 className="text-2xl font-bold text-center">all categories</h1>
        <ul className="flex flex-col gap-4 pt-6">
          {
            allcategory.map(category=>{
              return <li key={category.category_id} 
              className={`${activeId == category.category_id && 'bg-gray-400'} text-center`}>
                <Link href={`/category/${category.category_id}`} 
                className='block py-2'>{category.category_name}</Link>
                </li>
            })
          }
        </ul>
       </div>
        </div>
    );
};

export default LeftSidebar;