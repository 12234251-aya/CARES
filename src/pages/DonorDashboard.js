
import { useNavigate, useLocation } from "react-router-dom";

const DonorDashboard = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const sidebarLinks = [
        { label: "Dashboard", icon: "⌂", path: "/DonorDashboard" },
        { label: "Donate Items", icon: "♡", path: "/DonateItems" },
        { label: "Requests", icon: "▤", path: "/DonorRequests" },
        { label: "Deliveries", icon: "↗", path: "/DonorDeliveries" },
        { label: "Profile", icon: "○", path: "/DonorProfile" },
    ];

    const summaryCards = [
        {
            title: "My Donations",
            value: "0",
            description: "Donations submitted",
            icon: "♡",
        },
        {
            title: "Accepted Requests",
            value: "0",
            description: "Requests accepted",
            icon: "▤",
        },
        {
            title: "Deliveries",
            value: "0",
            description: "Deliveries completed",
            icon: "✓",
        },
    ];

    const cardStyle = {
        background: "#ffffff",
        border: "1px solid #eadcff",
        borderRadius: "16px",
        padding: "22px",
        boxShadow: "0 8px 25px rgba(100, 60, 150, 0.05)",
    };

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
            {/* Sidebar */}
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
                        DONOR PORTAL
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
                    const active = location.pathname === item.path;

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
                        Your donations can support people in need and make
                        a positive difference in your community.
                    </p>
                </div>
            </aside>

            {/* Dashboard Content */}
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
                    DONOR PORTAL / DASHBOARD
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
                    Manage your donations and follow their progress from one place.
                </p>

                {/* Summary Cards */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                        gap: "18px",
                        marginBottom: "30px",
                    }}
                >
                    {summaryCards.map((card) => (
                        <div key={card.title} style={cardStyle}>
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

                {/* Make a Difference */}
                <section
                    style={{
                        ...cardStyle,
                        marginBottom: "24px",
                        padding: "24px",
                    }}
                >
                    <h2
                        style={{
                            margin: "0 0 12px",
                            fontSize: "21px",
                            color: "#65438a",
                        }}
                    >
                        Make a Difference
                    </h2>

                    <p
                        style={{
                            color: "#756582",
                            lineHeight: "1.8",
                            fontSize: "15px",
                            marginBottom: "22px",
                        }}
                    >
                        Your donations can help individuals and families get
                        the support they need. Choose the items you would like
                        to donate and help make a positive difference in your
                        community.
                    </p>

                    <button
                        type="button"
                        onClick={() => navigate("/DonateItems")}
                        style={{
                            background: "#8653bd",
                            color: "#ffffff",
                            border: "none",
                            borderRadius: "10px",
                            padding: "13px 22px",
                            fontSize: "14px",
                            fontWeight: "bold",
                            cursor: "pointer",
                        }}
                    >
                        Donate Items
                    </button>
                </section>

                {/* How CARES Works */}
                <section
                    style={{
                        ...cardStyle,
                        padding: "24px",
                    }}
                >
                    <h2
                        style={{
                            margin: "0 0 20px",
                            fontSize: "21px",
                            color: "#65438a",
                        }}
                    >
                        How CARES Works
                    </h2>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                            gap: "20px",
                        }}
                    >
                        <div>
                            <div
                                style={{
                                    fontSize: "27px",
                                    color: "#8653bd",
                                    marginBottom: "10px",
                                }}
                            >
                                ♡
                            </div>

                            <h3 style={{ fontSize: "16px", margin: "0 0 8px" }}>
                                1. Donate
                            </h3>

                            <p
                                style={{
                                    color: "#756582",
                                    fontSize: "13px",
                                    lineHeight: "1.7",
                                    margin: 0,
                                }}
                            >
                                Submit details about the items you want to donate.
                            </p>
                        </div>

                        <div>
                            <div
                                style={{
                                    fontSize: "27px",
                                    color: "#8653bd",
                                    marginBottom: "10px",
                                }}
                            >
                                ↔
                            </div>

                            <h3 style={{ fontSize: "16px", margin: "0 0 8px" }}>
                                2. Match
                            </h3>

                            <p
                                style={{
                                    color: "#756582",
                                    fontSize: "13px",
                                    lineHeight: "1.7",
                                    margin: 0,
                                }}
                            >
                                Donations can be matched with people who need them.
                            </p>
                        </div>

                        <div>
                            <div
                                style={{
                                    fontSize: "27px",
                                    color: "#8653bd",
                                    marginBottom: "10px",
                                }}
                            >
                                ♧
                            </div>

                            <h3 style={{ fontSize: "16px", margin: "0 0 8px" }}>
                                3. Deliver
                            </h3>

                            <p
                                style={{
                                    color: "#756582",
                                    fontSize: "13px",
                                    lineHeight: "1.7",
                                    margin: 0,
                                }}
                            >
                                Volunteers help deliver donations to their recipients.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default DonorDashboard;
