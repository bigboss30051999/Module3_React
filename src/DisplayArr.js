import{useState} from "react";
export default function DisplayArr() {
    let [x, setX] = useState(0);
    let [y, setY] = useState(0);
    let [sum, setSum] = useState(0);
  return (
    <>
<input type="text" value={x} onChange={e => {
    setX(+e.target.value);}}/>
        <input type="text" value={y} onChange={e => {
            setY(+e.target.value);}}/>
        <button onClick={()=> {
           setSum(x+y)
        }}>+</button>
        <h3>Sum:{sum}</h3>
        </>
  )
}