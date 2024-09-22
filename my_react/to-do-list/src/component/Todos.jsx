export default function Todos({ todos }) {
    return (
        <div style={styles.container}>
            {todos.map((todo) => (
                <div key={todo.id} style={styles.todoItem}>
                    <h2 style={styles.title}>{todo.title}</h2>
                    <p style={styles.description}>{todo.description}</p>
                    
                </div>
            ))}
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
    todoItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '15px',
        margin: '10px 0',
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
    },
    title: {
        margin: '0 0 5px 0',
        fontSize: '18px',
        fontWeight: 'bold',
    },
    description: {
        margin: '0 0 15px 0',
        fontSize: '16px',
        color: '#555',
    },
    button: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#007BFF',
        color: '#fff',
        cursor: 'pointer',
    },
};
