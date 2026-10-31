
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!email.trim() || !password) {
            setMessage("Please enter your email and password.");
            return;
        }

        // Demo login only: real account verification needs the backend.
        sessionStorage.setItem("caresLoggedIn", "true");

        // Get the previously selected role
        const selectedRole = sessionStorage.getItem("caresRole");

        // Navigate according to the selected role
        if (selectedRole === "Donor") {
            navigate("/DonorDashboard");
        } else if (selectedRole === "Beneficiary") {
            navigate("/BeneficiaryDashboard");
        } else if (selectedRole === "Volunteer") {
            navigate("/VolunteerDashboard");
        } else {
            navigate("/ChooseRole");
        }
    };

    return (
        <div style={styles.page}>
            <div style={styles.card}>
                <div style={styles.logo}>♥ CARES</div>

                <h1 style={styles.title}>Welcome back!</h1>

                <p style={styles.subtitle}>
                    Log in to continue helping your community.
                </p>

                <form onSubmit={handleSubmit}>
                    <label style={styles.label} htmlFor="email">
                        Email address
                    </label>

                    <input
                        id="email"
                        type="email"
                        placeholder="name@email.com"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        style={styles.input}
                    />

                    <label style={styles.label} htmlFor="password">
                        Password
                    </label>

                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        style={styles.input}
                    />

                    <div style={styles.forgot}>
                        <Link to="/Login" style={styles.link}>
                            Forgot password?
                        </Link>
                    </div>

                    <button type="submit" style={styles.button}>
                        Log in
                    </button>

                    {message && (
                        <p style={styles.message} role="status">
                            {message}
                        </p>
                    )}
                </form>

                <p style={styles.footerText}>
                    Don't have an account?{" "}
                    <Link to="/SignUp" style={styles.link}>
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

const styles = {
    page: {
        minHeight: "75vh",
        background: "linear-gradient(135deg, #fbf8ff, #f0e7ff)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "45px 20px",
        boxSizing: "border-box",
    },

    card: {
        width: "100%",
        maxWidth: "440px",
        backgroundColor: "#ffffff",
        padding: "38px",
        borderRadius: "22px",
        boxShadow: "0 12px 35px rgba(75, 45, 105, 0.10)",
        boxSizing: "border-box",
    },

    logo: {
        textAlign: "center",
        color: "#8152b5",
        fontSize: "24px",
        fontWeight: "800",
        letterSpacing: "1px",
        marginBottom: "25px",
    },

    title: {
        color: "#302044",
        textAlign: "center",
        fontSize: "30px",
        margin: "0 0 10px",
    },

    subtitle: {
        color: "#71677b",
        textAlign: "center",
        fontSize: "15px",
        lineHeight: "1.6",
        marginBottom: "30px",
    },

    label: {
        display: "block",
        color: "#40334f",
        fontWeight: "600",
        fontSize: "14px",
        marginBottom: "8px",
        marginTop: "18px",
    },

    input: {
        width: "100%",
        padding: "13px 14px",
        border: "1px solid #ded2ed",
        borderRadius: "10px",
        fontSize: "15px",
        boxSizing: "border-box",
        outlineColor: "#8152b5",
    },

    forgot: {
        textAlign: "right",
        marginTop: "12px",
    },

    link: {
        color: "#8152b5",
        fontWeight: "600",
        textDecoration: "none",
    },

    button: {
        width: "100%",
        padding: "14px",
        marginTop: "24px",
        backgroundColor: "#8152b5",
        color: "#ffffff",
        border: "none",
        borderRadius: "10px",
        fontSize: "16px",
        fontWeight: "600",
        cursor: "pointer",
    },

    message: {
        color: "#7042a5",
        backgroundColor: "#f5efff",
        padding: "12px",
        borderRadius: "8px",
        fontSize: "14px",
        lineHeight: "1.5",
        overflowWrap: "anywhere",
    },

    footerText: {
        textAlign: "center",
        color: "#71677b",
        fontSize: "14px",
        marginTop: "25px",
    },
};

export default Login;
