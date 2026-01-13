import logo from '../logo.svg'; 

function Nav() {
    return (
        // .container sınıfını ekliyoruz ki ortalansın
        <nav className="container"> 
            <img src={logo} alt="Little Lemon Logo" style={{height: "50px"}} /> {/* Logo boyutu ayarı */}
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;