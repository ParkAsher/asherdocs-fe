import React from 'react';
import ResponsiveContainer from '../components/common/ResponsiveContainer';
import PostListContainer from '../components/post/PostListContainer';
import PostListWrap from '../components/post/PostListWrap';
import SearchForm from '../components/search/SearchForm';
import Intro from '../components/intro/Intro';

function Main() {
    return (
        <>
            <Intro />
            <SearchForm />
            <ResponsiveContainer>
                <PostListContainer>
                    <PostListWrap />
                </PostListContainer>
            </ResponsiveContainer>
        </>
    );
}

export default Main;
