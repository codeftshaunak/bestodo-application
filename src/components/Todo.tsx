import React from 'react'
import TodoHead from './TodoHead';
import TodoBody from './TodoBody';
import TodoFooter from './TodoFooter';

const Todo: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-96">
            <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
                <TodoHead />
                <TodoBody />
                <TodoFooter />
            </div>
        </div>
    )
}

export default Todo;
