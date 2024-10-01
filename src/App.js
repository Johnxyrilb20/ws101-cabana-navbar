import Navbar from './Navbar/navbar'
import Contact from './pages/Contact'
import Home from './pages/Home'
import About from './pages/About'
import { Routes, Route } from 'react-router-dom'

function App() {
    let Component
    
    return (
        <>
        <Navbar />
        <div className='container'>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
        </div>
        </>
    )

}
export default App;
