import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Header />
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </QueryClientProvider>
    );
}

export default App;
