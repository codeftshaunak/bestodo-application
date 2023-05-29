import React from 'react';
import Image from 'next/image';


const TodoHead = () => {
    return (
        <div>
            <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
                <form className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
                    <Image src="/notes.png" width={24} height={24} alt="Add todo" />
                    <input
                        type="text"
                        placeholder="Type your todo"
                        className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                    />
                    <button
                        type="submit"
                        className="appearance-none w-8 h-8 bg-[url('/plus.png')] bg-no-repeat bg-contain"
                    ></button>
                </form>

                <ul className="flex justify-between my-4 text-xs text-gray-500">
                    <li className="flex space-x-1 cursor-pointer">
                        <Image src="/double-tick.png" width={16} height={16} alt="Complete" />
                        <span>Complete All Tasks</span>
                    </li>
                    <li className="cursor-pointer">Clear completed</li>
                </ul>
            </div>
        </div>
    )
}

export default TodoHead;
