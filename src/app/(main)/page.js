import LeftSidebar from "@/components/hompage/news/LeftSidebar";
import Rightsidbar from "@/components/hompage/Rightsidbar";

import Image from "next/image";
import { redirect } from "next/navigation";

const default_id= '01';

export default async function Home() {
  redirect(`/category/${default_id}`)
  
  return (
    <>
    {/* // <div className="grid grid-cols-12 container mx-auto gap-4">
    //    <div className="col-span-3">
      
    //     <LeftSidebar allcategory={allcategory} activeId={'01'}></LeftSidebar>
    //    </div>
    //    <div className=" text-bold col-span-6 border">
    //     <h1 className="text-3xl font-bold">news category</h1>
    //     <div className="text-center text-gray-700">
    //       {
    //         news.map(n=>{
    //           return <p key={n.category_id} className="py-2 border">{n.title}</p>
    //         })
    //       }
    //     </div>
    //    </div>
    //    <div className="text-bold col-span-3 border">
    //     <h1>login icons</h1>
    //     <Rightsidbar></Rightsidbar>
    //    </div>
    // </div> */}
   </> 
    );
}
