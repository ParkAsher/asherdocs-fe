import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </>
    );
}

export default App;
