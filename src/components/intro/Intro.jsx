import React from 'react';
import logoImage from '../../images/logo.png';
import { FaGithub } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

function Intro() {
    return (
        <div className='w-full my-10'>
            <div className='w-full flex items-center justify-center flex-wrap gap-5 h-full mx-auto my-0 p-10 border-solid border-b border-gray-300 lg:w-[800px]'>
                <div className='h-40 w-40'>
                    <img className='w-full h-full' src={logoImage} />
                </div>
                <div className='flex items-center flex-wrap gap-3'>
                    <a className='w-10 h-10' href='https://github.com/ParkAsher'>
                        <FaGithub className='w-full h-full' />
                    </a>
                    <a className='w-10 h-10' href='mailto:devasherpark@gmail.com'>
                        <IoMdMail className='w-full h-full' />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Intro;
