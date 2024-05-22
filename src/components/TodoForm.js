import React, {useEffect, useRef, useState} from 'react';

function TodoForm({addTodo}) {
    const [value, setValue] = useState('');
    const focusRef = useRef(null);

    useEffect(()=>{
        focusRef.current.focus();
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value)

        setValue("")
    }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input ref={focusRef} className='todo-input' value={value} placeholder='What is the task today?'
                   onChange={e => setValue(e.target.value)} />
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    );
}

export default TodoForm;