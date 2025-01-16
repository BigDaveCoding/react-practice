
function Header() {

    const name = 'David Smith'
    const role = 'Software Engineer'
    const date = new Date().getUTCDate() + '/' + new Date().getUTCMonth() + '/' + new Date().getUTCFullYear()
    const now = new Date();
    const hours = now.getUTCHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const time = `${hours}:${minutes}`;
    

    return (
        <header>
            <div className="header_grid">
                <div className="date_time header_grid_item">
                    <p>{date}</p>
                    <p>{time}</p>
                </div>
                <div className="page_title header_grid_item">
                    <h1>{name.toUpperCase()}</h1>
                    <p>{role.toUpperCase()}</p>
                </div>
                <nav className="header_grid_item">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;