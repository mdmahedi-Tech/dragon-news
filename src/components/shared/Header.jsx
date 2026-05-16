import { compareAsc, format } from "date-fns";

import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
const Header = () => {
    return (
        <div className='text-center space-y-4 mt-6'>
            <Image className='mx-auto'
             src={logo} height='300'  width='300' alt='logo image'></Image>
            <p className="text-red-300">Journalism Without Fear or Favour</p>
            <p>{format(new Date(), " EEE, MMM dd yyyy")}</p>
        </div>
    );
};

export default Header;