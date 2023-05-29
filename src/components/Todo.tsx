import React from 'react'
import TodoHead from './TodoHead';
import TodoBody from './TodoBody';

const Todo = () => {
    return (
        <div className="flex justify-center items-center h-72">
            <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
                <TodoHead />
                <TodoBody />
            </div>
        </div>
    )
}

export default Todo;
