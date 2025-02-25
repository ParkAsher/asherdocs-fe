import React from 'react';
import PostCategoryList from './PostCategoryList';
import PostList from './PostList';
import qs from 'qs';
import { useLocation } from 'react-router-dom';

function PostListWrap() {
    const location = useLocation();
    const { category } = qs.parse(location.search, { ignoreQueryPrefix: true });

    return (
        <div className='w-full min-h-screen bg-[#eeeeee] py-4'>
            <div className='mx-auto my-0 w-[800px] lg:w-full'>
                <div className='w-full min-h-fit relative xl:mt-0'>
                    <PostCategoryList category={category} />
                    <PostList category={category} />
                </div>
            </div>
        </div>
    );
}

export default PostListWrap;
