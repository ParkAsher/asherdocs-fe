import { useInfiniteQuery } from '@tanstack/react-query';
import React from 'react';
import { getComments } from '../../apis/comment.api';
import { useInView } from 'react-intersection-observer';
import CommentItem from './CommentItem';

const COMMENTS_PER_PAGE = 5;

function CommentList({ articleId }) {
    const {
        data: comments,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
    } = useInfiniteQuery({
        queryKey: ['comment', articleId],
        initialPageParam: 1,
        queryFn: ({ pageParam }) => getComments({ pageParam, articleId }),
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
            const nextPage = lastPageParam + 1;
            return lastPage.length === COMMENTS_PER_PAGE ? nextPage : undefined;
        },
        select: ({ pages }) => pages.flat(),
    });

    const { ref } = useInView({
        threshold: 1,
        onChange: (inView) => {
            if (inView && hasNextPage && !isFetchingNextPage) {
                fetchNextPage();
            }
        },
    });

    if (isLoading) {
        return;
    }

    const commentList = Array.isArray(comments) ? comments : [];

    return (
        <div className='w-full mt-8'>
            {commentList.map((comment, idx) => {
                return <CommentItem ref={ref} key={comment.id} comment={comment} />;
            })}
        </div>
    );
}

export default CommentList;
