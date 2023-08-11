import { useSelector } from "react-redux";

const ToDoList = () => {

    const todoItems = useSelector((state) => {
        state.todo.value
    })
    alert(todoItems);
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                  <table className="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Task Name</th>
                            <th>Edit</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                          
                        }
                    </tbody>
                  </table>
                </div>
            </div>
            
        </div>
    );
};

export default ToDoList;