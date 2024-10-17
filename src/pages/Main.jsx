import React from 'react';
import ResponsiveContainer from '../components/common/ResponsiveContainer';
import PostListContainer from '../components/post/PostListContainer';
import PostListWrap from '../components/post/PostListWrap';
import SearchForm from '../components/search/SearchForm';

function Main() {
    return (
        <div>
            <SearchForm />
            <ResponsiveContainer>
                <PostListContainer>
                    <PostListWrap />
                </PostListContainer>
            </ResponsiveContainer>
        </div>
    );
}

export default Main;
