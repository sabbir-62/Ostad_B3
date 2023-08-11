import CreateToDo from "../components/CreateToDo";
import ToDoList from './../components/ToDoList';


const ToDoPage = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12 ">
                    <div className="card">
                        <div className="card-header bg-secondary text-center text-white py-4">
                            <h1>This is my ToDo App</h1>
                        </div>
                        <div className="card-body">
                            <CreateToDo/>
                            <ToDoList/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ToDoPage;