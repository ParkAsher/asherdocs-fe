import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import { Login, Signup, Write } from './pages';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Header />
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/write' element={<Write />} />
            </Routes>
        </QueryClientProvider>
    );
}

export default App;
