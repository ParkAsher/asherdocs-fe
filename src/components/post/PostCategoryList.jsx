import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function PostCategoryList({ categories }) {
    console.log(categories);

    return (
        <CategoryListBlock>
            <CategoryListTitle>카테고리</CategoryListTitle>
            <ul>
                <CategoryList>
                    <Link to={`/`}>전체보기</Link>
                </CategoryList>
                {categories?.map((category, idx) => {
                    return (
                        <CategoryList key={category.id}>
                            <Link to={`/?category=${category.categoryName}`}>
                                {category.categoryName} ({category.contentsCount})
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
`;

export default PostCategoryList;
