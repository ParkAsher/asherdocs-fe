import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import { getArticle } from '../apis/article.api';
import EditForm from '../components/edit/EditForm';

function Edit() {
    const { id } = useParams();

    const { data: article, isLoading } = useQuery({
        queryKey: ['article', id],
        queryFn: () => getArticle(id),
    });

    if (isLoading) return;

    return <EditForm article={article} />;
}

export default Edit;
