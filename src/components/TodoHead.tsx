import React, { useState } from 'react';
import Image from 'next/image';
import { added, clearall, completedall } from '../redux/todos/action';
import { useDispatch } from 'react-redux';


const TodoHead: React.FC = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");

    const addedText = (e: any) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(added(input))
        setInput("")
    }

    const allCompleted = () => {
        dispatch(completedall())
    }

    const clearComplete = () => {
        dispatch(clearall())
    }


    return (
        <div>
            <form className="flex items-center bg-gray-100 px-4 py-4 rounded-md" onSubmit={handleSubmit}>
                <Image src="/notes.png" width={24} height={24} alt="Add todo" />
                <input
                    type="text"
                    placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                    onChange={(e) => addedText(e)}
                    value={input}
                />
                <button
                    type="submit"
                    className="appearance-none w-8 h-8 bg-[url('/plus.png')] bg-no-repeat bg-contain"
                ></button>
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li className="flex space-x-1 cursor-pointer">
                    <Image src="/double-tick.png" width={16} height={16} alt="Complete" />
                    <span onClick={allCompleted}>Complete All Tasks</span>
                </li>
                <li className="cursor-pointer" onClick={clearComplete}>Clear completed</li>
            </ul>
        </div>

    )
}

export default TodoHead;
