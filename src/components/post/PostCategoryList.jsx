import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getCategories } from '../../apis/category.api';
import { useQuery } from '@tanstack/react-query';
import oc from 'open-color';

function PostCategoryList({ category: categoryParam }) {
    // 카테고리 리스트
    const { data: categories, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: getCategories,
    });

    console.log(categories);

    if (isLoading) return;

    return (
        <CategoryListBlock>
            <CategoryListTitle>카테고리</CategoryListTitle>
            <ul>
                <CategoryList $active={categoryParam === undefined}>
                    <Link to={`/`}>전체보기</Link>
                </CategoryList>
                {categories &&
                    categories.map((category, idx) => {
                        const { id, categoryName, contentsCount } = category;
                        return (
                            <CategoryList $active={categoryParam === categoryName} key={id}>
                                <Link to={`/?category=${categoryName}`}>
                                    {categoryName} ({contentsCount})
                                </Link>
                            </CategoryList>
                        );
                    })}
            </ul>
        </CategoryListBlock>
    );
}

const CategoryListBlock = styled.div`
    position: absolute;
    top: 30px;
    left: -200px;
    width: 180px;

    border-radius: 5px;
    background: white;
`;

const CategoryListTitle = styled.div`
    font-weight: bold;
    font-size: 1.125rem;
    line-height: 1.5;
    padding-bottom: 8px;
    margin-bottom: 16px;
    border-bottom: 1px solid black;
`;

const CategoryList = styled.li`
    font-size: 1rem;
    line-height: 1.5;

    a {
        font-weight: ${(props) => (props.$active ? 'bold' : 'normal')};
        color: ${(props) => (props.$active ? oc.teal[5] : 'black')};
    }
`;

export default PostCategoryList;
