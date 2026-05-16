import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className='bg-gray-200 flex justify-center space-x-3 py-2 container mx-auto'>
            <button className='btn bg-red-400'>breaking news</button>
            <Marquee pauseOnHover speed={50}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad modi corporis ut. Sit harum, ullam odit quidem et laboriosam corrupti sed velit animi iusto quas est eum perferendis possimus exercitationem esse saepe doloribus ut, voluptate pariatur? Dicta vero numquam deserunt magnam, natus animi provident, dignissimos blanditiis nulla molestias dolores magni! Reprehenderit distinctio aliquam fugit repellat commodi tenetur qui atque, accusantium at adipisci laboriosam obcaecati consequatur quo tempora cumque ducimus quaerat, dolores sint? Magni quisquam odio provident mollitia sapiente ut id delectus iusto? Quam corporis illum quia maxime ducimus facilis, sint! Minima hic ipsa nesciunt reprehenderit est earum.
            </Marquee>
        </div>
    );
};

export default BreakingNews;