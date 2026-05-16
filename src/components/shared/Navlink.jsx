"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({href,className,children}) => {
     const pathname=usePathname();
     console.log(pathname)
     const isActive=href===pathname;
    return (
       
        <div className='container mx-auto'>
            <Link href={href} className={`${isActive ? 'text-blue-700':''} ${className}`}>{children}</Link>
        </div>
    );
};

export default Navlink;