import React from 'react';
import ResponsiveContainer from '../components/common/ResponsiveContainer';
import PostListContainer from '../components/post/PostListContainer';
import PostListWrap from '../components/post/PostListWrap';

function Main() {
    return (
        <ResponsiveContainer>
            <PostListContainer>
                <PostListWrap />
            </PostListContainer>
        </ResponsiveContainer>
    );
}

export default Main;
