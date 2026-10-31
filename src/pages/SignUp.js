
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (
            !fullName.trim() ||
            !email.trim() ||
            !password ||
            !confirmPassword
        ) {
            setMessageType("error");
            setMessage("Please fill in all fields.");
            return;
        }

        if (password !== confirmPassword) {
            setMessageType("error");
            setMessage("Passwords do not match. Please try again.");
            return;
        }

        if (password.length < 8) {
            setMessageType("error");
            setMessage("Password must be at least 8 characters long.");
            return;
        }

        // Complete registration
        sessionStorage.setItem("caresLoggedIn", "true");

        // Get the role selected before registration
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

                <h1 style={styles.title}>Create an account</h1>

                <p style={styles.subtitle}>
                    Join our community and help make a difference.
                </p>

                <form onSubmit={handleSubmit}>
                    <label style={styles.label} htmlFor="fullName">
                        Full Name
                    </label>

                    <input
                        id="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        value={fullName}
                        onChange={(event) => setFullName(event.target.value)}
                        style={styles.input}
                        autoComplete="name"
                    />

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
                        autoComplete="email"
                    />

                    <label style={styles.label} htmlFor="password">
                        Password
                    </label>

                    <input
                        id="password"
                        type="password"
                        placeholder="At least 8 characters"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        style={styles.input}
                        autoComplete="new-password"
                    />

                    <label style={styles.label} htmlFor="confirmPassword">
                        Confirm Password
                    </label>

                    <input
                        id="confirmPassword"
                        type="password"
                        placeholder="Enter your password again"
                        value={confirmPassword}
                        onChange={(event) =>
                            setConfirmPassword(event.target.value)
                        }
                        style={styles.input}
                        autoComplete="new-password"
                    />

                    <button type="submit" style={styles.button}>
                        Create Account
                    </button>

                    {message && (
                        <p
                            style={{
                                ...styles.message,
                                ...(messageType === "error"
                                    ? styles.errorMessage
                                    : styles.successMessage),
                            }}
                            role="status"
                        >
                            {message}
                        </p>
                    )}
                </form>

                <p style={styles.footerText}>
                    Already have an account?{" "}
                    <Link to="/Login" style={styles.link}>
                        Log in
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
        padding: "40px 20px",
        boxSizing: "border-box",
    },

    card: {
        width: "100%",
        maxWidth: "480px",
        backgroundColor: "#ffffff",
        padding: "35px",
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
        marginBottom: "20px",
    },

    title: {
        color: "#302044",
        textAlign: "center",
        fontSize: "29px",
        margin: "0 0 10px",
    },

    subtitle: {
        color: "#71677b",
        textAlign: "center",
        fontSize: "15px",
        lineHeight: "1.6",
        marginBottom: "24px",
    },

    label: {
        display: "block",
        color: "#40334f",
        fontWeight: "600",
        fontSize: "14px",
        marginBottom: "7px",
        marginTop: "15px",
    },

    input: {
        width: "100%",
        padding: "12px 14px",
        border: "1px solid #ded2ed",
        borderRadius: "10px",
        fontSize: "15px",
        boxSizing: "border-box",
        outlineColor: "#8152b5",
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
        padding: "12px",
        borderRadius: "8px",
        fontSize: "14px",
        lineHeight: "1.5",
        overflowWrap: "anywhere",
    },

    errorMessage: {
        color: "#a12636",
        backgroundColor: "#fff0f1",
    },

    successMessage: {
        color: "#276749",
        backgroundColor: "#edf9f1",
    },

    footerText: {
        textAlign: "center",
        color: "#71677b",
        fontSize: "14px",
        marginTop: "22px",
    },

    link: {
        color: "#8152b5",
        fontWeight: "600",
        textDecoration: "none",
    },
};

export default SignUp;
