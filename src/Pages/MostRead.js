import React from 'react';
import { useDispatch } from 'react-redux';
import { addToDB } from '../Redux/ActionCreators/contentAction';

const MostRead = () => {

    const dispatch = useDispatch();

    const content = {
        name: "Niamul Hasan",
        age: 25,
        message: "i ama a alklafkkfmkflkdvlkdvkdvlklkvlmlskdmvlksmvlmdlvmldskmvlsdmvlksmlvmsdlkvmsl"
    }

    const handleSubmit = () => {
        fetch('http://localhost:4000/contents', {
            method: "POST",
            body: JSON.stringify(content),
            headers: {
                "Content-type": "application/json",
            },
        }).then(res => res.json()).then(data => dispatch(addToDB(data)));

    }
    return (
        <div>
            <h1>This is Most Read page</h1>

            <div>
                <button
                    className='text-white bg-indigo-400 rounded shadow-md text-thin'
                    onClick={handleSubmit}
                >Submit</button>
            </div>
        </div>
    );
};

export default MostRead;