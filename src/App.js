import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './asset/scss/index.scss'
import Contact from './pages/Contact';





function App() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Contact/>}/>
                </Routes>
            </BrowserRouter>
        );
}

export default App;
