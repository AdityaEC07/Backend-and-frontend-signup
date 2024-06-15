// // /* eslint-disable no-unused-vars */
// // import React from 'react'

// // const SignUp = () => {
// //     return (
// //         <>
// //             <h2>Signup</h2>
// //             <form>
// //                 <label> firstName :- <input type="name " placeholder='firstName'/></label>
// //                 <br />
// //                 <br />
// //                 <label> lastName :- <input type="name" placeholder='lastName'/></label>
// //                 <br />
// //                 <br />
// //                 <label> Email :- <input type="email" placeholder='Email' /></label>
// //                 <br />
// //                 <br />
// //                 <label> Password :- <input type="password" placeholder='Password' /></label>
// //                 <br />
// //                 <br />
// //                 <button type="submit">Signup</button>
// //             </form>
// //         </>
// //     )
// // }

// // export default SignUp;



// import React, { useState } from 'react'

// const Singup = () => {
//     let [input,SetInput]=useState({
//         firstName:"",
//         lastName:"",
//         email:"",
//         passWord:""

//     })

//     function fun1(e){
//         let {name,value}= e.target
//         SetInput({...input,[name]:value})
//     }
//     function done(e){
//         e.preventDefault();
//         console.log('ehehe',input);
       
//     }
//   return (
//     <div>
//         <form onSubmit={done}>
//         <input  name='firstName' value={input.firstName} onChange={fun1}  type='text' placeholder='Enter your name'/>
//         <br/>
//         <br/>

//         <input   name='lastName' value={input.lastName} type='text'  onChange={fun1} placeholder='Enter your lastname'/>
//         <br/>
//         <br/>
//         <input   name='email' value={input.email} type='email'  onChange={fun1} placeholder='Enter your gmail'/>
//         <br/>
//         <br/>
//         <input    name='passWord' value={input.passWord}  type='passWord'  onChange={fun1} placeholder='Enter your gmail' />
//         <br/>
//         <br/>
//         <button type='submit'> add</button>
//         </form>
//     </div>
//   )
// }

// export default Singup


import React, { useState } from 'react';
import axios from 'axios'

function Signup() {
      let [input, setinput] = useState({
        Firstname:"",
        lastname:"",
        email:"",
        password:""
      });

      let fun1=(e)=>{
      let {name,value}=e.target
      setinput({...input,[name]:value})
      }
     
      let abhi=async()=>{
      console.log('hiiiii');
      let res = await axios.post('http://localhost:5000/signup',input)
      console.log(res,'webscdj');
      // console.log(input);
    }
     
    
    return (
      <div>
     <form onSubmit={abhi}>
      <label>Firstname <input name='Firstname' value={input.Firstname} onChange={fun1} type='text' placeholder='Firstname'/></label>
       <br/>
       <br/>
       <label>lastName<input name='lastname' value={input.lastname} onChange={fun1} type='text' placeholder='lastname'/></label>
       <br/>  
       <br/>
       <label>email<input name='email' value={input.email} onChange={fun1} type='email' placeholder='email'/></label>
       <br/>  
       <br/>
       <label>  passward<input name='password' value={input.password} onChange={fun1} type='text' 
       placeholder='password'/></label>
         <br/>  
         <br/>
       <button >submit</button>

       </form>
        </div>
      
  )
}
export default Signup