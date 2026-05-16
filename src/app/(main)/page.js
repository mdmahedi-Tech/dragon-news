import LeftSidebar from "@/components/hompage/news/LeftSidebar";
import Rightsidbar from "@/components/hompage/Rightsidbar";

import Image from "next/image";
const  getCategoris= async ()=>{
    const res= await fetch('https://openapi.programming-hero.com/api/news/categories')
    const data=await res.json()
    return data.data.news_category
;

  }

export default async function Home() {
  const allcategory=await getCategoris()
  console.log(allcategory)
  
  return (
    
    
    <div className="grid grid-cols-12 container mx-auto gap-4">
       <div className="col-span-3">
      
        <LeftSidebar allcategory={allcategory} activeId={'01'}></LeftSidebar>
       </div>
       <div className=" text-bold col-span-6 border">
        <h1 className="text-3xl font-bold">news category</h1>
       </div>
       <div className="text-bold col-span-3 border">
        <h1>login icons</h1>
        <Rightsidbar></Rightsidbar>
       </div>
    </div>
    
  );
}
