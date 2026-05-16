import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import navpic from '@/assets/user.png'
import Navlink from './Navlink';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between container mx-auto'>
            <div></div>
            <ul className='flex items-center gap-4'>
                <Navlink href={'/'} className={'text-red-500'}><li>Home</li></Navlink>
                <Navlink href={'/about'}><li>about</li></Navlink>
                <Navlink href={'/career'}><li>career</li></Navlink>
                
            </ul> 
            <div className='flex items-center gap-3'>
                <Image src={navpic} width={40} height={40} alt='image'></Image>
                <Link href={'/login'}><button className='bg-green-500'>login</button></Link>
            </div>
        </div>
    );
};

export default Navbar;