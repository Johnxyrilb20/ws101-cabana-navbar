import Navbar from './Navbar/navbar'
import Contact from './pages/Contact'
import Home from './pages/Home'
import About from './pages/About'

function App() {
    let Component
    switch (window.location.pathname) {
        case "/":
            Component = <App />
            break
        case "/home":
            Component = <Home />
            break
        case "/about":
            Component = <About />
            break
        case "/contact":
            Component = <Contact />
            break
    }
    return (
        <>
        <Navbar />
        <div className='container'></div>
        {Component}
        </>
    )

}
export default App;
