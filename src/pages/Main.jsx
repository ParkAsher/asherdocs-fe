import React from 'react';
import PostListWrap from '../components/post/PostListWrap';
import SearchForm from '../components/search/SearchForm';
import Intro from '../components/intro/Intro';

function Main() {
    return (
        <>
            <Intro />
            <SearchForm />
            <div className='w-full border-t border-solid border-gray-300'>
                <div className='mx-auto my-0 w-[800px] xl:w-full'>
                    <PostListWrap />
                </div>
            </div>
        </>
    );
}

export default Main;
