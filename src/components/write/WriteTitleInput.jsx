import React from 'react';

function WriteTitleInput({ handler, value }) {
    const handleChange = (e) => {
        handler(e);
    };

    return (
        <div className='w-full mb-4'>
            <input
                className='w-full p-2 border-b border-solid border-gray-300 placeholder-gray-400 outline-none md:p-0 md:py-2'
                type='text'
                name='title'
                onChange={handleChange}
                placeholder='제목을 입력하세요.'
                value={value}
            />
        </div>
    );
}

export default WriteTitleInput;
