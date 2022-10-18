const NavbarItem = ({text,active}) =>{
    const classList = ['navbar__item']
    if (active){
        classList.push('navbar__item--active')
    }
    return (
        <a className = {classList.join(' ')} href = "/">
            {text}
        </a>
    )
}

export default NavbarItem

const main = () =>{
    greeting('Alice');
    greeting('Bob');
    greeting('David');
}

const greeting = (name) =>{
    console.log(`Hi, ${name}`);
    console.log("Nice to meet you");
    console.log('===')
}