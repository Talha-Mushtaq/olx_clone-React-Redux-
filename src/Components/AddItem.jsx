import React ,{useState}from 'react'
import "../Styles/Home.css";
function AddItem(props) {

if("placeholder" in props)
{
    return 
    {
       <div className="ad-Item">
           <div className="poster  anim placeholder"></div>
           <div className="title  anim placeholder"></div>
           <div className="tagline anim  placeholder"></div>
           <div className="ftr flex">
           <div className="location  anim placeholder"></div>
           <div className="stamp anim  placeholder"></div>
           </div>
       </div>
    }
}

    return (
        <div>
            
        </div>
    )
}
export default AddItem;