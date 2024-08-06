import React from 'react';
import styled from 'styled-components';

function PostListContainer({ children }) {
    return <StyledPostListContainer>{children}</StyledPostListContainer>;
}

const StyledPostListContainer = styled.div`
    width: 800px;
    margin: 0 auto;
`;

export default PostListContainer;
