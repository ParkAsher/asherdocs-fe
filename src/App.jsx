import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import { Login, Post, Signup, Write, Main, Edit } from './pages';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Search from './pages/Search';
import { Helmet, HelmetProvider } from 'react-helmet-async';

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
    return (
        <HelmetProvider>
            <Helmet>
                <title>AsherDocs</title>
                <meta name='description' content='개발자 Asher의 블로그' />

                <link rel='icon' href='/favicon.ico' type='image/x-icon' />
                <link rel='icon' href='/favicon-32x32.png' sizes='32x32' />
                <link rel='icon' href='/favicon-16x16.png' sizes='16x16' />

                <meta property='og:type' content='website' />
                <meta property='og:title' content='AsherDocs' />
                <meta property='og:description' content='개발자 Asher의 블로그.' />
                <meta property='og:image' content='https://asherdocs.com/logo.png' />
                <meta property='og:image:width' content='1200' />
                <meta property='og:image:height' content='630' />
                <meta property='og:url' content='https://asherdocs.com' />
            </Helmet>
            <QueryClientProvider client={queryClient}>
                <Header />
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/write' element={<Write />} />
                    <Route path='/article/:id' element={<Post />} />
                    <Route path='/edit/:id' element={<Edit />} />
                    <Route path='/search' element={<Search />} />
                </Routes>
            </QueryClientProvider>
        </HelmetProvider>
    );
}

export default App;
