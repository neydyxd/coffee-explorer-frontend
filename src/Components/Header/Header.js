import logo from "../../images/logo_short.png"

import { NavLink, Link } from "react-router-dom";

function Header() {
    return(
        <header className="header">
            <div className="header__container">
                <Link to="/">
                    <img className="header__logo" src={logo} alt="логотип" />
                </Link>
                <div className="header__buttons">
                    <NavLink exact to="/ttk" className={({ isActive }) =>
                    `button ${
                      isActive ? "header__button_active" : "header__button"
                    }`
                  }>ТТК</NavLink>
                    <NavLink className="header__button">Непереносимости</NavLink>
                    <NavLink className="header__button">Эспрессо</NavLink>
                </div>
            </div>
        </header>
    );

}

export default Header;