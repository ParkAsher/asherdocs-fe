import React from 'react';
import { Helmet } from 'react-helmet-async';

function Meta(props) {
    const { title, description, keywords, imgSrc, url, type } = props;

    return (
        <Helmet>
            <title>{title}</title>

            <meta name='title' content={title} />
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />

            <meta property='og:title' content={title} />
            <meta property='og:description' content={description} />
            <meta property='og:image' content={imgSrc} />
            <meta property='og:url' content={url} />
            <meta property='og:type' content={type} />

            {/* google-site-verification */}
            <meta
                name='google-site-verification'
                content='72D6v2CmetIWVSaBldbMskBzvw-Tj9t1edzVg6sGGI0'
            />

            <link rel='icon' href='/favicon.ico' type='image/x-icon' />
            <link rel='icon' href='/favicon-32x32.png' sizes='32x32' />
            <link rel='icon' href='/favicon-16x16.png' sizes='16x16' />
        </Helmet>
    );
}

export default Meta;
