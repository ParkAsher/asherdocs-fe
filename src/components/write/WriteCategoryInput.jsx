import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
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
        <CategoryInput defaultValue='0' name='category' onChange={handleChange} value={value}>
            <option value='0' hidden disabled>
                (선택안함)
            </option>
            {data?.map((category, idx) => {
                return (
                    <option key={idx} value={category.id}>
                        {category.categoryName}
                    </option>
                );
            })}
        </CategoryInput>
    );
}

const CategoryInput = styled.select`
    width: 50%;
    outline: none;
    border-radius: 5px;
    border: 1px solid ${oc.gray[6]};
    padding: 1rem;
    font-size: 1.125rem;
    margin-bottom: 3rem;
`;

export default WriteCategoryInput;
