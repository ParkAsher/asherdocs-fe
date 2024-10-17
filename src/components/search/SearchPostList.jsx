import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getSearchArticles } from '../../apis/article.api';
import PostItem from './../post/PostItem';
import { useInView } from 'react-intersection-observer';

const ARTICLES_PER_PAGE = 5;

function SearchPostList({ keyword }) {
    const {
        data: articles,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
    } = useInfiniteQuery({
        queryKey: ['articles', keyword],
        initialPageParam: 1,
        queryFn: ({ pageParam }) => getSearchArticles({ pageParam, keyword }),
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
            const nextPage = lastPageParam + 1;
            return lastPage.length === ARTICLES_PER_PAGE ? nextPage : undefined;
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

    return (
        <>
            {articles.length > 0 ? (
                articles?.map((article, idx) => {
                    return <PostItem ref={ref} key={article.id} article={article} />;
                })
            ) : (
                <div className='w-full flex items-center justify-center mt-12 text-3xl text-blue-500'>
                    <div>게시글이 존재하지 않습니다.</div>
                </div>
            )}
        </>
    );
}

export default SearchPostList;
