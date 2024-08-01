import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import { Login, Signup, Write } from './pages';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Main from './pages/Main';

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
            </Routes>
        </QueryClientProvider>
    );
}

export default App;
