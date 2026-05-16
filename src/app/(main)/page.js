import Image from "next/image";

export default function Home() {
  return (
    
    <div className="grid grid-cols-12 container mx-auto gap-4">
       <div className="bg-amber-400 text-bold col-span-3 border">
        <h1>all categories</h1>
       </div>
       <div className="bg-gray-700 text-bold col-span-6 border">
        <h1>news category</h1>
       </div>
       <div className="bg-blue-950 text-bold col-span-3 border">
        <h1>login icons</h1>
       </div>
    </div>
    
  );
}
