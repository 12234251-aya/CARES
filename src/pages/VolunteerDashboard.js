
import React from "react";
import { useNavigate } from "react-router-dom";

function VolunteerDashboard() {
  const navigate = useNavigate();

  const sidebarLinks = [
    { label: "Dashboard", icon: "⌂", path: "/VolunteerDashboard" },
    { label: "Available Tasks", icon: "▤", path: "/VolunteerTasks" },
    { label: "My Deliveries", icon: "↗", path: "/VolunteerDeliveries" },
    { label: "Service Area", icon: "⌖", path: "/VolunteerServiceArea" },
    { label: "Profile", icon: "○", path: "/VolunteerProfile" },
  ];

  const stats = [
    {
      title: "Available Tasks",
      value: "2",
      icon: "▤",
      color: "#eee5ff",
    },
    {
      title: "Accepted Tasks",
      value: "0",
      icon: "✓",
      color: "#e4f5e9",
    },
    {
      title: "Completed Deliveries",
      value: "0",
      icon: "↗",
      color: "#fff0df",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f8f3ff",
        fontFamily: "Arial, sans-serif",
        color: "#30243d",
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
          const active = link.label === "Dashboard";

          return (
            <button
              key={link.label}
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
            Your time and effort help connect donations with people in need.
            Thank you for being part of CARES.
          </p>
        </div>
      </aside>


      {/* Main Content */}
      <main
        style={{
          flex: 1,
          minWidth: 0,
          padding: "32px",
          boxSizing: "border-box",
        }}
      >
        {/* Welcome Section */}
        <div>
          <p
            style={{
              color: "#8653bd",
              fontSize: "12px",
              fontWeight: "bold",
              letterSpacing: "1.5px",
              marginBottom: "10px",
            }}
          >
            VOLUNTEER DASHBOARD
          </p>

          <h1 style={{ fontSize: "29px", margin: "0 0 10px" }}>
            <span style={{ color: "#8653bd" }}>Welcome Back,</span>
            <span> Volunteer!</span>
        </h1>

          <p style={{ color: "#786987", fontSize: "15px", margin: 0 }}>
            Thank you for helping us deliver aid to people in need.
          </p>
        </div>

        {/* Statistics Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
            gap: "20px",
            marginBottom: "35px",
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.title}
              style={{
                background: "#ffffff",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 5px 18px rgba(80, 45, 110, 0.06)",
              }}
            >
              <div
                style={{
                  width: "45px",
                  height: "45px",
                  borderRadius: "12px",
                  background: stat.color,
                  color: "#8653bd",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "23px",
                  marginBottom: "18px",
                }}
              >
                {stat.icon}
              </div>

              <p
                style={{
                  color: "#786987",
                  fontSize: "14px",
                  margin: "0 0 8px",
                }}
              >
                {stat.title}
              </p>

              <h2 style={{ fontSize: "30px", margin: 0 }}>{stat.value}</h2>
            </div>
          ))}
        </div>

        {/* Closing Message */}
        <div
          style={{
            marginTop: "30px",
            padding: "22px",
            borderRadius: "14px",
            background: "#eee5ff",
            color: "#665080",
          }}
        >
          <h3 style={{ margin: "0 0 8px", fontSize: "17px" }}>
            Every Delivery Makes a Difference!
          </h3>

          <p style={{ margin: 0, fontSize: "14px", lineHeight: "1.7" }}>
            Your time and effort help connect donations with people who need
            them. Thank you for being part of CARES.
          </p>
        </div>
      </main>
    </div>
  );
}

export default VolunteerDashboard;
