import { useInfiniteQuery } from '@tanstack/react-query';
import React from 'react';
import { getArticles } from '../../apis/article.api';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import oc from 'open-color';

const ARTICLES_PER_PAGE = 5;

function PostList({ category }) {
    const {
        data: articles,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
    } = useInfiniteQuery({
        queryKey: ['articles', category],
        initialPageParam: 1,
        queryFn: ({ pageParam }) => getArticles({ pageParam, category }),
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
                    console.log(article);
                    return (
                        <Item ref={ref} key={article.id}>
                            <h3>{article.title}</h3>
                        </Item>
                    );
                })
            ) : (
                <EmptyList>
                    <div>게시글이 존재하지 않습니다.</div>
                </EmptyList>
            )}
        </>
    );
}

const EmptyList = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;

    font-size: 2rem;
    color: ${oc.teal[5]};
`;

const Item = styled.div`
    width: 100%;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    line-height: 1.5;
    border-bottom: 1px solid ${oc.gray[1]};
`;

export default PostList;
