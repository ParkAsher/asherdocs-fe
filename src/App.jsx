import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import { Login, Post, Signup, Write, Main, Edit, Notification } from './pages';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Search from './pages/Search';
import { HelmetProvider } from 'react-helmet-async';
import Meta from './components/meta/Meta';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            gcTime: 1000 * 60 * 5, // 5분
            staleTime: 1000 * 60 * 3, // 3분
            refetchOnWindowFocus: false,
        },
    },
});

function App() {
    const title = 'AsherDocs';
    const description = '개발자 Asher의 블로그입니다';
    const keywords = 'Asher, AsherDocs, 개발자, 개발, 블로그, Node.js, NestJS, React, NextJS, 일상';
    const imgSrc = '/logo.png';
    const url = 'https://asherdocs.com';
    const type = 'website';

    return (
        <HelmetProvider>
            <Meta
                title={title}
                description={description}
                keywords={keywords}
                imgSrc={imgSrc}
                url={url}
                type={type}
            />
            <QueryClientProvider client={queryClient}>
                <Header />
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/write' element={<Write />} />
                    <Route path='/article/:slug' element={<Post />} />
                    <Route path='/edit/:slug' element={<Edit />} />
                    <Route path='/search' element={<Search />} />
                    <Route path='/notification' element={<Notification />} />
                </Routes>
            </QueryClientProvider>
        </HelmetProvider>
    );
}

export default App;
