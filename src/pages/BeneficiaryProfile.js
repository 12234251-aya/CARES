
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BeneficiaryProfile = () => {
    const navigate = useNavigate();

    const [profile, setProfile] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        familySize: "",
    });

    const [saved, setSaved] = useState(false);

    const updateField = (event) => {
        setProfile({
            ...profile,
            [event.target.name]: event.target.value,
        });
        setSaved(false);
    };

    const sidebarLinks = [
        { label: "Dashboard", icon: "⌂", path: "/BeneficiaryDashboard" },
        { label: "Request Aid", icon: "♡", path: "/Beneficiary" },
        { label: "My Requests", icon: "▤", path: "/MyRequests" },
        { label: "Volunteer Connection", icon: "↗", path: "/VolunteerConnection" },
        { label: "Profile", icon: "○", path: "/BeneficiaryProfile" },
    ];

    const inputStyle = {
        width: "100%",
        padding: "13px",
        border: "1px solid #dfd0f2",
        borderRadius: "10px",
        fontSize: "15px",
        boxSizing: "border-box",
        background: "#ffffff",
    };

    const labelStyle = {
        display: "block",
        marginBottom: "8px",
        fontWeight: "600",
        fontSize: "14px",
    };

    return (
        <>
            <style>{`
                .beneficiary-profile-page {
                    min-height: calc(100vh - 180px);
                    display: flex;
                    background: #f8f3ff;
                    font-family: Arial, sans-serif;
                    color: #302044;
                }

                .beneficiary-profile-sidebar {
                    width: 245px;
                    min-width: 215px;
                    background: #ffffff;
                    border-right: 1px solid #eadcff;
                    padding: 28px 16px;
                    box-sizing: border-box;
                }

                .beneficiary-profile-main {
                    flex: 1;
                    min-width: 0;
                    padding: 38px 5%;
                    box-sizing: border-box;
                }

                .beneficiary-profile-form {
                    max-width: 900px;
                    background: #ffffff;
                    border: 1px solid #eadcff;
                    border-radius: 20px;
                    padding: clamp(20px, 3vw, 32px);
                    box-shadow: 0 10px 30px rgba(100, 60, 150, 0.07);
                    box-sizing: border-box;
                }

                .beneficiary-profile-fields {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 20px;
                }

                @media (max-width: 720px) {
                    .beneficiary-profile-page {
                        flex-direction: column;
                    }

                    .beneficiary-profile-sidebar {
                        width: 100%;
                        min-width: 0;
                        border-right: none;
                        border-bottom: 1px solid #eadcff;
                        padding: 20px 16px;
                    }

                    .beneficiary-profile-sidebar .beneficiary-profile-links {
                        display: grid;
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                        gap: 7px;
                    }

                    .beneficiary-profile-sidebar .beneficiary-profile-links button {
                        margin-bottom: 0 !important;
                        font-size: 13px !important;
                        padding: 11px 8px !important;
                        gap: 7px !important;
                    }

                    .beneficiary-profile-sidebar .beneficiary-profile-links button span {
                        width: 18px !important;
                        font-size: 17px !important;
                    }

                    .beneficiary-profile-main {
                        padding: 28px 20px;
                    }

                    .beneficiary-profile-fields {
                        grid-template-columns: 1fr;
                    }

                    .beneficiary-profile-form {
                        padding: 22px;
                    }
                }

                @media (max-width: 420px) {
                    .beneficiary-profile-main {
                        padding: 24px 14px;
                    }

                    .beneficiary-profile-sidebar .beneficiary-profile-links {
                        grid-template-columns: 1fr;
                    }

                    .beneficiary-profile-form {
                        padding: 17px;
                    }

                    .beneficiary-profile-header {
                        gap: 12px !important;
                        align-items: flex-start !important;
                    }

                    .beneficiary-profile-avatar {
                        width: 55px !important;
                        height: 55px !important;
                        font-size: 25px !important;
                    }

                    .beneficiary-profile-header h2 {
                        font-size: 18px !important;
                    }
                }
            `}</style>

            <div className="beneficiary-profile-page">
                <aside className="beneficiary-profile-sidebar">
                    <div style={{
                        padding: "0 12px 25px",
                        borderBottom: "1px solid #eee4fa",
                        marginBottom: "22px",
                    }}>
                        <h2 style={{ color: "#8653bd", fontSize: "23px", margin: "0 0 8px" }}>
                            ♥ CARES
                        </h2>
                        <p style={{
                            margin: 0,
                            color: "#8a789b",
                            fontSize: "12px",
                            fontWeight: "bold",
                            letterSpacing: "1px",
                        }}>
                            BENEFICIARY PORTAL
                        </p>
                    </div>

                    <p style={{
                        color: "#9b8aaa",
                        fontSize: "12px",
                        fontWeight: "bold",
                        paddingLeft: "12px",
                    }}>
                        MENU
                    </p>

                    <div className="beneficiary-profile-links">
                        {sidebarLinks.map((item) => {
                            const active = item.path === "/BeneficiaryProfile";

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
                    </div>

                    <div style={{
                        marginTop: "35px",
                        padding: "15px 12px",
                        borderRadius: "12px",
                        background: "#f4edff",
                        color: "#71528f",
                        fontSize: "13px",
                        lineHeight: "1.6",
                    }}>
                        <strong>Your Information</strong>
                        <p style={{ margin: "7px 0 0" }}>
                            Keep your contact details up to date.
                        </p>
                    </div>
                </aside>

                <main className="beneficiary-profile-main">
                    <p style={{
                        color: "#8653bd",
                        fontWeight: "bold",
                        fontSize: "13px",
                        letterSpacing: "1px",
                        margin: "0 0 10px",
                    }}>
                        BENEFICIARY PORTAL / PROFILE
                    </p>

                    <h1 style={{ fontSize: "clamp(27px, 3vw, 38px)", margin: "0 0 10px" }}>
                        My <span style={{ color: "#8653bd" }}>Profile</span>
                    </h1>

                    <p style={{ color: "#756582", lineHeight: "1.7", marginBottom: "28px" }}>
                        View and update your personal and contact information.
                    </p>

                    <form
                        className="beneficiary-profile-form"
                        onSubmit={(event) => {
                            event.preventDefault();
                            setSaved(true);
                            console.log("Beneficiary profile:", profile);
                        }}
                    >
                        <div
                            className="beneficiary-profile-header"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "18px",
                                marginBottom: "28px",
                            }}
                        >
                            <div
                                className="beneficiary-profile-avatar"
                                style={{
                                    width: "75px",
                                    height: "75px",
                                    borderRadius: "50%",
                                    background: "#eee2ff",
                                    color: "#8653bd",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "32px",
                                    flexShrink: 0,
                                }}
                            >
                                ♙
                            </div>
                            <div>
                                <h2 style={{ margin: "0 0 7px", fontSize: "21px" }}>
                                    Personal Information
                                </h2>
                                <p style={{ margin: 0, color: "#756582", fontSize: "14px" }}>
                                    Your details help us coordinate assistance.
                                </p>
                            </div>
                        </div>

                        <div className="beneficiary-profile-fields">
                            <div>
                                <label style={labelStyle}>Full Name</label>
                                <input
                                    name="name"
                                    value={profile.name}
                                    onChange={updateField}
                                    placeholder="Enter your full name"
                                    style={inputStyle}
                                    required
                                />
                            </div>

                            <div>
                                <label style={labelStyle}>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={profile.email}
                                    onChange={updateField}
                                    placeholder="name@example.com"
                                    style={inputStyle}
                                    required
                                />
                            </div>

                            <div>
                                <label style={labelStyle}>Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={profile.phone}
                                    onChange={updateField}
                                    placeholder="Contact number"
                                    style={inputStyle}
                                    required
                                />
                            </div>

                            <div>
                                <label style={labelStyle}>Home Address / Location</label>
                                <input
                                    name="address"
                                    value={profile.address}
                                    onChange={updateField}
                                    placeholder="Enter your location"
                                    style={inputStyle}
                                    required
                                />
                            </div>

                            <div>
                                <label style={labelStyle}>Household Size</label>
                                <input
                                    type="number"
                                    name="familySize"
                                    min="1"
                                    value={profile.familySize}
                                    onChange={updateField}
                                    placeholder="Number of family members"
                                    style={inputStyle}
                                />
                            </div>
                        </div>

                        {saved && (
                            <p style={{
                                color: "#39754b",
                                background: "#eaf8ee",
                                padding: "12px",
                                borderRadius: "8px",
                                marginTop: "22px",
                            }}>
                                Your information has been updated in this demo.
                            </p>
                        )}

                        <button
                            type="submit"
                            style={{
                                width: "100%",
                                marginTop: "28px",
                                padding: "14px",
                                border: "none",
                                borderRadius: "10px",
                                background: "#8653bd",
                                color: "#ffffff",
                                fontWeight: "bold",
                                fontSize: "16px",
                                cursor: "pointer",
                            }}
                        >
                            Save Changes
                        </button>
                    </form>
                </main>
            </div>
        </>
    );
};

export default BeneficiaryProfile;
