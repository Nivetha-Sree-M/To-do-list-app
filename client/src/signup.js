import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Signup = () => {

    const [username,setusername] = useState('')
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')

    const handlesignup = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:4000/signup",{username,email,password})
        .then(res => console.log(res)).catch(err => console.log(err))

    }
    return(

        <div className='sign-up'>

            <div className='form'>
        <form>
        <div className='text-signup'>Sign-Up</div>
            <input type="text" placeholder="Username" onChange={e=> setusername(e.target.value)} value={username} required/><br></br><br></br>
            <input type="text" placeholder="Email" onChange={e=>setemail(e.target.value)} value={email} required /><br></br><br></br>
            <input type="password" placeholder="Password" onChange={e=> setpassword(e.target.value)} value={password} required/><br></br><br></br>
            <button type="submit" onClick={handlesignup}>Signup</button>
            <div>Already have an account? <Link to ={'/login'}> Login </Link ></div>
        </form>
        </div>

                </div>
        )

}
export default Signup;