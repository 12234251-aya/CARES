
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const DonorRequests = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const sidebarLinks = [
        { label: "Dashboard", icon: "⌂", path: "/DonorDashboard" },
        { label: "Donate Items", icon: "♡", path: "/DonateItems" },
        { label: "Requests", icon: "▤", path: "/DonorRequests" },
        { label: "Deliveries", icon: "↗", path: "/DonorDeliveries" },
        { label: "Profile", icon: "○", path: "/DonorProfile" },
    ];

    const [requests, setRequests] = React.useState([
        {
            id: 1042,
            title: "Winter clothes",
            details: "Needed: 2 adult jackets",
            location: "Tripoli",
            posted: "Posted today",
            status: "OPEN",
        },
        {
            id: 1048,
            title: "Food supplies",
            details: "Needed: 5 kg rice + 2 L oil",
            location: "Mina",
            posted: "",
            status: "OPEN",
        },
        {
            id: 1051,
            title: "School items",
            details: "Needed: notebooks and pencils",
            location: "Beddawi",
            posted: "",
            status: "OPEN",
        },
    ]);

    const [message, setMessage] = React.useState("");

    const handleAccept = (id) => {
        setRequests((previous) =>
            previous.map((request) =>
                request.id === id
                    ? { ...request, status: "ACCEPTED" }
                    : request
            )
        );

        setMessage(
            `Request #${id} accepted in this demo. Backend connection is not set up yet.`
        );
    };

    return (
        <>
            <style>
                {`
                    .donor-requests-page {
                        min-height: calc(100vh - 180px);
                        display: flex;
                        background: #f8f3ff;
                        font-family: Arial, sans-serif;
                        color: #302044;
                        width: 100%;
                        box-sizing: border-box;
                    }

                    .donor-requests-sidebar {
                        width: 245px !important;
                        min-width: 215px !important;
                        flex-shrink: 0;
                        background: #ffffff;
                        border-right: 1px solid #eadcff;
                        padding: 28px 16px;
                        box-sizing: border-box;
                    }

                    .donor-requests-main {
                        flex: 1;
                        min-width: 0;
                        padding: 38px 5%;
                        box-sizing: border-box;
                    }

                    .donor-requests-link {
                        transition: background 0.2s ease;
                    }

                    .donor-requests-link:hover {
                        background: #f4edff !important;
                        color: #8653bd !important;
                    }

                    .donor-requests-accept {
                        transition: background 0.2s ease;
                    }

                    .donor-requests-accept:not(:disabled):hover {
                        background: #7041a4 !important;
                    }

                    .donor-request-card {
                        min-width: 0;
                        box-sizing: border-box;
                    }

                    @media (max-width: 720px) {
                        .donor-requests-page {
                            flex-direction: column;
                            min-height: auto;
                        }

                        .donor-requests-sidebar {
                            width: 100% !important;
                            min-width: 0 !important;
                            padding: 20px 16px;
                            border-right: none;
                            border-bottom: 1px solid #eadcff;
                        }

                        .donor-requests-link {
                            width: 48% !important;
                            display: inline-flex !important;
                            vertical-align: top;
                            margin-right: 1%;
                            box-sizing: border-box;
                            padding: 12px 8px !important;
                            gap: 7px !important;
                            font-size: 13px !important;
                        }

                        .donor-requests-help {
                            margin-top: 18px !important;
                        }

                        .donor-requests-main {
                            width: 100%;
                            padding: 28px 18px;
                        }

                        .donor-requests-grid {
                            grid-template-columns: repeat(
                                auto-fit,
                                minmax(min(100%, 230px), 1fr)
                            ) !important;
                        }
                    }

                    @media (max-width: 420px) {
                        .donor-requests-sidebar {
                            padding: 18px 12px;
                        }

                        .donor-requests-main {
                            padding: 24px 14px;
                        }

                        .donor-requests-link {
                            font-size: 12px !important;
                            padding: 11px 6px !important;
                        }

                        .donor-request-card {
                            padding: 18px !important;
                        }
                    }
                `}
            </style>

            <div className="donor-requests-page">

                {/* Sidebar */}
                <aside className="donor-requests-sidebar">
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
                                className="donor-requests-link"
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
                        className="donor-requests-help"
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
                        <strong>Help &amp; Support</strong>

                        <p style={{ margin: "7px 0 0" }}>
                            Review requests and accept ones you can help with.
                        </p>
                    </div>
                </aside>

                {/* Requests Content */}
                <main className="donor-requests-main">

                    <p
                        style={{
                            color: "#8653bd",
                            fontSize: "13px",
                            fontWeight: "bold",
                            letterSpacing: "1px",
                            margin: "0 0 10px",
                        }}
                    >
                        DONOR PORTAL / REQUESTS
                    </p>

                    <h1
                        style={{
                            fontSize: "clamp(27px, 3vw, 36px)",
                            margin: "0 0 12px",
                        }}
                    >
                        <span style={{ color: "#8653bd" }}>Requests</span>
                        <span> You May Be Able To Help With</span>
                    </h1>

                    <p
                        style={{
                            color: "#756582",
                            fontSize: "15px",
                            lineHeight: "1.7",
                            marginBottom: "28px",
                        }}
                    >
                        Review what people need and accept a request if you have
                        suitable items to donate.
                    </p>

                    {message && (
                        <div
                            role="status"
                            style={{
                                background: "#f0e6ff",
                                border: "1px solid #ddc9f5",
                                borderRadius: "10px",
                                padding: "14px 16px",
                                color: "#65438a",
                                fontSize: "14px",
                                lineHeight: "1.6",
                                marginBottom: "20px",
                            }}
                        >
                            {message}
                        </div>
                    )}

                    {/* Request Cards */}
                    <div
                        className="donor-requests-grid"
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(auto-fit, minmax(230px, 1fr))",
                            gap: "20px",
                            alignItems: "stretch",
                        }}
                    >
                        {requests.map((request) => (
                            <section
                                key={request.id}
                                className="donor-request-card"
                                style={{
                                    background: "#ffffff",
                                    border: "1px solid #eadcff",
                                    borderRadius: "15px",
                                    padding: "22px",
                                    boxShadow:
                                        "0 8px 25px rgba(100, 60, 150, 0.05)",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        gap: "8px",
                                        marginBottom: "18px",
                                        flexWrap: "wrap",
                                    }}
                                >
                                    <span
                                        style={{
                                            color: "#8653bd",
                                            fontSize: "12px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        REQUEST #{request.id}
                                    </span>

                                    <span
                                        style={{
                                            background:
                                                request.status === "OPEN"
                                                    ? "#f0e6ff"
                                                    : "#e3f6e9",
                                            color:
                                                request.status === "OPEN"
                                                    ? "#76519d"
                                                    : "#287644",
                                            borderRadius: "7px",
                                            padding: "6px 9px",
                                            fontSize: "11px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {request.status}
                                    </span>
                                </div>

                                <h2
                                    style={{
                                        fontSize: "19px",
                                        margin: "0 0 14px",
                                        color: "#38264e",
                                    }}
                                >
                                    {request.title}
                                </h2>

                                <p
                                    style={{
                                        fontSize: "14px",
                                        lineHeight: "1.7",
                                        color: "#756582",
                                        margin: "0 0 10px",
                                    }}
                                >
                                    {request.details}
                                </p>

                                <p
                                    style={{
                                        fontSize: "14px",
                                        color: "#756582",
                                        margin: "0 0 8px",
                                    }}
                                >
                                    <strong>Location:</strong> {request.location}
                                </p>

                                {request.posted && (
                                    <p
                                        style={{
                                            fontSize: "13px",
                                            color: "#9b8aaa",
                                            margin: "0 0 18px",
                                        }}
                                    >
                                        {request.posted}
                                    </p>
                                )}

                                <div style={{ flex: 1, minHeight: "12px" }} />

                                <button
                                    type="button"
                                    disabled={request.status !== "OPEN"}
                                    onClick={() => handleAccept(request.id)}
                                    className="donor-requests-accept"
                                    style={{
                                        width: "100%",
                                        marginTop: "18px",
                                        background:
                                            request.status === "OPEN"
                                                ? "#8653bd"
                                                : "#cbbbdc",
                                        color: "#ffffff",
                                        border: "none",
                                        borderRadius: "9px",
                                        padding: "12px 18px",
                                        fontSize: "14px",
                                        fontWeight: "bold",
                                        cursor:
                                            request.status === "OPEN"
                                                ? "pointer"
                                                : "not-allowed",
                                    }}
                                >
                                    {request.status === "OPEN"
                                        ? "Accept"
                                        : "Accepted"}
                                </button>
                            </section>
                        ))}
                    </div>
                </main>
            </div>
        </>
    );
};

export default DonorRequests;
