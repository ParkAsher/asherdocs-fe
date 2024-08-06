import React from 'react';
import styled from 'styled-components';
import PostCategoryList from './PostCategoryList';
import PostList from './PostList';
import qs from 'qs';
import { useLocation } from 'react-router-dom';

function PostListWrap() {
    const location = useLocation();
    const { category } = qs.parse(location.search, { ignoreQueryPrefix: true });

    return (
        <PostListBlock>
            <PostCategoryList category={category} />
            <PostList category={category} />
        </PostListBlock>
    );
}

const PostListBlock = styled.div`
    width: 100%;
    padding-top: 30px;
    position: relative;
`;

export default PostListWrap;
