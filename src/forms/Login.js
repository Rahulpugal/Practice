import React, { useState } from 'react'
import './Login.css';

 function Login() {
   document.title="Login page";
   const[UserName, setUserName] = useState('');
   const[Password, setPassword] = useState('');
   const[Error,setError]=useState(false);
   const formHandler=(event)=>
   {
    if(UserName.length == 0 && Password.length ==0)
    setError(true);
   }
    if(UserName && Password){
    const loginObj={
      name:UserName,
      pwd:Password
    }
    console.log(loginObj);
    alert(JSON.stringify(loginObj));
   }
   return (
     <div>
    <h3>login page</h3><hr/>
    <form onSubmit={formHandler} className="hack">
        Name : <input type="text" value={UserName} placeholder="UserName"  onChange={(e)=>setUserName(e.target.value)}/><br/><br/>
        Password : <input type="password" value={Password} placeholder="Password"  onChange={(e)=>setPassword(e.target.value)}/><br/><br/>
        <button type="submit">login</button>
    </form>
    </div>
  )
}
export default Login
