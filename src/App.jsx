import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import { Login, Post, Signup, Write, Main, Edit } from './pages';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
        <QueryClientProvider client={queryClient}>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/write' element={<Write />} />
                <Route path='/article/:id' element={<Post />} />
                <Route path='/edit/:id' element={<Edit />} />
            </Routes>
        </QueryClientProvider>
    );
}

export default App;
