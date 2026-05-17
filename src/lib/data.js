export const  getCategoris= async ()=>{
    const res= await fetch('https://openapi.programming-hero.com/api/news/categories')
    const data=await res.json()
    return data.data.news_category
;

  }
  // getnewsby category
  export const  getNewsByCategory= async (category_id)=>{
    const res= await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
    const data=await res.json()
    return data.data;
;

  }
  
  // for details category
 export const  detailsBycategoryId= async (news_Id)=>{
    const res= await fetch(`https://openapi.programming-hero.com/api/news/${news_Id}`)
    const data=await res.json()
    return data.data[0];
;

  }