
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DonateItems = () => {
    const navigate = useNavigate();

    const [step, setStep] = useState(1);
    const [submitted, setSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        donorName: "",
        phone: "",
        email: "",
        pickupLocation: "",
        category: "",
        itemName: "",
        quantity: "",
        description: "",
        expiryDate: "",
        deliveryMethod: "",
        pickupAddress: "",
    });

    const updateField = (event) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
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
        { label: "Dashboard", icon: "⌂", path: "/DonorDashboard" },
        { label: "Donate Items", icon: "♡", path: "/DonateItems" },
        { label: "Requests", icon: "▤", path: "/DonorRequests" },
        { label: "Deliveries", icon: "↗", path: "/DonorDeliveries" },
        { label: "Profile", icon: "○", path: "/DonorProfile" },
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        console.log("Donate Items details:", formData);
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
            {/* Donor Sidebar */}
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
                        marginBottom: "12px",
                    }}
                >
                    MENU
                </p>

                {sidebarLinks.map((item) => {
                    const active = item.path === "/DonateItems";

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
                    <strong>Help & Support</strong>
                    <p style={{ margin: "7px 0 0" }}>
                        Every donation can make a difference.
                    </p>
                </div>
            </aside>

            {/* Main Content */}
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
                                DONOR PORTAL / DONATE ITEMS
                            </p>

                            
                            
                            <h1
                                style={{
                                    fontSize: "clamp(27px, 3vw, 38px)",
                                    margin: "0 0 10px",
                                }}
                            >
                                {step === 1 ? (
                                    <>
                                        <span style={{ color: "#8653bd" }}>Donate Items</span>
                                        <span> Details</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Delivery </span>
                                        <span style={{ color: "#8653bd" }}>Preference</span>
                                    </>
                                )}
                            </h1>



                            <p
                                style={{
                                    color: "#756582",
                                    lineHeight: "1.7",
                                    margin: 0,
                                }}
                            >
                                {step === 1
                                    ? "Tell us about yourself and the items you would like to donate."
                                    : "Choose how you would like your donation to reach us."}
                            </p>
                        </div>

                        <form
                            onSubmit={
                                step === 1
                                    ? (event) => {
                                          event.preventDefault();
                                          setStep(2);
                                      }
                                    : handleSubmit
                            }
                            style={{
                                background: "#ffffff",
                                border: "1px solid #eadcff",
                                borderRadius: "20px",
                                padding: "clamp(20px, 3vw, 32px)",
                                boxShadow:
                                    "0 10px 30px rgba(100, 60, 150, 0.07)",
                                maxWidth: "1000px",
                                boxSizing: "border-box",
                            }}
                        >
                            {step === 1 ? (
                                <>
                                    <h2
                                        style={{
                                            fontSize: "20px",
                                            marginTop: 0,
                                            marginBottom: "22px",
                                        }}
                                    >
                                        Your Information
                                    </h2>

                                    <div
                                        style={{
                                            display: "grid",
                                            gridTemplateColumns:
                                                "repeat(auto-fit, minmax(220px, 1fr))",
                                            gap: "20px",
                                        }}
                                    >
                                        <div>
                                            <label style={labelStyle}>
                                                Full Name
                                            </label>
                                            <input
                                                name="donorName"
                                                value={formData.donorName}
                                                onChange={updateField}
                                                placeholder="Enter your name"
                                                style={inputStyle}
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label style={labelStyle}>
                                                Phone Number
                                            </label>
                                            <input
                                                name="phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={updateField}
                                                placeholder="Contact number"
                                                style={inputStyle}
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label style={labelStyle}>
                                                Email Address
                                            </label>
                                            <input
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={updateField}
                                                placeholder="name@example.com"
                                                style={inputStyle}
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label style={labelStyle}>
                                                Pickup Area / Location
                                            </label>
                                            <input
                                                name="pickupLocation"
                                                value={formData.pickupLocation}
                                                onChange={updateField}
                                                placeholder="Your area or address"
                                                style={inputStyle}
                                                required
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

                                    <h2
                                        style={{
                                            fontSize: "20px",
                                            marginTop: 0,
                                            marginBottom: "22px",
                                        }}
                                    >
                                        Item Details
                                    </h2>

                                    <div
                                        style={{
                                            display: "grid",
                                            gridTemplateColumns:
                                                "repeat(auto-fit, minmax(220px, 1fr))",
                                            gap: "20px",
                                        }}
                                    >
                                        <div>
                                            <label style={labelStyle}>
                                                Item Category
                                            </label>
                                            <select
                                                name="category"
                                                value={formData.category}
                                                onChange={updateField}
                                                style={inputStyle}
                                                required
                                            >
                                                <option value="">
                                                    Choose a category
                                                </option>
                                                <option value="Food">Food</option>
                                                <option value="Clothing">
                                                    Clothing
                                                </option>
                                                <option value="Medicine">
                                                    Medicine
                                                </option>
                                                <option value="School Supplies">
                                                    School Supplies
                                                </option>
                                                <option value="Furniture">
                                                    Furniture
                                                </option>
                                                <option value="Money">Money</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label style={labelStyle}>
                                                Item Name / Type
                                            </label>
                                            <input
                                                name="itemName"
                                                value={formData.itemName}
                                                onChange={updateField}
                                                placeholder="e.g. winter jackets"
                                                style={inputStyle}
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label style={labelStyle}>
                                                Quantity
                                            </label>
                                            <input
                                                name="quantity"
                                                type="number"
                                                min="0.01"
                                                step="any"
                                                value={formData.quantity}
                                                onChange={updateField}
                                                placeholder="Enter quantity"
                                                style={inputStyle}
                                                required
                                            />
                                        </div>

                                        {(formData.category === "Food" ||
                                            formData.category === "Medicine") && (
                                            <div>
                                                <label style={labelStyle}>
                                                    Expiry Date
                                                </label>
                                                <input
                                                    name="expiryDate"
                                                    type="date"
                                                    value={formData.expiryDate}
                                                    onChange={updateField}
                                                    min={new Date()
                                                        .toISOString()
                                                        .split("T")[0]}
                                                    style={inputStyle}
                                                    required
                                                />
                                            </div>
                                        )}
                                    </div>

                                    <div style={{ marginTop: "20px" }}>
                                        <label style={labelStyle}>
                                            Description / Condition
                                        </label>
                                        <textarea
                                            name="description"
                                            value={formData.description}
                                            onChange={updateField}
                                            placeholder="Describe the item, condition, sizes, or package details..."
                                            rows="4"
                                            style={{
                                                ...inputStyle,
                                                resize: "vertical",
                                            }}
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
                                        Continue to Delivery Preference →
                                    </button>
                                </>
                            ) : (
                                <>
                                    <h2
                                        style={{
                                            fontSize: "20px",
                                            marginTop: 0,
                                        }}
                                    >
                                        How would you like to hand over your
                                        donation?
                                    </h2>

                                    <label
                                        style={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            gap: "12px",
                                            padding: "18px",
                                            border: "1px solid #dfd0f2",
                                            borderRadius: "12px",
                                            marginTop: "20px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        <input
                                            type="radio"
                                            name="deliveryMethod"
                                            value="self"
                                            checked={
                                                formData.deliveryMethod ===
                                                "self"
                                            }
                                            onChange={updateField}
                                            required
                                        />
                                        <span>
                                            <strong>
                                                I will deliver it myself
                                            </strong>
                                            <br />
                                            <span
                                                style={{
                                                    color: "#756582",
                                                    fontSize: "14px",
                                                    lineHeight: "1.7",
                                                }}
                                            >
                                                I will bring the donation to
                                                the organization.
                                            </span>
                                        </span>
                                    </label>

                                    <label
                                        style={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            gap: "12px",
                                            padding: "18px",
                                            border: "1px solid #dfd0f2",
                                            borderRadius: "12px",
                                            marginTop: "14px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        <input
                                            type="radio"
                                            name="deliveryMethod"
                                            value="pickup"
                                            checked={
                                                formData.deliveryMethod ===
                                                "pickup"
                                            }
                                            onChange={updateField}
                                            required
                                        />
                                        <span>
                                            <strong>
                                                Please arrange a pickup
                                            </strong>
                                            <br />
                                            <span
                                                style={{
                                                    color: "#756582",
                                                    fontSize: "14px",
                                                    lineHeight: "1.7",
                                                }}
                                            >
                                                A volunteer can collect the
                                                donation from my address.
                                            </span>
                                        </span>
                                    </label>

                                    {formData.deliveryMethod === "pickup" && (
                                        <div style={{ marginTop: "22px" }}>
                                            <label style={labelStyle}>
                                                Pickup Address
                                            </label>
                                            <input
                                                name="pickupAddress"
                                                value={formData.pickupAddress}
                                                onChange={updateField}
                                                placeholder="Enter your full address"
                                                style={inputStyle}
                                                required
                                            />
                                        </div>
                                    )}

                                    <div
                                        style={{
                                            display: "flex",
                                            gap: "12px",
                                            flexWrap: "wrap",
                                            marginTop: "28px",
                                        }}
                                    >
                                        <button
                                            type="button"
                                            onClick={() => setStep(1)}
                                            style={{
                                                flex: 1,
                                                minWidth: "130px",
                                                padding: "14px",
                                                border: "1px solid #d8c1f3",
                                                borderRadius: "11px",
                                                background: "#ffffff",
                                                color: "#7544aa",
                                                fontWeight: "bold",
                                                cursor: "pointer",
                                            }}
                                        >
                                            ← Back
                                        </button>

                                        <button
                                            type="submit"
                                            style={{
                                                flex: 2,
                                                minWidth: "180px",
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
                                            Submit Items
                                        </button>
                                    </div>
                                </>
                            )}
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
                            boxShadow:
                                "0 10px 30px rgba(100, 60, 150, 0.07)",
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
                            Thank You for Your Donation!
                        </h1>

                        <p
                            style={{
                                color: "#756582",
                                lineHeight: "1.8",
                            }}
                        >
                            Your donation details have been submitted. Our
                            team will review the information and contact you
                            if needed.
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

export default DonateItems;
