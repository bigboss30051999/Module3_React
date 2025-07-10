import {useState} from "react";

export default function Listnumber (){
    let [arr, setArr] = useState([10,20]);
    let [element, setElement] = useState(0);
    let[sum,setSum]=useState(0);
    let[tbc,setTbc] = useState(0);
    function handleAdd(){
        setArr([...arr,element])
    }
    function handleSum(){
        let sum=0
        for(let i=0;i<arr.length;i++){
            sum +=arr[i];
        }
        setSum(sum);
    }
    function handleTBC(){
        let dem=0
        let sum=0
        for(let i = 0; i < arr.length; i++)
            if(!arr[i]%3==0){
                dem++
                sum+=arr[i]
            }
        setTbc(sum/dem)
        }
    return (
        <>
<h3>
    {arr.map((item, index) =>(
        <>
            {item},
        </>
    ))}
</h3>
            <input
            type="text"
            value={element}
            onChange={e => setElement(+e.target.value)}
            />
            <button onClick={handleAdd}>Thêm</button>
            <button onClick={handleSum}>Tổng</button>
            <button onClick={handleTBC}>TBC</button>
            <h2>Tổng:{sum}</h2>
            <h2>TBC:{tbc}</h2>
        </>
    )
}