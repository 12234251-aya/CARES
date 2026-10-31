
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
    width: "100%",
    boxSizing: "border-box",
  };

  const sidebarStyle = {
    width: "245px",
    minWidth: "245px",
    flexShrink: 0,
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
    minWidth: 0,
  };

  const sectionTitle = {
    fontSize: "17px",
    fontWeight: "bold",
    marginBottom: "16px",
    color: "#38274b",
  };

  return (
    <>
      <style>
        {`
          .donor-deliveries-page {
            min-height: 100vh;
            background: #f8f3ff;
            display: flex;
            font-family: Arial, sans-serif;
            color: #30243d;
            width: 100%;
            box-sizing: border-box;
          }

          .donor-deliveries-sidebar {
            width: 245px !important;
            min-width: 245px !important;
            flex-shrink: 0;
            background: #ffffff;
            border-right: 1px solid #eadcff;
            padding: 28px 16px;
            box-sizing: border-box;
          }

          .donor-deliveries-main {
            flex: 1;
            min-width: 0;
            padding: 38px 5%;
            box-sizing: border-box;
          }

          .donor-deliveries-link {
            transition: background 0.2s ease;
          }

          .donor-deliveries-link:hover {
            background: #f4edff !important;
            color: #8653bd !important;
          }

          .donor-deliveries-route {
            display: flex;
            align-items: center;
            gap: 12px;
            flex-wrap: wrap;
          }

          .donor-deliveries-location {
            flex: 1 1 180px;
            min-width: 0;
            background: #f4edff;
            border-radius: 12px;
            padding: 20px;
            box-sizing: border-box;
          }

          .donor-deliveries-arrow {
            color: #8653bd;
            font-size: 25px;
            font-weight: bold;
            padding: 4px;
          }

          @media (max-width: 720px) {
            .donor-deliveries-page {
              flex-direction: column;
              min-height: auto;
            }

            .donor-deliveries-sidebar {
              width: 100% !important;
              min-width: 0 !important;
              padding: 20px 16px;
              border-right: none;
              border-bottom: 1px solid #eadcff;
            }

            .donor-deliveries-link {
              width: 48% !important;
              display: inline-flex !important;
              vertical-align: top;
              margin-right: 1%;
              box-sizing: border-box;
              padding: 12px 8px !important;
              gap: 7px !important;
              font-size: 13px !important;
            }

            .donor-deliveries-help {
              margin-top: 18px !important;
            }

            .donor-deliveries-main {
              width: 100%;
              padding: 28px 18px;
            }

            .donor-deliveries-route {
              align-items: stretch;
            }

            .donor-deliveries-location {
              flex-basis: 100%;
            }

            .donor-deliveries-arrow {
              width: 100%;
              text-align: center;
              transform: rotate(90deg);
              padding: 0;
            }
          }

          @media (max-width: 420px) {
            .donor-deliveries-sidebar {
              padding: 18px 12px;
            }

            .donor-deliveries-main {
              padding: 24px 14px;
            }

            .donor-deliveries-link {
              font-size: 12px !important;
              padding: 11px 6px !important;
            }

            .donor-deliveries-card {
              padding: 18px !important;
            }
          }
        `}
      </style>

      <div className="donor-deliveries-page">
        {/* Sidebar */}
        <aside className="donor-deliveries-sidebar">
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
                className="donor-deliveries-link"
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
            className="donor-deliveries-help"
            style={{
              marginTop: "35px",
              padding: "16px",
              borderRadius: "12px",
              background: "#f4edff",
            }}
          >
            <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
              Help &amp; Support
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "#756487",
                lineHeight: 1.6,
              }}
            >
              Need help with a donation or delivery? Contact our team for support.
            </div>
          </div>
        </aside>

        {/* Deliveries Content */}
        <main className="donor-deliveries-main">
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

          {/* Delivery Information */}
          <section className="donor-deliveries-card" style={cardStyle}>
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
                <div style={sectionTitle}>
                  Donation #D-204 — Cooking oil
                </div>
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

          {/* Delivery Route */}
          <section className="donor-deliveries-card" style={cardStyle}>
            <div style={sectionTitle}>Delivery route</div>

            <div className="donor-deliveries-route">
              <div className="donor-deliveries-location">
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

              <div className="donor-deliveries-arrow">→</div>

              <div className="donor-deliveries-location">
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

          {/* Assigned Volunteer */}
          <section className="donor-deliveries-card" style={cardStyle}>
            <div style={sectionTitle}>Assigned volunteer</div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  flexShrink: 0,
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

          {/* Contact / Handover */}
          <section className="donor-deliveries-card" style={cardStyle}>
            <div style={sectionTitle}>Contact / handover</div>
            <div style={{ color: "#81728f", fontSize: "14px" }}>
              Contact details after assignment
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default DonorDeliveries;
