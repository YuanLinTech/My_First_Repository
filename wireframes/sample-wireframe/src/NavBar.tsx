import './NavBar.css';

export default function NavBar(){
    return(
        <div>
            <ul>
                <li><img src="/company_logo.png"  alt="Company logo"/></li>
                <li><a href="#inbox" id="inbox">Inbox</a></li>
                <li><a href="#orders">Orders</a></li>
                <li><a href="#files">Files</a></li>
                <li><a href="#budgets">Budgets</a></li>
            </ul>
        </div>
    );
}