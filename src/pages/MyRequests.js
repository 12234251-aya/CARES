
import { useNavigate } from "react-router-dom";

const MyRequests = () => {
    const navigate = useNavigate();

    const requests = [
        {
            id: "REQ-001",
            item: "Food Supplies",
            category: "Food",
            quantity: "2 food packages",
            date: "Pending review",
            status: "Pending",
            volunteer: "Not assigned yet",
            delivery: "Will be updated when available",
        },
        {
            id: "REQ-002",
            item: "Winter Clothes",
            category: "Clothing",
            quantity: "2 jackets",
            date: "Awaiting matching",
            status: "In Review",
            volunteer: "Not assigned yet",
            delivery: "Will be updated when available",
        },
    ];

    const sidebarLinks = [
        { label: "Dashboard", icon: "⌂", path: "/BeneficiaryDashboard" },
        { label: "Request Aid", icon: "♡", path: "/Beneficiary" },
        { label: "My Requests", icon: "▤", path: "/MyRequests" },
        { label: "Volunteer Connection", icon: "↗", path: "/VolunteerConnection" },
        { label: "Profile", icon: "○", path: "/BeneficiaryProfile" },
    ];

    const statusStyle = (status) => ({
        display: "inline-block",
        padding: "6px 12px",
        borderRadius: "20px",
        background: status === "Pending" ? "#fff0d6" : "#eee3ff",
        color: status === "Pending" ? "#9a6500" : "#7544aa",
        fontSize: "12px",
        fontWeight: "bold",
    });

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
                        marginBottom: "12px",
                    }}
                >
                    MENU
                </p>

                {sidebarLinks.map((item) => {
                    const active = item.path === "/MyRequests";

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
                    <strong>Need more help?</strong>
                    <p style={{ margin: "7px 0 0" }}>
                        You can submit a new request whenever you need assistance.
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
                    BENEFICIARY PORTAL / MY REQUESTS
                </p>

                <h1 style={{ fontSize: "clamp(27px, 3vw, 38px)", margin: "0 0 10px" }}>
                    My <span style={{ color: "#8653bd" }}>Requests</span>
                </h1>

                <p style={{ color: "#756582", lineHeight: "1.7", marginBottom: "28px" }}>
                    Track your assistance requests and check their current status.
                </p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
                        gap: "16px",
                        marginBottom: "25px",
                    }}
                >
                    {[
                        { label: "Total Requests", value: "2" },
                        { label: "Pending", value: "1" },
                        { label: "In Review", value: "1" },
                    ].map((item) => (
                        <div
                            key={item.label}
                            style={{
                                background: "#ffffff",
                                border: "1px solid #eadcff",
                                borderRadius: "15px",
                                padding: "20px",
                            }}
                        >
                            <p style={{ color: "#756582", margin: "0 0 10px", fontSize: "14px" }}>
                                {item.label}
                            </p>
                            <h2 style={{ color: "#8653bd", fontSize: "28px", margin: 0 }}>
                                {item.value}
                            </h2>
                        </div>
                    ))}
                </div>

                {requests.map((request) => (
                    <section
                        key={request.id}
                        style={{
                            background: "#ffffff",
                            border: "1px solid #eadcff",
                            borderRadius: "18px",
                            padding: "24px",
                            marginBottom: "20px",
                            boxShadow: "0 8px 25px rgba(100, 60, 150, 0.05)",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "flex-start",
                                flexWrap: "wrap",
                                gap: "12px",
                                marginBottom: "18px",
                            }}
                        >
                            <div>
                                <p style={{ color: "#8a789b", fontSize: "12px", margin: "0 0 7px" }}>
                                    {request.id}
                                </p>
                                <h2 style={{ fontSize: "21px", margin: "0 0 8px" }}>
                                    {request.item}
                                </h2>
                                <p style={{ color: "#756582", margin: 0, fontSize: "14px" }}>
                                    {request.category} · {request.quantity}
                                </p>
                            </div>

                            <span style={statusStyle(request.status)}>
                                {request.status}
                            </span>
                        </div>

                        <hr style={{ border: 0, borderTop: "1px solid #eee4fa" }} />

                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
                                gap: "18px",
                                marginTop: "18px",
                            }}
                        >
                            <div>
                                <p style={{ color: "#8a789b", fontSize: "13px", margin: "0 0 7px" }}>
                                    Volunteer
                                </p>
                                <strong>{request.volunteer}</strong>
                            </div>

                            <div>
                                <p style={{ color: "#8a789b", fontSize: "13px", margin: "0 0 7px" }}>
                                    Delivery Information
                                </p>
                                <span style={{ fontSize: "14px", lineHeight: "1.6" }}>
                                    {request.delivery}
                                </span>
                            </div>
                        </div>
                    </section>
                ))}

                <button
                    type="button"
                    onClick={() => navigate("/Beneficiary")}
                    style={{
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
                    + Submit a New Request
                </button>
            </main>
        </div>
    );
};

export default MyRequests;
