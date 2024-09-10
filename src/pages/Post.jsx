import React from 'react';
import PostContent from '../components/post/PostContent';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getArticle } from '../apis/article.api';
import ResponsiveContainer from '../components/common/ResponsiveContainer';
import PostListContainer from '../components/post/PostListContainer';

function Post() {
    const { id } = useParams();

    const { data: article, isLoading } = useQuery({
        queryKey: ['article', id],
        queryFn: () => getArticle(id),
    });

    if (isLoading) {
        return;
    }

    return (
        <ResponsiveContainer>
            <PostListContainer>
                <PostContent article={article} />
            </PostListContainer>
        </ResponsiveContainer>
    );
}

export default Post;
