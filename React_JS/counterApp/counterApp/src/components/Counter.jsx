

const Counter = () => {
    return (
        <div className="card">
            <div className="card-header bg-secondary text-white text-center">
                <h1>This is a counter app</h1>
            </div>
            <div className="card-body">
                <h1>00</h1>
               <div className="my-5">
                <button className="btn btn-success">Increment</button>
                <button className="btn btn-danger mx-2">Decrement</button>
               </div>
            </div>
            
        </div>
    );
};

export default Counter;