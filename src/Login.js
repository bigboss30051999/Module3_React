import {useState} from "react";
export default function Login(){
   let [username, setUsername] = useState('');
   let [password, setPassword] = useState('');
   let[notice, setNotice] = useState('');
    return (
        <>
            <h2><p>{notice}</p></h2>
            <input type="text" value={username}
                   onChange={e => setUsername(e.target.value)}/>
            <input type="text" value={password}
                   onChange={e => setPassword(e.target.value)}/>
            <button onClick={()=> {
                if(username === "admin"&&password === "admin"){
                    setNotice("Xin chao Admin")
                }
                else {
                    setNotice("Ban Khong co quyen truy cap");
                }
            }}>Login</button>
        </>
    )
}