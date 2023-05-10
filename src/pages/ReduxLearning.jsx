import { updateTodo, addTodo, removeTodo} from "../actions/actionsSlice";
import { useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

const ReduxLearning = () => {
    const todo = useSelector((state) => state.custom.todo)
    const dispatch = useDispatch();
    const [ item, setItem ] = useState("");
    const handleAddTodo = item => {
        dispatch(addTodo(item));
        setItem("");
    }

    const onChange = e => {
        setItem(e.target.value)
    }

    console.log("re-render")
    return (
        <>
        <br/>
        <input type="text" value = {item} placeholder="input" onChange={e=>onChange(e)}/>
        <button onClick={()=>handleAddTodo(item)}>add</button>
        <h1> my todo</h1>
        <ul>
            {
                todo && todo.map((item,i)=>(
                    <li key = {i}>{item} <button onClick = {()=>dispatch(removeTodo(i))}>x</button></li>
                ))
            }
        </ul>
        </>
    )

}

export default ReduxLearning