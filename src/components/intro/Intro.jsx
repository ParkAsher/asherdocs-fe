import React from 'react';
import logoImage from '../../images/logo.png';
import { FaGithub } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

function Intro() {
    return (
        <div className='w-full bg-gray-200 pt-4'>
            <div className='flex items-center justify-center flex-wrap gap-5 bg-white py-10 mx-auto my-0 rounded w-[1700px] xxl:w-[1300px] xl:w-[1024px] lg:w-full'>
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
