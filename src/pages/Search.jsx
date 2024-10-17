import React from 'react';
import ResponsiveContainer from '../components/common/ResponsiveContainer';
import PostListContainer from '../components/post/PostListContainer';
import SearchForm from '../components/search/SearchForm';
import SearchListWrap from '../components/search/SearchListWrap';

function Search() {
    return (
        <div>
            <SearchForm />
            <ResponsiveContainer>
                <PostListContainer>
                    <SearchListWrap />
                </PostListContainer>
            </ResponsiveContainer>
        </div>
    );
}

export default Search;
