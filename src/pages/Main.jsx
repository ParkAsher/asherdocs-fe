import React from 'react';
import PostListWrap from '../components/post/PostListWrap';
import SearchForm from '../components/search/SearchForm';
import Intro from '../components/intro/Intro';

function Main() {
    return (
        <>
            <Intro />
            <SearchForm />
            <PostListWrap />
        </>
    );
}

export default Main;
