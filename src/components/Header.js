
import { NavLink } from "react-router-dom";

const Header = () => {
    const linkStyle = ({ isActive }) => ({
        textDecoration: "none",
        color: isActive ? "#ffffff" : "#514263",
        backgroundColor: isActive ? "#8152b5" : "transparent",
        padding: "10px 15px",
        borderRadius: "10px",
        fontWeight: isActive ? "600" : "500",
        fontSize: "15px",
        transition: "0.2s ease",
    });

    const actionStyle = ({ isActive }) => ({
        textDecoration: "none",
        color: isActive ? "#ffffff" : "#7042a5",
        backgroundColor: isActive ? "#8152b5" : "transparent",
        padding: "11px 17px",
        borderRadius: "10px",
        fontWeight: "600",
        whiteSpace: "nowrap",
    });

    return (
        <header style={styles.header}>
            <NavLink to="/Home" style={styles.logo}>
                <span style={styles.heart}>♥</span> CARES
            </NavLink>

            <nav style={styles.nav}>
                <NavLink
                    to="/Home"
                    end={false}
                    style={({ isActive }) =>
                        linkStyle({
                            isActive:
                                isActive ||
                                window.location.pathname === "/",
                        })
                    }
                >
                    Home
                </NavLink>

                <NavLink to="/About" style={linkStyle}>
                    About Us
                </NavLink>

                <NavLink to="/Contact" style={linkStyle}>
                    Contact Us
                </NavLink>
            </nav>

            <div style={styles.actions}>
                <NavLink to="/Login" style={actionStyle}>
                    Log in
                </NavLink>

                <NavLink to="/SignUp" style={actionStyle}>
                    Sign up
                </NavLink>
            </div>
        </header>
    );
};

const styles = {
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "15px",
        padding: "16px 5%",
        background: "linear-gradient(135deg, #eee2ff, #e5d2ff)",
        borderBottom: "1px solid #d8c1f3",
        boxShadow: "0 3px 15px rgba(75, 45, 105, 0.08)",
        position: "relative",
        zIndex: 10,
    },

    logo: {
        textDecoration: "none",
        color: "#302044",
        fontSize: "24px",
        fontWeight: "800",
        letterSpacing: "1px",
        whiteSpace: "nowrap",
    },

    heart: {
        color: "#8152b5",
        marginRight: "5px",
    },

    nav: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "5px",
    },

    actions: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
    },
};

export default Header;
