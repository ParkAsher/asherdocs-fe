import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WriteThumbnailInput({ handler, value }) {
    const [thumbnail, setThumbnail] = useState('');

    useEffect(() => {
        setThumbnail(value);
    }, [value]);

    // 썸네일 업로드
    const handleChange = async (e) => {
        let formData = new FormData();
        formData.append('thumbnail', e.target.files[0]);

        // 토큰
        const token = sessionStorage.getItem('token') ?? null;

        try {
            const response = await axios.post(
                `${process.env.REACT_APP_SERVER_URL}/image/thumbnail/upload`,
                formData,
                {
                    withCredentials: true,
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            const e = {
                target: {
                    name: 'thumbnail',
                    value: response.data,
                },
            };

            setThumbnail(response.data);
            handler(e);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='w-full mb-[1.5rem]'>
            <input
                className='w-full p-[1rem] outline-none text-sm border border-solid border-gray-300'
                type='file'
                accept='image/*'
                onChange={handleChange}
            />
            {thumbnail ? <img className='mt-[1rem] w-[4rem] h-[4rem]' src={thumbnail} /> : null}
        </div>
    );
}

export default WriteThumbnailInput;
