export default function MouseEvent(){
    return (<h1
    onClick={e=>alert("onClick")}
    onMouseEnter={e=>alert("onMouseEnter")}
    onMouseOver={e=>alert("onMouseOver")}>Click Me</h1>);
}