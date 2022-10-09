import NavbarItem from './components/NavbarItem'
import './Navbar.css'

const Navbar = () => {
    <div className = "navbar">
        {/* <a className = "navbar__item" href = "HOME">Home</a>
        <a className = "navbar__item" href = "RESUME">Resume</a>
        <a className = "navbar__item" href = "SERVICES">Services</a>
        <a className = "navbar__item" href = "BLOG">Blog</a>
        <a className = "navbar__item" href = "CONTACT">Contact</a> */}
        <NavbarItem text = "Home" active = {true}/>
        <NavbarItem text = "Resume" active = {false}/>
        <NavbarItem text = "Services" active = {false}/>
        <NavbarItem text = "Blog" active = {false}/>
        <NavbarItem text = "Contact" active = {false}/>

    </div>
}

export default Navbar