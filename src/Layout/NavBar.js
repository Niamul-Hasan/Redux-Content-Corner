import React from "react";
import { Link } from "react-router-dom";
import { FcReading } from "react-icons/fc";
import { BsClockHistory } from "react-icons/bs";

const Navbar = () => {
    return (
        <nav className='h-14 bg-amber-500 rounded-2xl m-2 max-w-7xl mx-auto px-5'>
            <ul className='h-full  mx-auto flex justify-between items-center gap-3 font-semibold'>
                <h1 className='flex-1'><span className="text-2xl font-serif text-orange-700">Content</span>
                    <span className="text-lg font-thin text-white">Corner</span></h1>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <Link to='/most-read'>
                    <li title='Most-Read' className='bg-rose-500 p-2 rounded-full'>
                        <FcReading className='text-white' />
                    </li>
                </Link>
                <Link to='/history'>
                    <li title='Reading History' className='bg-rose-500 p-2 rounded-full'>
                        <BsClockHistory className='text-white' />
                    </li>
                </Link>

            </ul>
        </nav>
    );
};

export default Navbar;