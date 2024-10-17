import React from 'react';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import SearchPostList from './SearchPostList';
import PostCategoryList from '../post/PostCategoryList';

function SearchListWrap() {
    const location = useLocation();
    const { keyword } = qs.parse(location.search, { ignoreQueryPrefix: true });

    return (
        <div className='w-full pt-8 relative'>
            <PostCategoryList />
            <SearchPostList keyword={keyword} />
        </div>
    );
}

export default SearchListWrap;
