import React, { useState } from 'react';

const Home = () => {
    const [click, setClick] = useState(false);


    const activeClass = "text-white bg-amber-700 border font-semibold";
    return (
        <div className='max-w-7xl gap-14 mx-auto my-10'>
            <div className='mb-10 flex justify-end gap-5'>
                <button
                    onClick={() => setClick(true)}
                    className={`border shadow-md px-3 py-2 rounded-lg font-thin ${click ? activeClass : null}`}
                >
                    Last Upload
                </button>
                <button
                    onClick={() => setClick(false)}
                    className={`border shadow-md px-3 py-2 rounded-lg font-thin ${!click ? activeClass : null}`}
                >
                    First Upload
                </button>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
                <p className='uppercase text-rose-600'>Contents will be displayed here</p>
            </div>
        </div>
    );
};

export default Home;