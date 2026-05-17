import LeftSidebar from '@/components/hompage/news/LeftSidebar';
import NewsCard from '@/components/hompage/NewsCard';
import Rightsidbar from '@/components/hompage/Rightsidbar';
import { getCategoris, getNewsByCategory } from '@/lib/data';
import React from 'react';
export const metadata = {
  title: "Dragon-news-category",
  description: "best news portal in Bangladsh",
};



const NewsCategorypage = async ({params}) => {
const {id}=await params;

const allcategory=await getCategoris()
const news=await getNewsByCategory(id);

    return (
        <div className="grid grid-cols-12 container mx-auto gap-4">
       <div className="col-span-3">
      
        <LeftSidebar allcategory={allcategory} activeId={id}></LeftSidebar>
       </div>
       <div className=" text-bold col-span-6 border">
        <h1 className="text-3xl font-bold text-center pb-4">news by category</h1>
        <div className="text-center text-gray-700">
          {
           !news.length == 0 ? (news.map(n=>{
              return <NewsCard key={n.category_id} news={n}></NewsCard>
            })):<h1>no news found</h1>
          }
        </div>
       </div>
       <div className="text-bold col-span-3 border">
        <h1>login icons</h1>
        <Rightsidbar></Rightsidbar>
       </div>
    </div>
    );
};

export default NewsCategorypage;