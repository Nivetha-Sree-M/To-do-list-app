import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {decodeToken} from 'react-jwt';
import {useNavigate} from 'react-router-dom';
import Header from './Header';
import Listtodo from './Listtodo';
import History from './history';



const Todo = () =>{

  const navigate = useNavigate()
  const[user,setuser] = useState([])

    const [input, setInput] = useState("")
  const [todo, setTodo] = useState([])
  const [edittodo,setedited] =useState([])

  useEffect(() => {
    const authtoken = localStorage.getItem("token")
    const decoded = decodeToken(authtoken)
    if(!decoded){
      navigate('/')
    }
    else{
      axios.post('http//localhost:4000/',{authtoken})
      .then(rslt => setuser (rslt.data)).catch(err => console.log(err))
    }

    },[])

  return(
    <div className='container'>

      <div className='app-wrapper'>
    <Header/>
  </div>

  <div>
    <Listtodo
    input = {input}
    setInput = {setInput}
    todo = {todo}
    setTodo = {setTodo}
    edittodo={edittodo}
    setedited={setedited}/>
  </div>

  <div>
    <History
    todo={todo}
    setTodo = {setTodo}
    edittodo={edittodo}
    setedited={setedited}/>
  </div>
  
  </div>
  )

}
export default Todo;