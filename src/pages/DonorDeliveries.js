
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const DonorDeliveries = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarLinks = [
    { label: "Dashboard", icon: "⌂", path: "/DonorDashboard" },
    { label: "Donate Items", icon: "♡", path: "/DonateItems" },
    { label: "Requests", icon: "▤", path: "/DonorRequests" },
    { label: "Deliveries", icon: "↗", path: "/DonorDeliveries" },
    { label: "Profile", icon: "○", path: "/DonorProfile" },
  ];

  const pageStyle = {
    minHeight: "100vh",
    background: "#f8f3ff",
    display: "flex",
    fontFamily: "Arial, sans-serif",
    color: "#30243d",
  };

  const sidebarStyle = {
    width: "245px",
    minWidth: "245px",
    background: "#ffffff",
    borderRight: "1px solid #eadcff",
    padding: "28px 16px",
    boxSizing: "border-box",
  };

  const cardStyle = {
    background: "#ffffff",
    border: "1px solid #eadcff",
    borderRadius: "14px",
    padding: "22px",
    marginBottom: "20px",
    boxSizing: "border-box",
  };

  const sectionTitle = {
    fontSize: "17px",
    fontWeight: "bold",
    marginBottom: "16px",
    color: "#38274b",
  };

  return (
    <div style={pageStyle}>
      <aside style={sidebarStyle}>
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
              onClick={() => navigate(link.path)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                width: "100%",
                padding: "13px 14px",
                marginBottom: "7px",
                border: "none",
                borderRadius: "9px",
                textAlign: "left",
                cursor: "pointer",
                fontSize: "14px",
                background: active ? "#8653bd" : "transparent",
                color: active ? "#ffffff" : "#665777",
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
          style={{
            marginTop: "35px",
            padding: "16px",
            borderRadius: "12px",
            background: "#f4edff",
          }}
        >
          <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
            Help & Support
          </div>
          <div style={{ fontSize: "12px", color: "#756487", lineHeight: 1.6 }}>
            Need help with a donation or delivery? Contact our team for support.
          </div>
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
        <div
          style={{
            color: "#8653bd",
            fontSize: "13px",
            fontWeight: "bold",
            letterSpacing: "1px",
            margin: "0 0 10px",
          }}
        >
          DONOR PORTAL / DELIVERIES
        </div>

        <h1 style={{ fontSize: "29px", margin: "0 0 10px" }}>
          <span style={{ color: "#8653bd" }}>Delivery</span>
          <span> Coordination</span>
        </h1>

        <p
          style={{
            color: "#81728f",
            fontSize: "14px",
            lineHeight: 1.7,
            marginBottom: "28px",
          }}
        >
          Check who will pick up your donation, where it will be delivered,
          and its current handover status.
        </p>

        <section style={cardStyle}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <div style={sectionTitle}>Donation #D-204 — Cooking oil</div>
              <div
                style={{
                  color: "#756487",
                  fontSize: "14px",
                  lineHeight: 1.8,
                }}
              >
                Pickup: Donor, Tripoli
                <br />
                Drop-off: Beneficiary, Mina
              </div>
            </div>

            <span
              style={{
                background: "#fff1d6",
                color: "#99640b",
                borderRadius: "20px",
                padding: "8px 13px",
                fontSize: "11px",
                fontWeight: "bold",
              }}
            >
              IN PROGRESS
            </span>
          </div>
        </section>

        <section style={cardStyle}>
          <div style={sectionTitle}>Delivery route</div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                flex: "1 1 180px",
                background: "#f4edff",
                borderRadius: "12px",
                padding: "20px",
              }}
            >
              <div
                style={{
                  color: "#8653bd",
                  fontSize: "11px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                DONOR PICKUP
              </div>
              <div style={{ fontSize: "17px", fontWeight: "bold" }}>
                Tripoli
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "#756487",
                  marginTop: "6px",
                }}
              >
                Area A
              </div>
            </div>

            <div
              style={{
                color: "#8653bd",
                fontSize: "25px",
                fontWeight: "bold",
                padding: "4px",
              }}
            >
              →
            </div>

            <div
              style={{
                flex: "1 1 180px",
                background: "#f4edff",
                borderRadius: "12px",
                padding: "20px",
              }}
            >
              <div
                style={{
                  color: "#8653bd",
                  fontSize: "11px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                BENEFICIARY
              </div>
              <div style={{ fontSize: "17px", fontWeight: "bold" }}>
                Mina
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "#756487",
                  marginTop: "6px",
                }}
              >
                Area B
              </div>
            </div>
          </div>
        </section>

        <section style={cardStyle}>
          <div style={sectionTitle}>Assigned volunteer</div>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#f0e4ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#8653bd",
                fontSize: "22px",
              }}
            >
              ♙
            </div>
            <div>
              <div style={{ fontWeight: "bold", marginBottom: "5px" }}>
                Rami K.
              </div>
              <div style={{ color: "#81728f", fontSize: "13px" }}>
                Car
              </div>
            </div>
          </div>
        </section>

        <section style={cardStyle}>
          <div style={sectionTitle}>Contact / handover</div>
          <div style={{ color: "#81728f", fontSize: "14px" }}>
            Contact details after assignment
          </div>
        </section>
      </main>
    </div>
  );
};

export default DonorDeliveries;
