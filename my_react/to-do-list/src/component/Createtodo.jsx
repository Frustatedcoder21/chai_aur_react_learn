import { useState } from "react";
import Todos from "./Todos"; // Assuming Todos is another component you created

function CreateTodo() {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleAddTodo = () => {
        const newTodo = {
            id: todos.length + 1,
            title: title,
            description: description,
        };
        setTodos([...todos, newTodo]);
        setTitle("");
        setDescription("");
    };

    const handleOnChangeTitle = (val) => {
        setTitle(val);
    };

    const handleOnChangeDesc = (val) => {
        setDescription(val);
    };

    return (
        <div style={styles.container}>
            <input
                type="text"
                placeholder="Title"
                style={styles.input}
                value={title}
                onChange={(e) => handleOnChangeTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Description"
                style={styles.input}
                value={description}
                onChange={(e) => handleOnChangeDesc(e.target.value)}
            />
            <button style={styles.button} onClick={handleAddTodo}>
                Add Todo
            </button>
            <Todos todos={todos} />
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        margin: '0 auto',
        maxWidth: '600px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    input: {
        padding: '10px',
        margin: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        width: '80%',
        maxWidth: '400px',
    },
    button: {
        padding: '10px 20px',
        margin: '10px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#007BFF',
        color: '#fff',
        cursor: 'pointer',
        width: '80%',
        maxWidth: '400px',
    },
};

export default CreateTodo;
