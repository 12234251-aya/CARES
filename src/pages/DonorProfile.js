
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const DonorProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    pickupLocation: "",
  });

  const [saved, setSaved] = useState(false);

  const sidebarLinks = [
    { label: "Dashboard", icon: "⌂", path: "/DonorDashboard" },
    { label: "Donate Items", icon: "♡", path: "/DonateItems" },
    { label: "Requests", icon: "▤", path: "/DonorRequests" },
    { label: "Deliveries", icon: "↗", path: "/DonorDeliveries" },
    { label: "Profile", icon: "○", path: "/DonorProfile" },
  ];

  const updateField = (field, value) => {
    setProfile((previous) => ({ ...previous, [field]: value }));
    setSaved(false);
  };

  const inputStyle = {
    width: "100%",
    padding: "13px 14px",
    border: "1px solid #e4d7f2",
    borderRadius: "9px",
    fontSize: "14px",
    outline: "none",
    boxSizing: "border-box",
    marginTop: "8px",
    background: "#ffffff",
  };

  const fields = [
    { key: "name", label: "Full name", placeholder: "Your full name", type: "text" },
    { key: "email", label: "Email address", placeholder: "name@email.com", type: "email" },
    { key: "phone", label: "Phone number", placeholder: "Your phone number", type: "tel" },
    { key: "pickupLocation", label: "Default pickup location", placeholder: "Area / address", type: "text" },
  ];

  return (
    <div
      className="donor-profile-page"
      style={{
        minHeight: "calc(100vh - 180px)",
        display: "flex",
        background: "#f8f3ff",
        fontFamily: "Arial, sans-serif",
        color: "#302044",
      }}
    >
      <style>{`
        @media (max-width: 720px) {
          .donor-profile-page {
            flex-direction: column !important;
            width: 100%;
          }

          .donor-profile-sidebar {
            width: 100% !important;
            min-width: 0 !important;
            border-right: none !important;
            border-bottom: 1px solid #eadcff;
            padding: 20px 16px !important;
          }

          .donor-profile-sidebar > button {
            width: calc(50% - 5px) !important;
            display: inline-flex !important;
            vertical-align: top;
            margin-right: 5px;
            box-sizing: border-box;
            font-size: 13px !important;
            padding: 12px 9px !important;
          }

          .donor-profile-sidebar > button:nth-of-type(even) {
            margin-right: 0;
          }

          .donor-profile-sidebar .donor-profile-support {
            margin-top: 18px !important;
          }

          .donor-profile-main {
            width: 100%;
            padding: 25px 18px !important;
          }

          .donor-profile-main h1 {
            font-size: 25px !important;
          }

          .donor-profile-card {
            padding: 20px !important;
          }
        }

        @media (max-width: 380px) {
          .donor-profile-sidebar > button {
            font-size: 12px !important;
            gap: 7px !important;
            padding: 11px 7px !important;
          }

          .donor-profile-main {
            padding: 22px 13px !important;
          }

          .donor-profile-card {
            padding: 16px !important;
          }
        }
      `}</style>

      <aside
        className="donor-profile-sidebar"
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

        <div
          style={{
            fontSize: "11px",
            color: "#a093ae",
            marginBottom: "12px",
            paddingLeft: "12px",
          }}
        >
          MENU
        </div>

        {sidebarLinks.map((link) => {
          const active = location.pathname === link.path;

          return (
            <button
              key={link.path}
              type="button"
              onClick={() => navigate(link.path)}
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
                cursor: "pointer",
                fontSize: "14px",
                background: active ? "#8653bd" : "transparent",
                color: active ? "#ffffff" : "#655474",
                fontWeight: active ? "bold" : "normal",
              }}
            >
              <span style={{ fontSize: "19px", width: "22px" }}>
                {link.icon}
              </span>
              {link.label}
            </button>
          );
        })}

        <div
          className="donor-profile-support"
          style={{
            marginTop: "35px",
            padding: "15px 12px",
            borderRadius: "12px",
            background: "#f4edff",
            fontSize: "13px",
            lineHeight: 1.6,
          }}
        >
          <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
            Help & Support
          </div>
          <div style={{ fontSize: "12px", color: "#756487", lineHeight: 1.6 }}>
            Need help with your account? Contact our team for support.
          </div>
        </div>
      </aside>

      <main
        className="donor-profile-main"
        style={{
          flex: 1,
          minWidth: 0,
          padding: "38px 5%",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            color: "#8653bd",
            fontSize: "12px",
            fontWeight: "bold",
            letterSpacing: "1px",
            margin: "0 0 10px",
          }}
        >
          DONOR PORTAL / PROFILE
        </div>

        <h1 style={{ fontSize: "29px", margin: "0 0 10px" }}>
          <span style={{ color: "#8653bd" }}>Donor</span>
          <span> Profile</span>
        </h1>

        <p
          style={{
            color: "#81728f",
            fontSize: "14px",
            lineHeight: 1.7,
            marginBottom: "28px",
          }}
        >
          Manage your contact information and default pickup location.
        </p>

        <section
          className="donor-profile-card"
          style={{
            background: "#ffffff",
            border: "1px solid #eadcff",
            borderRadius: "14px",
            padding: "26px",
            width: "100%",
            maxWidth: "1000px",
            boxSizing: "border-box",
          }}
        >
          <h2
            style={{
              fontSize: "18px",
              margin: "0 0 24px",
              color: "#38274b",
            }}
          >
            Personal information
          </h2>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSaved(true);
            }}
          >
            {fields.map((field) => (
              <div key={field.key} style={{ marginBottom: "20px" }}>
                <label
                  htmlFor={field.key}
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "#59476c",
                  }}
                >
                  {field.label}
                </label>

                <input
                  id={field.key}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={profile[field.key]}
                  onChange={(event) =>
                    updateField(field.key, event.target.value)
                  }
                  style={inputStyle}
                />
              </div>
            ))}

            <button
              type="submit"
              style={{
                background: "#8653bd",
                color: "#ffffff",
                border: "none",
                borderRadius: "9px",
                padding: "13px 22px",
                fontSize: "14px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Save Profile
            </button>

            {saved && (
              <p
                style={{
                  color: "#39835b",
                  fontSize: "14px",
                  marginTop: "16px",
                }}
              >
                Profile saved in this demo.
              </p>
            )}
          </form>
        </section>
      </main>
    </div>
  );
};

export default DonorProfile;
