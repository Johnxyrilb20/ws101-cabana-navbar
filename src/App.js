import './App.css';
// import Navbar from './components/Navbar/navbar';
// import Hero from './components/Hero/hero';
// import About from './components/About/about';
// import Contact from './components/Contact/contact';
// import Footer from './components/Footer/footer';
// import HandlingFunction from './components/HandlingFunction';
// import HandlingClass from './components/HandlingClass';
// import IfCondition from './components/IfConditions';
//import Biodata from './components/Biodata/biodata';
import TodoList from './components/todolist/todolist';
//import todolist from './components/todolist/todolist';
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
