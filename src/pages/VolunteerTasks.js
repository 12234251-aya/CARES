
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const VolunteerTasks = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [acceptedTasks, setAcceptedTasks] = useState([]);
  const [message, setMessage] = useState("");

  const sidebarLinks = [
    { label: "Dashboard", icon: "⌂", path: "/VolunteerDashboard" },
    { label: "Available Tasks", icon: "▤", path: "/VolunteerTasks" },
    { label: "My Deliveries", icon: "↗", path: "/VolunteerDeliveries" },
    { label: "Service Area", icon: "⌖", path: "/VolunteerServiceArea" },
    { label: "Profile", icon: "○", path: "/VolunteerProfile" },
  ];

  const tasks = [
    {
      id: 204,
      category: "Food supplies",
      pickup: "Beirut",
      dropoff: "Byblos",
      items: "1 box",
      icon: "♧",
      color: "#e9f7ed",
      iconColor: "#39835b",
    },
    {
      id: 207,
      category: "Clothes",
      pickup: "Tripoli",
      dropoff: "Mina",
      items: "2 bags",
      icon: "♡",
      color: "#f4edff",
      iconColor: "#8653bd",
    },
  ];

  const acceptTask = (task) => {
    if (acceptedTasks.includes(task.id)) {
      setMessage(`Task #${task.id} has already been accepted.`);
      return;
    }

    setAcceptedTasks((previous) => [...previous, task.id]);
    setMessage(
      `Task #${task.id} accepted successfully! You can track it in My Deliveries.`
    );
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
            Need help with a delivery task? Contact our team for support.
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
          VOLUNTEER PORTAL / TASKS
        </div>

        <h1 style={{ fontSize: "29px", margin: "0 0 10px" }}>
          <span> Available </span>
          <span style={{ color: "#8653bd" }}>Tasks</span>
        </h1>

        <p
          style={{
            color: "#81728f",
            fontSize: "14px",
            lineHeight: 1.7,
            marginBottom: "28px",
          }}
        >
          Find a delivery task that matches your route and availability.
        </p>

        {message && (
          <div
            role="status"
            style={{
              padding: "14px 16px",
              marginBottom: "22px",
              borderRadius: "10px",
              background: "#e9f7ed",
              border: "1px solid #c8e8d1",
              color: "#286b45",
              fontSize: "14px",
              lineHeight: 1.6,
            }}
          >
            {message}
          </div>
        )}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
            maxWidth: "1000px",
          }}
        >
          {tasks.map((task) => {
            const accepted = acceptedTasks.includes(task.id);

            return (
              <section
                key={task.id}
                style={{
                  background: "#ffffff",
                  border: "1px solid #eadcff",
                  borderRadius: "14px",
                  padding: "24px",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: task.color,
                      color: task.iconColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "27px",
                      flexShrink: 0,
                    }}
                  >
                    {task.icon}
                  </div>

                  <div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#9383a4",
                        marginBottom: "5px",
                      }}
                    >
                      TASK #{task.id}
                    </div>

                    <h2
                      style={{
                        fontSize: "19px",
                        margin: 0,
                        color: "#38274b",
                      }}
                    >
                      {task.category}
                    </h2>
                  </div>
                </div>

                <div
                  style={{
                    borderTop: "1px solid #f0e8f8",
                    paddingTop: "17px",
                  }}
                >
                  <div style={{ marginBottom: "16px" }}>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#9383a4",
                        marginBottom: "5px",
                      }}
                    >
                      PICKUP LOCATION
                    </div>

                    <div style={{ fontSize: "14px", fontWeight: "bold" }}>
                      {task.pickup}
                    </div>
                  </div>

                  <div style={{ marginBottom: "16px" }}>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#9383a4",
                        marginBottom: "5px",
                      }}
                    >
                      DROP-OFF LOCATION
                    </div>

                    <div style={{ fontSize: "14px", fontWeight: "bold" }}>
                      {task.dropoff}
                    </div>
                  </div>

                  <div style={{ marginBottom: "22px" }}>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#9383a4",
                        marginBottom: "5px",
                      }}
                    >
                      ITEMS TO DELIVER
                    </div>

                    <div style={{ fontSize: "14px", fontWeight: "bold" }}>
                      {task.items}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => acceptTask(task)}
                  disabled={accepted}
                  style={{
                    width: "100%",
                    background: accepted ? "#e9f7ed" : "#8653bd",
                    color: accepted ? "#39835b" : "#ffffff",
                    border: accepted ? "1px solid #c8e8d1" : "none",
                    borderRadius: "9px",
                    padding: "13px 18px",
                    fontSize: "14px",
                    fontWeight: "bold",
                    cursor: accepted ? "default" : "pointer",
                  }}
                >
                  {accepted ? "Task Accepted ✓" : "Accept Task"}
                </button>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default VolunteerTasks;
