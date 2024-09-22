import { useState } from 'react';
import CreateTodo from './component/Createtodo';


function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [text, setText] = useState("Dark");

    const handleDarkMode = () => {
        setDarkMode(!darkMode);
        setText(darkMode ? "Dark" : "Light");
    };

    const lightStyles = {
        backgroundColor: '#f9f9f9',
        color: '#000',
        minHeight: '100vh',
        padding: '20px',
        textAlign: 'center',
    };

    const darkStyles = {
        backgroundColor: '#333',
        color: '#fff',
        minHeight: '100vh',
        padding: '20px',
        textAlign: 'center',
    };

    return (
        <div style={darkMode ? darkStyles : lightStyles}>
            <button style={styles.button} onClick={handleDarkMode}>{text} Mode</button>
            <CreateTodo />
        </div>
    );
}

const styles = {
    button: {
        padding: '10px 20px',
        margin: '10px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#007BFF',
        color: '#fff',
        cursor: 'pointer',
    },
};

export default App;
