
import { useNavigate } from "react-router-dom";

const VolunteerConnection = () => {
    const navigate = useNavigate();

    const sidebarLinks = [
        { label: "Dashboard", icon: "⌂", path: "/BeneficiaryDashboard" },
        { label: "Request Aid", icon: "♡", path: "/Beneficiary" },
        { label: "My Requests", icon: "▤", path: "/MyRequests" },
        { label: "Volunteer Connection", icon: "↗", path: "/VolunteerConnection" },
        { label: "Profile", icon: "○", path: "/BeneficiaryProfile" },
    ];

    const connections = [
        {
            name: "Volunteer Assignment",
            status: "Waiting for assignment",
            description:
                "A volunteer's details will appear here once a volunteer has been assigned to your request.",
            icon: "♧",
        },
        {
            name: "Delivery Information",
            status: "Not scheduled yet",
            description:
                "Pickup and delivery details will be shown here when they are available.",
            icon: "↗",
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
                    <h2 style={{ color: "#8653bd", fontSize: "23px", margin: "0 0 8px" }}>
                        ♥ CARES
                    </h2>
                    <p style={{ margin: 0, color: "#8a789b", fontSize: "12px", fontWeight: "bold", letterSpacing: "1px" }}>
                        BENEFICIARY PORTAL
                    </p>
                </div>

                <p style={{ color: "#9b8aaa", fontSize: "12px", fontWeight: "bold", paddingLeft: "12px", marginBottom: "12px" }}>
                    MENU
                </p>

                {sidebarLinks.map((item) => {
                    const active = item.path === "/VolunteerConnection";

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
                            <span style={{ fontSize: "19px", width: "22px" }}>{item.icon}</span>
                            {item.label}
                        </button>
                    );
                })}

                <div style={{ marginTop: "35px", padding: "15px 12px", borderRadius: "12px", background: "#f4edff", color: "#71528f", fontSize: "13px", lineHeight: "1.6" }}>
                    <strong>Need help?</strong>
                    <p style={{ margin: "7px 0 0" }}>
                        Your volunteer and delivery details will be updated here when available.
                    </p>
                </div>
            </aside>

            <main style={{ flex: 1, minWidth: 0, padding: "38px 5%", boxSizing: "border-box" }}>
                <p style={{ color: "#8653bd", fontWeight: "bold", fontSize: "13px", letterSpacing: "1px", margin: "0 0 10px" }}>
                    BENEFICIARY PORTAL / VOLUNTEER CONNECTION
                </p>

                <h1 style={{ fontSize: "clamp(27px, 3vw, 38px)", margin: "0 0 10px" }}>
                    Volunteer <span style={{ color: "#8653bd" }}>Connection</span>
                </h1>

                <p style={{ color: "#756582", lineHeight: "1.7", marginBottom: "28px" }}>
                    Check volunteer assignment and delivery information for your assistance requests.
                </p>

                {connections.map((item) => (
                    <section
                        key={item.name}
                        style={{
                            background: "#ffffff",
                            border: "1px solid #eadcff",
                            borderRadius: "18px",
                            padding: "25px",
                            marginBottom: "20px",
                            display: "flex",
                            gap: "20px",
                            alignItems: "flex-start",
                            boxShadow: "0 8px 25px rgba(100, 60, 150, 0.05)",
                        }}
                    >
                        <div style={{ width: "58px", height: "58px", flexShrink: 0, borderRadius: "16px", background: "#f0e6ff", color: "#8653bd", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px" }}>
                            {item.icon}
                        </div>

                        <div>
                            <h2 style={{ fontSize: "20px", margin: "2px 0 10px" }}>
                                {item.name}
                            </h2>

                            <span style={{ display: "inline-block", background: "#eee3ff", color: "#7544aa", padding: "6px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "bold" }}>
                                {item.status}
                            </span>

                            <p style={{ color: "#756582", lineHeight: "1.7", margin: "14px 0 0" }}>
                                {item.description}
                            </p>
                        </div>
                    </section>
                ))}

                <button
                    type="button"
                    onClick={() => navigate("/MyRequests")}
                    style={{
                        marginTop: "5px",
                        padding: "13px 22px",
                        border: "none",
                        borderRadius: "10px",
                        background: "#8653bd",
                        color: "#ffffff",
                        fontWeight: "bold",
                        fontSize: "15px",
                        cursor: "pointer",
                    }}
                >
                    ← Back to My Requests
                </button>
            </main>
        </div>
    );
};

export default VolunteerConnection;
