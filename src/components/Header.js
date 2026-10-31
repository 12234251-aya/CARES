
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const closeMenu = () => setMenuOpen(false);

    const linkStyle = ({ isActive }) => ({
        textDecoration: "none",
        color: isActive ? "#ffffff" : "#514263",
        backgroundColor: isActive ? "#8152b5" : "transparent",
        padding: "10px 15px",
        borderRadius: "10px",
        fontWeight: isActive ? "600" : "500",
        fontSize: "15px",
        transition: "0.2s ease",
        display: "block",
    });

    const actionStyle = ({ isActive }) => ({
        textDecoration: "none",
        color: isActive ? "#ffffff" : "#7042a5",
        backgroundColor: isActive ? "#8152b5" : "transparent",
        padding: "11px 17px",
        borderRadius: "10px",
        fontWeight: "600",
        whiteSpace: "nowrap",
        display: "block",
        textAlign: "center",
    });

    return (
        <header className="cares-header">
            <NavLink to="/Home" className="cares-logo" onClick={closeMenu}>
                <span className="cares-heart">♥</span> CARES
            </NavLink>

            <button
                type="button"
                className="cares-menu-toggle"
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={menuOpen}
                aria-controls="cares-navigation"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            <div
                id="cares-navigation"
                className={`cares-navigation ${menuOpen ? "is-open" : ""}`}
            >
                <nav className="cares-nav-links">
                    <NavLink
                        to="/Home"
                        style={({ isActive }) => ({
                            ...linkStyle({
                                isActive:
                                    isActive || location.pathname === "/",
                            }),
                        })}
                        onClick={closeMenu}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/About"
                        style={linkStyle}
                        onClick={closeMenu}
                    >
                        About Us
                    </NavLink>

                    <NavLink
                        to="/Contact"
                        style={linkStyle}
                        onClick={closeMenu}
                    >
                        Contact Us
                    </NavLink>

                    <NavLink
                        to="/ChooseRole"
                        style={linkStyle}
                        onClick={closeMenu}
                    >
                        Choose Role
                    </NavLink>
                </nav>

                <div className="cares-actions">
                    <NavLink
                        to="/Login"
                        style={actionStyle}
                        onClick={closeMenu}
                    >
                        Log in
                    </NavLink>

                    <NavLink
                        to="/SignUp"
                        style={actionStyle}
                        onClick={closeMenu}
                    >
                        Sign up
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;
