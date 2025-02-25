import React from 'react';
import PostContent from '../components/post/PostContent';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getArticle } from '../apis/article.api';
import Meta from '../components/meta/Meta';
import { stripHtmlTags } from '../utils/stripHtmlTag';

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
        <>
            <Meta
                title={`${article.title} | MINSSEUG`}
                description={`${stripHtmlTags(article.content).slice(0, 150)}`}
                keywords={`민쓱, minsseug, 개발, 개발자, 블로그, ${article.category.categoryName}`}
                imgSrc={`${article.thumbnail}`}
                url={`https://asherdocs.com/article/${article.id}`}
            />
            <div className='w-full border-t border-solid border-gray-200'>
                <div className='mx-auto my-0 w-[800px] lg:w-full lg:px-2'>
                    <PostContent article={article} />
                </div>
            </div>
        </>
    );
}

export default Post;
