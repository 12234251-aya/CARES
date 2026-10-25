
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const VolunteerDeliveries = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [deliveries, setDeliveries] = useState([
    {
      id: 204,
      category: "Food supplies",
      pickup: "Beirut",
      dropoff: "Byblos",
      items: "1 box",
      status: "Accepted",
    },
  ]);

  const sidebarLinks = [
    { label: "Dashboard", icon: "⌂", path: "/VolunteerDashboard" },
    { label: "Available Tasks", icon: "▤", path: "/VolunteerTasks" },
    { label: "My Deliveries", icon: "↗", path: "/VolunteerDeliveries" },
    { label: "Service Area", icon: "⌖", path: "/VolunteerServiceArea" },
    { label: "Profile", icon: "○", path: "/VolunteerProfile" },
  ];

  const statusSteps = ["Accepted", "Picked up", "Delivered"];

  const updateStatus = (id) => {
    setDeliveries((previous) =>
      previous.map((delivery) => {
        if (delivery.id !== id) return delivery;

        const currentIndex = statusSteps.indexOf(delivery.status);

        if (currentIndex < statusSteps.length - 1) {
          return {
            ...delivery,
            status: statusSteps[currentIndex + 1],
          };
        }

        return delivery;
      })
    );
  };

  const statusColors = {
    Accepted: { background: "#f4edff", color: "#8653bd" },
    "Picked up": { background: "#fff4df", color: "#9a6a13" },
    Delivered: { background: "#e9f7ed", color: "#39835b" },
  };

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
            Need help with a delivery? Contact our team for support.
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
          VOLUNTEER PORTAL / DELIVERIES
        </div>

        <h1 style={{ fontSize: "29px", margin: "0 0 10px" }}>
            <span style={{ color: "#8653bd" }}>My</span>
            <span> Deliveries</span>
        </h1>

        <p
          style={{
            color: "#81728f",
            fontSize: "14px",
            lineHeight: 1.7,
            marginBottom: "28px",
          }}
        >
          Track your accepted tasks and update each delivery milestone.
        </p>

        {deliveries.length === 0 ? (
          <section
            style={{
              background: "#ffffff",
              border: "1px solid #eadcff",
              borderRadius: "14px",
              padding: "35px 26px",
              maxWidth: "1000px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "34px", marginBottom: "12px" }}>↗</div>
            <h2 style={{ fontSize: "19px", margin: "0 0 10px" }}>
              No active deliveries yet
            </h2>
            <p style={{ color: "#81728f", fontSize: "14px" }}>
              Visit Available Tasks to accept a delivery.
            </p>
            <button
              onClick={() => navigate("/VolunteerTasks")}
              style={{
                background: "#8653bd",
                color: "#ffffff",
                border: "none",
                borderRadius: "9px",
                padding: "12px 20px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              View Available Tasks
            </button>
          </section>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
              maxWidth: "1000px",
            }}
          >
            {deliveries.map((delivery) => {
              const currentStep = statusSteps.indexOf(delivery.status);
              const finished = delivery.status === "Delivered";

              return (
                <section
                  key={delivery.id}
                  style={{
                    background: "#ffffff",
                    border: "1px solid #eadcff",
                    borderRadius: "14px",
                    padding: "26px",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "12px",
                      flexWrap: "wrap",
                      marginBottom: "20px",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: "12px",
                          color: "#9383a4",
                          marginBottom: "5px",
                        }}
                      >
                        DELIVERY #{delivery.id}
                      </div>
                      <h2
                        style={{
                          fontSize: "19px",
                          margin: 0,
                          color: "#38274b",
                        }}
                      >
                        {delivery.category}
                      </h2>
                    </div>

                    <span
                      style={{
                        padding: "7px 10px",
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: "bold",
                        ...statusColors[delivery.status],
                      }}
                    >
                      {delivery.status}
                    </span>
                  </div>

                  <div
                    style={{
                      padding: "16px",
                      borderRadius: "10px",
                      background: "#fbf8ff",
                      marginBottom: "22px",
                    }}
                  >
                    <div style={{ marginBottom: "15px" }}>
                      <div
                        style={{
                          fontSize: "12px",
                          color: "#9383a4",
                          marginBottom: "5px",
                        }}
                      >
                        PICKUP
                      </div>
                      <div style={{ fontSize: "14px", fontWeight: "bold" }}>
                        {delivery.pickup}
                      </div>
                    </div>

                    <div style={{ marginBottom: "15px" }}>
                      <div
                        style={{
                          fontSize: "12px",
                          color: "#9383a4",
                          marginBottom: "5px",
                        }}
                      >
                        DROP-OFF
                      </div>
                      <div style={{ fontSize: "14px", fontWeight: "bold" }}>
                        {delivery.dropoff}
                      </div>
                    </div>

                    <div>
                      <div
                        style={{
                          fontSize: "12px",
                          color: "#9383a4",
                          marginBottom: "5px",
                        }}
                      >
                        ITEMS
                      </div>
                      <div style={{ fontSize: "14px", fontWeight: "bold" }}>
                        {delivery.items}
                      </div>
                    </div>
                  </div>

                  <h3
                    style={{
                      fontSize: "15px",
                      margin: "0 0 16px",
                      color: "#38274b",
                    }}
                  >
                    Delivery progress
                  </h3>

                  <div style={{ marginBottom: "22px" }}>
                    {statusSteps.map((step, index) => {
                      const completed = index <= currentStep;

                      return (
                        <div
                          key={step}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            marginBottom: index === 2 ? 0 : "14px",
                          }}
                        >
                          <div
                            style={{
                              width: "25px",
                              height: "25px",
                              minWidth: "25px",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              background: completed ? "#8653bd" : "#eee7f5",
                              color: completed ? "#ffffff" : "#9383a4",
                              fontSize: "12px",
                              fontWeight: "bold",
                            }}
                          >
                            {completed ? "✓" : index + 1}
                          </div>

                          <span
                            style={{
                              fontSize: "14px",
                              color: completed ? "#59476c" : "#a093ae",
                              fontWeight: completed ? "bold" : "normal",
                            }}
                          >
                            {step}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => updateStatus(delivery.id)}
                    disabled={finished}
                    style={{
                      width: "100%",
                      background: finished ? "#e9f7ed" : "#8653bd",
                      color: finished ? "#39835b" : "#ffffff",
                      border: finished ? "1px solid #c8e8d1" : "none",
                      borderRadius: "9px",
                      padding: "13px 18px",
                      fontSize: "14px",
                      fontWeight: "bold",
                      cursor: finished ? "default" : "pointer",
                    }}
                  >
                    {finished ? "Delivery Completed ✓" : "Update Status"}
                  </button>
                </section>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
};

export default VolunteerDeliveries;
