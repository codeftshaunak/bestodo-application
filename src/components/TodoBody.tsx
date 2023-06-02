import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';


const TodoBody: React.FC = () => {
    const todos = useSelector((state: any) => state.todos);
    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {
                todos.map((todo: any) => {
                    return <TodoItem todo={todo} key={todo.id} />
                })
            }
        </div>
    );
};

export default TodoBody;
