import React, { useEffect, useState } from 'react'
import "./News.css"

const News = () => {

    const [mynews , setMynews] = useState([]);

    const fetchData =async () =>{
        let res = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=e6d12a8d0f92438d9855c6ffaaa59fbe");
        let data =  await res.json();
        setMynews(data.articles);
    } 
    

    useEffect(() => {
        fetchData();
    },[])

  return (
    <>
    <div className= "mainDiv">
    
    {
        mynews.map((ele)=>{
            console.log(ele)
            return(<>
            
            <div class="card" style={{width: "300px", height: "400px", marginLeft:"5.5rem", marginTop: "2rem"}}>
            <img src={ele.urlToImage == null ? "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/media/gmg/6TI4TLWZVJGDVJY4I6HLWJAOPA.jpg?_a=ATAPphC0": ele.urlToImage} class="card-img-top" alt="..."/>
             <div class="card-body">
            <h5 class="card-title">{ele.author}</h5>
             <p class="card-text">
            {ele.title}
            </p>
            <a href={ele.url} target= "_blank" class="btn btn-primary">Read More</a>
            </div>
            </div>
            
            </>
            );
            })}
    </div>
</>

  );
};
export default News