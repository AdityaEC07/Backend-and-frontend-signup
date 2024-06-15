// /* eslint-disable no-unused-vars */
// import React from 'react'

// const Login = () => {
//   return (
//     <>
//         <h2>Login</h2>
//             <form>
//                 <label> Email :- <input type="email"/></label>
//                 <br />
//                 <br />
//                 <label> Password :- <input type="password" /></label>
//                 <br />
//                 <br />
//                 <button type="submit">Login</button>
//             </form>
//     </>
//   )
// }

// export default Login


// import React,{useState} from 'react'
// import axios from 'axios'

// const Login = () => {
//   let [data, setdata] = useState({
//     email:"",
//     password:""
//   });

//   let fun1=(e)=>{
//   let {name,value}=e.target
//   setdata({...data,[name]:value})
//   }
//   async function login() {
//     let res = await axios.post('http://localhost:5000/login',data)
//     console.log(res,'bhfvdu');
//     if (res.data=='pasword mismach') {
//       alert('login')
//     }
//   }
    
//   return (
//    <div>
//     <form onSubmit={login}>
//      <input name='email' value={data.email} onChange={fun1} type='email' placeholder='email'/>
//          <br/>  
//          <br/>
//          <input name='password' value={data.password} onChange={fun1} type='text' placeholder='password'/>
//          <br/>  
//          <br/>
//            <button onClick={login}>Login</button>
//            </form>
//    </div>
//   )
// }

// export default Login