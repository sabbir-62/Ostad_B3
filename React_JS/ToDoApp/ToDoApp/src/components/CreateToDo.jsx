import { useRef } from "react";
import { useDispatch } from "react-redux";
import { AddTodo } from "../redux/state/todoSlice";


const CreateToDo = () => {

    const dispatch = useDispatch();
    const taskInput = useRef();
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-10">
                    <input ref={taskInput} className="form-control" placeholder="Task Name" type="text"></input>
                </div>
                <div className="col-md-2">
                   <button onClick={() => dispatch(AddTodo(taskInput.current.value))} className="btn btn-success w-100">Add Task</button>
                </div>
            </div>
            
        </div>
    );
};

export default CreateToDo;