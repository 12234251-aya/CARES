
import { useNavigate } from "react-router-dom";

const ChooseRole = () => {
    const navigate = useNavigate();

    const roles = [
        {
            title: "Donor",
            description:
                "Share clothes, food, medicine, and other donations with people in need.",
            icon: "♥",
            path: "/DonorDashboard",
        },
        {
            title: "Beneficiary",
            description:
                "Request the help and essential items you or your family need.",
            icon: "♡",
            path: "/BeneficiaryDashboard",
        },
        {
            title: "Volunteer",
            description:
                "Help collect, deliver, and distribute donations to the community.",
            icon: "✋",
            path: "/VolunteerDashboard",
        },
    ];

    return (
        <div
            style={{
                minHeight: "calc(100vh - 180px)",
                padding: "55px 7%",
                boxSizing: "border-box",
                background: "linear-gradient(135deg, #fbf8ff, #f3eaff)",
                fontFamily: "Arial, sans-serif",
                color: "#302044",
            }}
        >
            <div style={{ textAlign: "center", marginBottom: "45px" }}>
                <span
                    style={{
                        display: "inline-block",
                        padding: "11px 22px",
                        borderRadius: "30px",
                        backgroundColor: "#eadfff",
                        color: "#8050b5",
                        fontSize: "14px",
                        fontWeight: "bold",
                        letterSpacing: "1px",
                    }}
                >
                    WELCOME TO CARES
                </span>

                <h1
                    style={{
                        fontSize: "clamp(30px, 4vw, 44px)",
                        margin: "22px 0 12px",
                    }}
                >
                    How Would You Like to{" "}
                    <span style={{ color: "#8653bd" }}>Help?</span>
                </h1>

                <p
                    style={{
                        color: "#665773",
                        fontSize: "17px",
                        lineHeight: "1.7",
                    }}
                >
                    Choose your role to continue.
                </p>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit, minmax(230px, 1fr))",
                    gap: "25px",
                    maxWidth: "1100px",
                    margin: "0 auto",
                }}
            >
                {roles.map((role) => (
                    <div
                        key={role.title}
                        style={{
                            backgroundColor: "#ffffff",
                            border: "1px solid #eadcff",
                            borderRadius: "22px",
                            padding: "30px 24px",
                            textAlign: "center",
                            boxShadow:
                                "0 10px 30px rgba(100, 60, 150, 0.08)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                width: "70px",
                                height: "70px",
                                borderRadius: "20px",
                                backgroundColor: "#f0e6ff",
                                color: "#8653bd",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "35px",
                                marginBottom: "20px",
                            }}
                        >
                            {role.icon}
                        </div>

                        <h2 style={{ margin: "0 0 12px", fontSize: "23px" }}>
                            {role.title}
                        </h2>

                        <p
                            style={{
                                color: "#665773",
                                lineHeight: "1.7",
                                fontSize: "15px",
                                flexGrow: 1,
                                marginBottom: "25px",
                            }}
                        >
                            {role.description}
                        </p>

                        <button
                            type="button"
                            onClick={() => {
                                sessionStorage.setItem("caresRole", role.title);

                                const isLoggedIn =
                                    sessionStorage.getItem("caresLoggedIn") === "true";

                                if (isLoggedIn) {
                                    navigate(role.path);
                                } else {
                                    navigate("/SignUp");
                                }
                            }}
                            style={{
                                width: "100%",
                                padding: "13px",
                                backgroundColor: "#8653bd",
                                color: "#ffffff",
                                border: "none",
                                borderRadius: "11px",
                                fontSize: "16px",
                                fontWeight: "bold",
                                cursor: "pointer",
                            }}
                        >
                            Continue as {role.title}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChooseRole;
