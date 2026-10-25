
import { useNavigate } from "react-router-dom";

const BeneficiaryDashboard = () => {
    const navigate = useNavigate();

    const sidebarLinks = [
        { label: "Dashboard", icon: "⌂", path: "/BeneficiaryDashboard" },
        { label: "Request Aid", icon: "♡", path: "/Beneficiary" },
        { label: "My Requests", icon: "▤", path: "/MyRequests" },
        { label: "Volunteer Connection", icon: "↗", path: "/VolunteerConnection" },
        { label: "Profile", icon: "○", path: "/BeneficiaryProfile" },
    ];

    const summaryCards = [
        {
            title: "My Requests",
            value: "0",
            description: "Requests submitted",
            icon: "▤",
        },
        {
            title: "Pending Requests",
            value: "0",
            description: "Waiting for review",
            icon: "◷",
        },
        {
            title: "Completed Requests",
            value: "0",
            description: "Assistance received",
            icon: "✓",
        },
    ];

    return (
        <div
            style={{
                minHeight: "calc(100vh - 180px)",
                display: "flex",
                background: "#f8f3ff",
                fontFamily: "Arial, sans-serif",
                color: "#302044",
            }}
        >
            <aside
                style={{
                    width: "245px",
                    minWidth: "215px",
                    background: "#ffffff",
                    borderRight: "1px solid #eadcff",
                    padding: "28px 16px",
                    boxSizing: "border-box",
                }}
            >
                <div
                    style={{
                        padding: "0 12px 25px",
                        borderBottom: "1px solid #eee4fa",
                        marginBottom: "22px",
                    }}
                >
                    <h2
                        style={{
                            color: "#8653bd",
                            fontSize: "23px",
                            margin: "0 0 8px",
                        }}
                    >
                        ♥ CARES
                    </h2>

                    <p
                        style={{
                            margin: 0,
                            color: "#8a789b",
                            fontSize: "12px",
                            fontWeight: "bold",
                            letterSpacing: "1px",
                        }}
                    >
                        BENEFICIARY PORTAL
                    </p>
                </div>

                <p
                    style={{
                        color: "#9b8aaa",
                        fontSize: "12px",
                        fontWeight: "bold",
                        paddingLeft: "12px",
                    }}
                >
                    MENU
                </p>

                {sidebarLinks.map((item) => {
                    const active = item.path === "/BeneficiaryDashboard";

                    return (
                        <button
                            key={item.label}
                            type="button"
                            onClick={() => navigate(item.path)}
                            style={{
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                padding: "13px 12px",
                                marginBottom: "7px",
                                border: "none",
                                borderRadius: "10px",
                                textAlign: "left",
                                fontSize: "14px",
                                fontWeight: active ? "bold" : "normal",
                                color: active ? "#ffffff" : "#655474",
                                background: active ? "#8653bd" : "transparent",
                                cursor: "pointer",
                            }}
                        >
                            <span style={{ fontSize: "19px", width: "22px" }}>
                                {item.icon}
                            </span>

                            {item.label}
                        </button>
                    );
                })}

                <div
                    style={{
                        marginTop: "35px",
                        padding: "15px 12px",
                        borderRadius: "12px",
                        background: "#f4edff",
                        color: "#71528f",
                        fontSize: "13px",
                        lineHeight: "1.6",
                    }}
                >
                    <strong>Need Help?</strong>

                    <p style={{ margin: "7px 0 0" }}>
                        Submit your needs and CARES will help connect you with support.
                    </p>
                </div>
            </aside>

            <main
                style={{
                    flex: 1,
                    minWidth: 0,
                    padding: "38px 5%",
                    boxSizing: "border-box",
                }}
            >
                <p
                    style={{
                        color: "#8653bd",
                        fontWeight: "bold",
                        fontSize: "13px",
                        letterSpacing: "1px",
                        margin: "0 0 10px",
                    }}
                >
                    BENEFICIARY PORTAL / DASHBOARD
                </p>

                <h1
                    style={{
                        fontSize: "clamp(27px, 3vw, 38px)",
                        margin: "0 0 10px",
                    }}
                >
                    Welcome to Your{" "}
                    <span style={{ color: "#8653bd" }}>Dashboard</span>
                </h1>

                <p
                    style={{
                        color: "#756582",
                        lineHeight: "1.7",
                        marginBottom: "28px",
                    }}
                >
                    Manage your assistance requests and stay updated on your support.
                </p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                        gap: "18px",
                        marginBottom: "30px",
                    }}
                >
                    {summaryCards.map((card) => (
                        <div
                            key={card.title}
                            style={{
                                background: "#ffffff",
                                border: "1px solid #eadcff",
                                borderRadius: "16px",
                                padding: "22px",
                                boxShadow: "0 8px 25px rgba(100, 60, 150, 0.05)",
                            }}
                        >
                            <div
                                style={{
                                    width: "45px",
                                    height: "45px",
                                    borderRadius: "12px",
                                    background: "#f0e6ff",
                                    color: "#8653bd",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "23px",
                                    marginBottom: "18px",
                                }}
                            >
                                {card.icon}
                            </div>

                            <p
                                style={{
                                    color: "#756582",
                                    fontSize: "14px",
                                    margin: "0 0 8px",
                                }}
                            >
                                {card.title}
                            </p>

                            <h2
                                style={{
                                    color: "#8653bd",
                                    fontSize: "30px",
                                    margin: "0 0 8px",
                                }}
                            >
                                {card.value}
                            </h2>

                            <p
                                style={{
                                    color: "#8a789b",
                                    fontSize: "12px",
                                    margin: 0,
                                }}
                            >
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div
                    style={{
                        padding: "24px",
                        borderRadius: "16px",
                        background: "#eee3ff",
                        color: "#65438a",
                        lineHeight: "1.7",
                    }}
                >
                    <h2 style={{ margin: "0 0 10px", fontSize: "21px" }}>
                        How CARES helps you
                    </h2>

                    <p style={{ margin: 0, fontSize: "15px" }}>
                        Submit a request, let the system match available donations
                        to your needs, and check for volunteer and delivery updates.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default BeneficiaryDashboard;
