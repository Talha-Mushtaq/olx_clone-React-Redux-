import React ,{useEffect,useState}from 'react'
import {BannersHeader,BannersFooter} from "./Banners";
// import AddItem from "../Components/AddItem";
import "../Styles/Home.css";
function Home() {
    // const [list,setList] =  useState([]);
    // const [loading,setLoading] = useState();
    
    // useEffect(()=>{
    //     if(loading)
    //     {
    //         let _list=[];
    //         for(let i=0;i<12;i++)
    //         {
    //         _list.push(<AddItem placeholder={true}/>);
    //         }
    //     }
    // }, list);
    
    return (
        <div>
              <BannersHeader />
              
              <BannersFooter />
        </div>
    )
}
export default Home;