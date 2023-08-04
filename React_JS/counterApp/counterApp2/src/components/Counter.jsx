import {useSelector, useDispatch} from "react-redux"
import {increment, decrement, setCustom } from "../redux/state/counter/counterSlice";
import { useRef } from "react";

const Counter = () => {
    const myNumber = useRef()
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();


    return (
        <div className="card">
            <div className="card-header bg-secondary text-white text-center">
                <h1>This is my Counter App</h1>
            </div>
            <div className="card-body">
                <h1>{count}</h1>
                <div className="my-5">
                    <button onClick={() => dispatch(increment())} className="btn btn-success">Increment</button>
                    <button onClick={() => dispatch(decrement())} className="btn btn-danger mx-2">Decrement</button>
                </div>
                <div className="my-5">
                    <input ref={myNumber} className="form-control w-50 my-2" type = "number"/>
                    <button onClick={() => {dispatch(setCustom(parseInt(myNumber.current.value)))}} className="btn btn-danger w-50 my-2">Set Number</button>
                </div>
            </div>
    
        </div>
    );
};

export default Counter;