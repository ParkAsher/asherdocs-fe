import React from 'react';
import PostCategoryList from './PostCategoryList';
import PostList from './PostList';
import qs from 'qs';
import { useLocation } from 'react-router-dom';

function PostListWrap() {
    const location = useLocation();
    const { category } = qs.parse(location.search, { ignoreQueryPrefix: true });

    return (
        <div className='w-full h-fit relative mt-8'>
            <PostCategoryList category={category} />
            <PostList category={category} />
        </div>
    );
}

export default PostListWrap;
