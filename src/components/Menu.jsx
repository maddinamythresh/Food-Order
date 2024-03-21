import { useEffect,useState } from "react"
import Item from "./Items.jsx"
export default function Menu(){

    const [data,setData]=useState([]);
    useEffect(()=>{
        async function fetchItems(){
            const response=await fetch("http://localhost:3000/meals")
            const resData=await response.json();
             setData(resData)
        }
        fetchItems()
    },[])
    return(
    <div id="meals">
       {data.map((item)=>(<Item key={item.id} item={item}/>))}
    </div>

    )

}