import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () =>{

    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')

    const navigate = useNavigate()

    const handlelogin = (e) =>{
        e.preventDefault()
        axios.post("http://locahost:4000/login",{email,password})
        .then(res => {
            const token = res.data.token
            console.log(token)
            localStorage.setItem("token",token)
            navigate('/todo')
        })
        .catch(err => console.log(err))
    }
    return(
        <div className='Log-in'>
             <div className='form'>

             <div className='text-login'>Login</div>
        <form>
            <input type="text" placeholder="Email" onChange={(e => setemail(e.target.value))} value={email} required/><br></br><br></br>
            <input type="password" placeholder="Password" onChange={(e => setpassword(e.target.value))} value={password} required/><br></br><br></br>
            <button type="submit" onClick={handlelogin}>Login</button>
            <div>Don't have an account? <Link to ={'/signup'}> Sign-up </Link ></div>
        </form>
        </div>

        </div>
    )

}
export default Login