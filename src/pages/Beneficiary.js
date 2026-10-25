
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Beneficiary = () => {
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);

    const [form, setForm] = useState({
        category: "",
        item: "",
        quantity: "",
        household: "",
        name: "",
        phone: "",
        email: "",
        location: "",
        details: "",
    });

    const updateField = (event) => {
        const { name, value } = event.target;

        setForm((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const inputStyle = {
        width: "100%",
        padding: "12px 14px",
        border: "1px solid #dfd0f2",
        borderRadius: "10px",
        fontSize: "15px",
        boxSizing: "border-box",
        backgroundColor: "#fff",
        color: "#302044",
    };

    const labelStyle = {
        display: "block",
        marginBottom: "8px",
        fontWeight: "600",
        color: "#302044",
        fontSize: "14px",
    };

    const sidebarLinks = [
        { label: "Dashboard", icon: "⌂", path: "/BeneficiaryDashboard" },
        { label: "Request Aid", icon: "♡", path: "/Beneficiary" },
        { label: "My Requests", icon: "▤", path: "/MyRequests" },
        { label: "Volunteer Connection", icon: "↗", path: "/VolunteerConnection" },
        { label: "Profile", icon: "○", path: "/BeneficiaryProfile" },
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        console.log("Assistance request:", form);
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
                        marginBottom: "12px",
                    }}
                >
                    MENU
                </p>

                {sidebarLinks.map((item) => {
                    const active = item.path === "/Beneficiary";

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
                                color: active ? "#fff" : "#655474",
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
                    <strong>Help & Support</strong>
                    <p style={{ margin: "7px 0 0" }}>
                        We are here to help connect you with the support you need.
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
                {!submitted ? (
                    <>
                        <div style={{ marginBottom: "28px" }}>
                            <p
                                style={{
                                    color: "#8653bd",
                                    fontWeight: "bold",
                                    fontSize: "13px",
                                    letterSpacing: "1px",
                                    margin: "0 0 10px",
                                }}
                            >
                                BENEFICIARY PORTAL / REQUEST AID
                            </p>

                            <h1
                                style={{
                                    fontSize: "clamp(27px, 3vw, 38px)",
                                    margin: "0 0 10px",
                                }}
                            >
                                Request <span style={{ color: "#8653bd" }}>Assistance</span>
                            </h1>

                            <p
                                style={{
                                    color: "#756582",
                                    lineHeight: "1.7",
                                    margin: 0,
                                }}
                            >
                                Tell us what you need so your request can be reviewed.
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            style={{
                                background: "#ffffff",
                                border: "1px solid #eadcff",
                                borderRadius: "20px",
                                padding: "clamp(20px, 3vw, 32px)",
                                boxShadow: "0 10px 30px rgba(100, 60, 150, 0.07)",
                                maxWidth: "900px",
                                boxSizing: "border-box",
                            }}
                        >
                            <h2 style={{ fontSize: "20px", marginTop: 0 }}>
                                What do you need?
                            </h2>

                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                                    gap: "20px",
                                }}
                            >
                                <div>
                                    <label style={labelStyle}>Category</label>
                                    <select
                                        name="category"
                                        value={form.category}
                                        onChange={updateField}
                                        style={inputStyle}
                                        required
                                    >
                                        <option value="">Choose a category</option>
                                        <option value="Food">Food</option>
                                        <option value="Clothing">Clothing</option>
                                        <option value="Medicine">Medicine</option>
                                        <option value="Furniture">Furniture</option>
                                        <option value="School supplies">School supplies</option>
                                        <option value="Other">Other needs</option>
                                    </select>
                                </div>

                                <div>
                                    <label style={labelStyle}>Specific Item</label>
                                    <input
                                        name="item"
                                        value={form.item}
                                        onChange={updateField}
                                        placeholder="e.g. winter jacket"
                                        style={inputStyle}
                                        required
                                    />
                                </div>

                                <div>
                                    <label style={labelStyle}>Quantity Needed</label>
                                    <input
                                        name="quantity"
                                        value={form.quantity}
                                        onChange={updateField}
                                        placeholder="e.g. 2 items or 1 package"
                                        style={inputStyle}
                                        required
                                    />
                                </div>

                                <div>
                                    <label style={labelStyle}>Age / Household Details</label>
                                    <input
                                        name="household"
                                        value={form.household}
                                        onChange={updateField}
                                        placeholder="e.g. adult, child, family size"
                                        style={inputStyle}
                                    />
                                </div>
                            </div>

                            <hr
                                style={{
                                    border: 0,
                                    borderTop: "1px solid #eee4fa",
                                    margin: "28px 0",
                                }}
                            />

                            <h2 style={{ fontSize: "20px", marginTop: 0 }}>
                                Your Contact Information
                            </h2>

                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                                    gap: "20px",
                                }}
                            >
                                <div>
                                    <label style={labelStyle}>Full Name</label>
                                    <input
                                        name="name"
                                        value={form.name}
                                        onChange={updateField}
                                        placeholder="Enter your name"
                                        style={inputStyle}
                                        required
                                    />
                                </div>

                                <div>
                                    <label style={labelStyle}>Phone Number</label>
                                    <input
                                        name="phone"
                                        type="tel"
                                        value={form.phone}
                                        onChange={updateField}
                                        placeholder="Contact number"
                                        style={inputStyle}
                                        required
                                    />
                                </div>

                                <div>
                                    <label style={labelStyle}>Email Address</label>
                                    <input
                                        name="email"
                                        type="email"
                                        value={form.email}
                                        onChange={updateField}
                                        placeholder="name@example.com"
                                        style={inputStyle}
                                        required
                                    />
                                </div>

                                <div>
                                    <label style={labelStyle}>Delivery Location / Address</label>
                                    <input
                                        name="location"
                                        value={form.location}
                                        onChange={updateField}
                                        placeholder="Where should the aid be delivered?"
                                        style={inputStyle}
                                        required
                                    />
                                </div>
                            </div>

                            <div style={{ marginTop: "20px" }}>
                                <label style={labelStyle}>Additional Information</label>
                                <textarea
                                    name="details"
                                    value={form.details}
                                    onChange={updateField}
                                    placeholder="Add item details, clothing size, medicine name, or other useful information..."
                                    rows="4"
                                    style={{ ...inputStyle, resize: "vertical" }}
                                />
                            </div>

                            <button
                                type="submit"
                                style={{
                                    width: "100%",
                                    marginTop: "26px",
                                    padding: "14px",
                                    border: "none",
                                    borderRadius: "11px",
                                    background: "#8653bd",
                                    color: "#ffffff",
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                }}
                            >
                                Submit Request
                            </button>
                        </form>
                    </>
                ) : (
                    <div
                        style={{
                            maxWidth: "700px",
                            margin: "60px auto",
                            padding: "45px 30px",
                            textAlign: "center",
                            background: "#ffffff",
                            border: "1px solid #eadcff",
                            borderRadius: "22px",
                            boxShadow: "0 10px 30px rgba(100, 60, 150, 0.07)",
                        }}
                    >
                        <div
                            style={{
                                width: "75px",
                                height: "75px",
                                margin: "0 auto 20px",
                                borderRadius: "50%",
                                background: "#eee2ff",
                                color: "#8653bd",
                                fontSize: "40px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            ✓
                        </div>

                        <h1 style={{ fontSize: "30px" }}>
                            Your Request Has Been Received
                        </h1>

                        <p style={{ color: "#756582", lineHeight: "1.8" }}>
                            Thank you for submitting your request. Our team will
                            review your needs and contact you soon about the next
                            steps.
                        </p>

                        <button
                            type="button"
                            onClick={() => navigate("/Home")}
                            style={{
                                marginTop: "20px",
                                padding: "13px 25px",
                                border: "none",
                                borderRadius: "10px",
                                background: "#8653bd",
                                color: "#ffffff",
                                fontWeight: "bold",
                                cursor: "pointer",
                            }}
                        >
                            Back to Home
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Beneficiary;
