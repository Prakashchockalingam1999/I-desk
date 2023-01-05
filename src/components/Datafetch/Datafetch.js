import { useState,useEffect } from "react";
import axios from "axios"

function Datafetch(){
    const[post,setpost]=useState([])
    useEffect(()=>{
        axios.get("http://jsonplaceholder.typicode.com/photos")
        .then(res=>{
            console.log(res)
            setpost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    })
    return(
        <div className="container-fluid bg-light">
            <div className="container">
                <div className="row d-flex justify-content-center">
                 {post.map(post=>(<img style={{width:"300px", margin:"15px" }} key={post.id} src={post.thumbnailUrl}/>))}
                 
                </div>
            </div>
        </div>
    )
}
export default Datafetch;