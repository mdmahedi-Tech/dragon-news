import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';

const Rightsidbar = () => {
    return (
        <div className='flex flex-col text-center gap-2'>
            <h1 className='font-bold'>login with</h1>
            <button className='btn text-blue-700 border-blue-950'><FaFacebook />login with google</button>
            <button className='btn'> <FaGithub />login with github</button>
            
        </div>
    );
};

export default Rightsidbar;
