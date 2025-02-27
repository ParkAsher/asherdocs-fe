import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../../apis/category.api';

function WriteCategoryInput({ handler, value }) {
    const { data } = useQuery({
        queryKey: ['categories'],
        queryFn: getCategories,
    });

    const handleChange = (e) => {
        handler(e);
    };

    return (
        <div className='w-full mb-4'>
            <select
                className='border border-solid border-black p-2 rounded text-sm outline-none md:text-xs md:p-1'
                defaultValue='0'
                name='category'
                onChange={handleChange}
                value={value}
            >
                <option value='0' hidden disabled>
                    카테고리
                </option>
                {data?.map((category, idx) => {
                    return (
                        <option key={idx} value={category.id}>
                            {category.categoryName}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}

export default WriteCategoryInput;
