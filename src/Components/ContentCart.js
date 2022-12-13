import React from 'react';

const ContentCart = () => {
    return (
        <div className='flex flex-col justify-center items-start gap-2'>
            <div className='bg-rose-200 rounded-full p-2 text-center'>
                NA
            </div>
            <div className='text-2xl font-semibold '>
                Heading
            </div>
            <div className='text-lg font-thin border shadow-lg rounded-md'>
                content
            </div>
            <div className='flex justify-evenly items-center gap-2'>
                <button className='bg-green-400 border rounded-lg shadow-lg p-1'>Available</button>
                <button className='bg-orange-400 border rounded-lg shadow-lg p-1'>B</button>
                <button className='bg-indigo-400 border rounded-lg shadow-lg p-1'>C</button>
            </div>

        </div>
    );
};

export default ContentCart;