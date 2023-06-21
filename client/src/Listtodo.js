import React,{ useEffect } from "react";
import   "./Listtodo.css";
import {v4 as uuidv4} from "uuid";

const Listtodo =({input, setInput, todo, setTodo, edittodo, setedited}) =>{

    const updateTodo = (title,id,completed) =>{
        const newtodo = todo.map((item) =>
            item.id === id ?{title,id,completed} : item
        )
        setTodo(newtodo)
        setedited("")
    }
    useEffect(()=>{
        if(edittodo){
            setInput(edittodo.title)
        }
        else{
            setInput("")
        }
    },[setInput,edittodo])

    const onInputchange= (event) =>{
        setInput(event.target.value)
    }
    const onFormSubmit= (event) => {
        event.preventDefault();
        if (!edittodo){
            setTodo([...todo,{id:uuidv4(),title:input,completed:false}]);
            setInput();
        }
        else {
            updateTodo(input, edittodo.id, edittodo.completed)
        }

    }
    return(
        <div className="input">
            <form onSubmit={onFormSubmit}>

    <input type="text" placeholder="Enter anything!"
    className="input-todo" value={input} required
    onChange={onInputchange}
    />

    <button type="submit" className="btn-add" >ADD
    <img src = "https://th.bing.com/th/id/R.d6cb306bb44b7206f52f3767eec18fd5?rik=E79jb5TUoLvS8A&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_80917.png&ehk=B2WU%2bDgif6ck7uF1xAyZrX2aWvr%2bA9UJyHiHrpI%2faqo%3d&risl=&pid=ImgRaw&r=0"/> 
    </button>
    </form>
    </div>
    )
}
export default Listtodo;