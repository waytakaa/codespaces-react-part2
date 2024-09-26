import { useEffect,useRef, useState } from "react";
function BmiText({bmi}){
    if(bmi<18.5)
        return (<h1>Underweight!</h1>);
    if(bmi>30)
        return (<h1>Overweight!</h1>);
    return (<h1>Normal</h1>);
}
export default function Bmi(){
    const W_input = useRef(null);
    const H_input = useRef(null);
    const [bmi,setBmi]=useState(0.00);
    function handleClick(){
        let weight=W_input.current.value;
        let height=W_input.current.value/100;
        setBmi(weight/(height*height));
    }
    return (<>Weight:<input ref={W_input}/> kg.<br/>height:<input ref={H_input}/> cm.<br/>
    <button onClick={handleClick}>claculate</button><br/>
    BMI:{bmi.toFixed(2)}
    <BmiText bmi={Bmi}/>
    </>);
}