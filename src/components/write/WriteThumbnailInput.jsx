import React, { useState } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import axios from 'axios';

function WriteThumbnailInput({ handler }) {
    const [thumbnail, setThumbnail] = useState('');

    // 썸네일 업로드
    const handleChange = async (e) => {
        let formData = new FormData();
        formData.append('thumbnail', e.target.files[0]);

        try {
            const response = await axios.post(
                'http://localhost:5000/image/thumbnail/upload',
                formData
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
        <ThumbnailInputBlock>
            <ThumbnailInput type='file' accept='image/*' onChange={handleChange} />
            {thumbnail ? <ThumbnailImage src={thumbnail} /> : null}
        </ThumbnailInputBlock>
    );
}

const ThumbnailInputBlock = styled.div`
    margin-bottom: 2rem;
`;

const ThumbnailInput = styled.input`
    width: 100%;
    padding: 1rem;
    outline: none;
    font-size: 1.125rem;
    border-radius: 5px;
    border: 1px solid ${oc.gray[6]};
`;

const ThumbnailImage = styled.img`
    margin-top: 1rem;
    width: 4rem;
    height: 4rem;
`;

export default WriteThumbnailInput;
