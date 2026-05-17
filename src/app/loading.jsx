import React from 'react';

const loading = () => {
    return (
        <div className='flex justify-center items-center h-[85vh]'>
            Global loading
            <span className="loading loading-spinner text-primary"></span>
        </div>
    );
};

export default loading;