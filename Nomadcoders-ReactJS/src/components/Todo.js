import { useState } from "react"

function App() {
    const [toDo, setToDo] = useState("");
    const [toDos, setTodos] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
            return;
        }
        setTodos(currentArray => [toDo, ...currentArray]);
        setToDo("");
    }

    return (
        <div>
            <h1>My To Dos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    value={toDo}
                    type="text"
                    placeholder="Write your to do"
                    onChange={onChange}
                />
                <button>Add to Do</button>
            </form>
            <hr />
            
            <ul>
                {toDos.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;