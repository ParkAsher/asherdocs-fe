import React from 'react';
import logoImage from '../../images/logo.png';
import { FaGithub } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

function Intro() {
    return (
        <div className='w-full border-b border-solid border-gray-300 py-10'>
            <div className='w-full flex items-center justify-center flex-wrap gap-5'>
                <div className='h-40 w-40'>
                    <img className='w-full h-full' src={logoImage} />
                </div>
                <div className='flex items-center flex-wrap flex-col gap-5'>
                    <div className='text-xl font-semibold'>백엔드 개발자 박현민</div>
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
        </div>
    );
}

export default Intro;
