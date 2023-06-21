import React from "react";

const History = ({todo,setTodo, setedited}) =>{

const editing = ({id}) => {
    const findTodo = todo.find((item) => item.id === id)
    setedited(findTodo)
}
    const deleteitem =({id})=>{
    setTodo(todo.filter((item) => item.id !== id))
    }
    const strikeout = (item) => {
        setTodo(
            todo.map((work) => {
                if(work.id === item.id){
                    return{...work, completed: !work.completed}
                }
                return work
            })
        )

    }

    return(
        <div>
            {todo.map((item)=>(
                <li className="todo-list" key={item.id}>
                    <input type="text" value={item.title} className={`list ${item.completed ? "complete": "" }`} onChange={(event)=>event.preventDefault}/>
                <button className = "button-complete" onClick={() => strikeout(item)}>
                <img src="https://www.pinclipart.com/picdir/big/73-731944_clipart-library-stock-checkmark-transparent-clip-art-tick.png"/>
                </button>
                <button className = "button-edit" onClick={()=> editing(item)} >
                <img src="https://affiliates.bet9ja.com/wp-content/uploads/2019/09/noun_register_2773678.png"/></button>
                <button className = "button-delete" onClick={ () => deleteitem(item)}>
                <img src="https://clipground.com/images/delete-image-png-19.png"/></button>
                </li>
                ))}
        </div>
    )

}
export default History;