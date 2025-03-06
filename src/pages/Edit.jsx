import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import { getArticle } from '../apis/article.api';
import EditForm from '../components/edit/EditForm';

function Edit() {
    const { slug } = useParams();

    const { data: article, isLoading } = useQuery({
        queryKey: ['article', slug],
        queryFn: () => getArticle(slug),
    });

    if (isLoading) return;

    return <EditForm article={article} />;
}

export default Edit;
