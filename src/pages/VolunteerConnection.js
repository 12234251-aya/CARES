
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
        <>
            <style>{`
                .volunteer-connection-page {
                    min-height: calc(100vh - 180px);
                    display: flex;
                    background: #f8f3ff;
                    font-family: Arial, sans-serif;
                    color: #302044;
                }

                .volunteer-connection-sidebar {
                    width: 245px;
                    min-width: 215px;
                    background: #ffffff;
                    border-right: 1px solid #eadcff;
                    padding: 28px 16px;
                    box-sizing: border-box;
                }

                .volunteer-connection-main {
                    flex: 1;
                    min-width: 0;
                    padding: 38px 5%;
                    box-sizing: border-box;
                }

                .volunteer-connection-card {
                    background: #ffffff;
                    border: 1px solid #eadcff;
                    border-radius: 18px;
                    padding: 25px;
                    margin-bottom: 20px;
                    display: flex;
                    gap: 20px;
                    align-items: flex-start;
                    box-shadow: 0 8px 25px rgba(100, 60, 150, 0.05);
                }

                .volunteer-connection-icon {
                    width: 58px;
                    height: 58px;
                    flex-shrink: 0;
                    border-radius: 16px;
                    background: #f0e6ff;
                    color: #8653bd;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 28px;
                }

                @media (max-width: 720px) {
                    .volunteer-connection-page {
                        flex-direction: column;
                    }

                    .volunteer-connection-sidebar {
                        width: 100%;
                        min-width: 0;
                        border-right: none;
                        border-bottom: 1px solid #eadcff;
                        padding: 20px 16px;
                    }

                    .volunteer-connection-sidebar .volunteer-sidebar-links {
                        display: grid;
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                        gap: 7px;
                    }

                    .volunteer-connection-sidebar .volunteer-sidebar-links button {
                        margin-bottom: 0 !important;
                        font-size: 13px !important;
                        padding: 11px 8px !important;
                        gap: 7px !important;
                    }

                    .volunteer-connection-sidebar .volunteer-sidebar-links button span {
                        width: 18px !important;
                        font-size: 17px !important;
                    }

                    .volunteer-connection-main {
                        padding: 28px 20px;
                    }

                    .volunteer-connection-card {
                        padding: 20px;
                        gap: 15px;
                    }
                }

                @media (max-width: 420px) {
                    .volunteer-connection-main {
                        padding: 24px 14px;
                    }

                    .volunteer-connection-sidebar .volunteer-sidebar-links {
                        grid-template-columns: 1fr;
                    }

                    .volunteer-connection-card {
                        flex-direction: column;
                        padding: 18px;
                        gap: 12px;
                    }

                    .volunteer-connection-icon {
                        width: 48px;
                        height: 48px;
                        font-size: 24px;
                    }

                    .volunteer-connection-card h2 {
                        font-size: 18px !important;
                    }

                    .volunteer-back-button {
                        width: 100%;
                    }
                }
            `}</style>

            <div className="volunteer-connection-page">
                <aside className="volunteer-connection-sidebar">
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

                    <div className="volunteer-sidebar-links">
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
                    </div>

                    <div style={{ marginTop: "35px", padding: "15px 12px", borderRadius: "12px", background: "#f4edff", color: "#71528f", fontSize: "13px", lineHeight: "1.6" }}>
                        <strong>Need help?</strong>
                        <p style={{ margin: "7px 0 0" }}>
                            Your volunteer and delivery details will be updated here when available.
                        </p>
                    </div>
                </aside>

                <main className="volunteer-connection-main">
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
                            className="volunteer-connection-card"
                        >
                            <div className="volunteer-connection-icon">
                                {item.icon}
                            </div>

                            <div style={{ minWidth: 0 }}>
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
                        className="volunteer-back-button"
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
        </>
    );
};

export default VolunteerConnection;
