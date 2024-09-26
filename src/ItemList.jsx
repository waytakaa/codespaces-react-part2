import { useState,useEffect } from "react";
function Item({name,isPacked=false}){
    return(<li key={name}>
        {name} {isPacked && '🗸'} 
        </li>);
}
export default function ItemList(){
    const [keyword,setKeyword]=useState("");
    useEffect(()=>{
        console.log("this component is loaded");

        return ()=>{
            alert("component unloaded! ");
        }

    },[]);
    const items=[{name:"Sunglass",isPacked:false},
        {name:"Sunblock",isPacked:true},
        {name:"Powerbank",isPacked:false},
        {name:"Towel",isPacked:true},
        {name:"Swimming suit",isPacked:false}];


    const filterList=items.filter(i=>i.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase))
    const itemsList=filterList.map(i=><Item key={i.name}
        name={i.name} isPacked={i.isPacked}/>);
    return (<>
    <input type="text" value={keyword} onChange={e=>setKeyword(e.target.value)}/>
    <ui>
        {itemsList}
    </ui>
    </>); 
}