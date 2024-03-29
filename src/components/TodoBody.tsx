import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';


const TodoBody: React.FC = () => {
    const todos = useSelector((state: any) => state.todos);
    const filters = useSelector((state: any) => state.filters);

    const filterByStatus = (todo: any) => {
        const { status } = filters;
        switch (status) {
            case "Complete":
                return todo.completed
            case "Incomplete":
                return !todo.completed
            default:
                return true;
        }
    }

    const filterByColor = (todo: any) => {
        const { colors } = filters;
        if (colors.length > 0) {
            return colors.includes(todo?.color)
        } else {
            return true;
        }
    }

    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {
                todos
                    .filter(filterByStatus)
                    .filter(filterByColor)
                    .map((todo: any) => {
                        return <TodoItem todo={todo} key={todo.id} />
                    })
            }
        </div>
    );
};

export default TodoBody;
