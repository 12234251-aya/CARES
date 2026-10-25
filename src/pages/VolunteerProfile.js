
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const VolunteerProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [profile, setProfile] = useState({
    name: "",
    phone: "",
    transport: "",
    serviceArea: "",
    routeCoverage: "",
    availability: "",
  });

  const [saved, setSaved] = useState(false);

  const sidebarLinks = [
    { label: "Dashboard", icon: "⌂", path: "/VolunteerDashboard" },
    { label: "Available Tasks", icon: "▤", path: "/VolunteerTasks" },
    { label: "My Deliveries", icon: "↗", path: "/VolunteerDeliveries" },
    { label: "Service Area", icon: "⌖", path: "/VolunteerServiceArea" },
    { label: "Profile", icon: "○", path: "/VolunteerProfile" },
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

  const labelStyle = {
    display: "block",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#59476c",
  };

  const fields = [
    {
      key: "name",
      label: "Full name",
      placeholder: "Your full name",
      type: "text",
    },
    {
      key: "phone",
      label: "Phone number",
      placeholder: "Your phone number",
      type: "tel",
    },
    {
      key: "serviceArea",
      label: "From / Service area",
      placeholder: "e.g. Beirut",
      type: "text",
    },
    {
      key: "routeCoverage",
      label: "To / Route coverage",
      placeholder: "e.g. Byblos, Tripoli",
      type: "text",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        background: "#f8f3ff",
        fontFamily: "Arial, sans-serif",
        color: "#30243d",
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
            VOLUNTEER PORTAL
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
                fontSize: "14px",
                fontWeight: active ? "bold" : "normal",
                color: active ? "#ffffff" : "#655474",
                background: active ? "#8653bd" : "transparent",
                cursor: "pointer",
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
            Need help with your volunteer account? Contact our team for support.
          </p>
        </div>
      </aside>


      <main
        style={{
          flex: 1,
          minWidth: 0,
          padding: "32px",
          boxSizing: "border-box",
        }}
      >

        <div
          style={{
            color: "#8653bd",
            fontSize: "12px",
            fontWeight: "bold",
            letterSpacing: "1.5px",
            marginBottom: "10px",
          }}
        >
          VOLUNTEER PORTAL / PROFILE
        </div>

        <h1 style={{ fontSize: "29px", margin: "0 0 10px" }}>
          <span> Volunteer </span>
          <span style={{ color: "#8653bd" }}>Profile</span>
        </h1>

        <p
          style={{
            color: "#81728f",
            fontSize: "14px",
            lineHeight: 1.7,
            marginBottom: "28px",
          }}
        >
          Manage your contact details, transportation, availability, and
          delivery routes.
        </p>

        <section
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
                <label htmlFor={field.key} style={labelStyle}>
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
                  required
                />
              </div>
            ))}

            <div style={{ marginBottom: "20px" }}>
              <label htmlFor="transport" style={labelStyle}>
                Transport available
              </label>

              <select
                id="transport"
                value={profile.transport}
                onChange={(event) =>
                  updateField("transport", event.target.value)
                }
                style={inputStyle}
                required
              >
                <option value="">Choose your transport</option>
                <option value="Walking">Walking</option>
                <option value="Motorcycle">Motorcycle</option>
                <option value="Car">Car</option>
                <option value="Truck">Truck</option>
              </select>
            </div>

            <div style={{ marginBottom: "26px" }}>
              <label htmlFor="availability" style={labelStyle}>
                Availability
              </label>

              <select
                id="availability"
                value={profile.availability}
                onChange={(event) =>
                  updateField("availability", event.target.value)
                }
                style={inputStyle}
                required
              >
                <option value="">Choose your availability</option>
                <option value="Weekdays">Weekdays</option>
                <option value="Weekends">Weekends</option>
                <option value="Flexible">Flexible</option>
              </select>
            </div>

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
                Volunteer profile saved in this demo.
              </p>
            )}
          </form>
        </section>
      </main>
    </div>
  );
};

export default VolunteerProfile;
