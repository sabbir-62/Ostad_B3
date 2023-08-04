import {useSelector, useDispatch} from "react-redux"
import { increment, decrement, setCustom } from "../redux/state/counter/counterSlice";
import { useRef } from "react";

const Counter = () => {
    const myNumber = useRef();
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    
    
    return (
        <div className="card">
            <div className="card-header bg-secondary text-white text-center">
                <h1>This is a counter app</h1>
            </div>
            <div className="card-body">
                <h1>{count}</h1>
               <div className="my-5">
                <button onClick={() => {dispatch(increment())}} className="btn btn-success">Increment</button>
                <button onClick={() => {dispatch(decrement())}} className="btn btn-danger mx-2">Decrement</button>
               </div>
               <div className="my-5">
                <div>
                    <input ref={myNumber} className="form-control w-50 my-2" type="number"/>
                </div>
                <button onClick={() => {dispatch(setCustom(myNumber.current.value))}} className="btn btn-danger my-2 w-50">Set Number</button>
               </div>
            </div>
            
        </div>
    );
};

export default Counter;