import Header from './components/Header'
import Page from './components/Page'
import Logo from './components/Logo/Logo'
import Navbar from './components/Navbar'
import './Header.css'
import './App.js.js'

const App = () => (
    <header className = "nav">
        <div className = "nav__left">
            <Logo/>
        </div>
        <div className="nav__right">
            <Navbar/>
        </div>
    </header>
)

export default Header
export default App

Const src = 