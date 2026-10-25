
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
        <div style={{
            minHeight: "calc(100vh - 180px)",
            display: "flex",
            background: "#f8f3ff",
            fontFamily: "Arial, sans-serif",
            color: "#302044",
        }}>
            <aside style={{
                width: "245px",
                minWidth: "215px",
                background: "#ffffff",
                borderRight: "1px solid #eadcff",
                padding: "28px 16px",
                boxSizing: "border-box",
            }}>
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

            <main style={{
                flex: 1,
                minWidth: 0,
                padding: "38px 5%",
                boxSizing: "border-box",
            }}>
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
                    onSubmit={(event) => {
                        event.preventDefault();
                        setSaved(true);
                        console.log("Beneficiary profile:", profile);
                    }}
                    style={{
                        maxWidth: "900px",
                        background: "#ffffff",
                        border: "1px solid #eadcff",
                        borderRadius: "20px",
                        padding: "clamp(20px, 3vw, 32px)",
                        boxShadow: "0 10px 30px rgba(100, 60, 150, 0.07)",
                        boxSizing: "border-box",
                    }}
                >
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "18px",
                        marginBottom: "28px",
                    }}>
                        <div style={{
                            width: "75px",
                            height: "75px",
                            borderRadius: "50%",
                            background: "#eee2ff",
                            color: "#8653bd",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "32px",
                        }}>
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

                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: "20px",
                    }}>
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
    );
};

export default BeneficiaryProfile;
