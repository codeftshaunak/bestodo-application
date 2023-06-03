import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { colorChange, statusChange } from '../redux/filters/action';



const TodoFooter = () => {
    const todos = useSelector((state: any) => state.todos);
    const filters = useSelector((state: any) => state.filters)
    const { status, colors } = filters;


    const taskIncomplete = todos.filter((todo: any) => !todo.completed).length;
    const dispatch = useDispatch();

    const handleStatusChange = (status: string) => {
        dispatch(statusChange(status))
    }

    const handleColorChange = (color: string) => {

        if (colors?.includes(color)) {
            console.log(color);

            dispatch(colorChange(color, 'removed'))
        } else {
            dispatch(colorChange(color, 'added'))
        }
    }

    const taskRemain = (taskNo: number) => {
        switch (taskNo) {
            case 0:
                return "No Task Left"
            case 1:
                return "1 Task Left"
            default:
                return `${taskNo} Tasks Left`
        }
    }


    return (
        <div>
            <div className="mt-4 flex justify-between text-xs text-gray-500">
                <p>{taskRemain(taskIncomplete)}</p>
                <ul className="flex space-x-1 items-center text-xs">
                    <li className={`cursor-pointer ${status == "All" && "font-bold"}`} onClick={() => handleStatusChange("All")}>All</li>
                    <li>|</li>
                    <li className={`cursor-pointer ${status == "Incomplete" && "font-bold"}`} onClick={() => handleStatusChange("Incomplete")}>Incomplete</li>
                    <li>|</li>
                    <li className={`cursor-pointer ${status == "Complete" && "font-bold"}`} onClick={() => handleStatusChange("Complete")}>Complete</li>
                    <li></li>
                    <li></li>
                    <li
                        className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors?.includes('green') && "bg-green-500"}`}
                        onClick={() => handleColorChange('green')}
                    ></li>
                    <li
                        className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors?.includes('red') && "bg-red-500"}`}
                        onClick={() => handleColorChange('red')}
                    ></li>
                    <li
                        className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors?.includes('yellow') && "bg-yellow-500"}`}
                        onClick={() => handleColorChange('yellow')}
                    ></li>
                </ul>
            </div>
        </div >
    )
}

export default TodoFooter;
