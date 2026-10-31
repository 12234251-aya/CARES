
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const VolunteerServiceArea = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [service, setService] = useState({
    from: "",
    destinations: [],
    notes: "",
  });

  const [saved, setSaved] = useState(false);

  const sidebarLinks = [
    { label: "Dashboard", icon: "⌂", path: "/VolunteerDashboard" },
    { label: "Available Tasks", icon: "▤", path: "/VolunteerTasks" },
    { label: "My Deliveries", icon: "↗", path: "/VolunteerDeliveries" },
    { label: "Service Area", icon: "⌖", path: "/VolunteerServiceArea" },
    { label: "Profile", icon: "○", path: "/VolunteerProfile" },
  ];

  const areas = [
    "Beirut",
    "Mount Lebanon",
    "Tripoli",
    "Akkar",
    "Bekaa",
    "Zahle",
    "South Lebanon",
    "Saida",
  ];

  const updateDestination = (area, checked) => {
    setService((previous) => ({
      ...previous,
      destinations: checked
        ? [...previous.destinations, area]
        : previous.destinations.filter((item) => item !== area),
    }));
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

  return (
    <div
      className="volunteer-service-page"
      style={{
        minHeight: "100vh",
        display: "flex",
        background: "#f8f3ff",
        fontFamily: "Arial, sans-serif",
        color: "#30243d",
      }}
    >
      <style>{`
        @media (max-width: 720px) {
          .volunteer-service-page {
            flex-direction: column !important;
          }

          .volunteer-service-sidebar {
            width: 100% !important;
            min-width: 0 !important;
            border-right: none !important;
            border-bottom: 1px solid #eadcff !important;
            padding: 20px 16px !important;
          }

          .volunteer-service-sidebar .sidebar-links {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 7px;
          }

          .volunteer-service-sidebar .sidebar-link {
            width: 100%;
            margin-bottom: 0 !important;
            box-sizing: border-box;
            font-size: 13px !important;
            padding: 11px 8px !important;
            gap: 7px !important;
          }

          .volunteer-service-sidebar .help-box {
            margin-top: 20px !important;
          }

          .volunteer-service-main {
            width: 100%;
            padding: 22px 16px !important;
          }

          .volunteer-service-form {
            padding: 20px !important;
          }

          .volunteer-service-destinations {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 10px !important;
          }

          .volunteer-service-destinations label {
            min-width: 0;
            box-sizing: border-box;
            padding: 11px !important;
            font-size: 13px !important;
          }

          .volunteer-service-save {
            width: 100%;
          }
        }

        @media (max-width: 420px) {
          .volunteer-service-sidebar .sidebar-links {
            grid-template-columns: 1fr;
          }

          .volunteer-service-sidebar .sidebar-link {
            font-size: 14px !important;
          }

          .volunteer-service-main {
            padding: 20px 12px !important;
          }

          .volunteer-service-main h1 {
            font-size: 25px !important;
          }

          .volunteer-service-form {
            padding: 16px !important;
          }

          .volunteer-service-destinations {
            grid-template-columns: 1fr !important;
          }

          .volunteer-service-destinations label {
            font-size: 14px !important;
          }
        }
      `}</style>

      <aside
        className="volunteer-service-sidebar"
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

        <div className="sidebar-links">
          {sidebarLinks.map((link) => {
            const active = location.pathname === link.path;

            return (
              <button
                key={link.path}
                type="button"
                className="sidebar-link"
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
        </div>

        <div
          className="help-box"
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
            Need help with your service area? Contact our team for support.
          </p>
        </div>
      </aside>

      <main
        className="volunteer-service-main"
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
          VOLUNTEER PORTAL / SERVICE AREA
        </div>

        <h1 style={{ fontSize: "29px", margin: "0 0 10px" }}>
          <span> My </span>
          <span style={{ color: "#8653bd" }}>Service Area</span>
        </h1>

        <p
          style={{
            color: "#81728f",
            fontSize: "14px",
            lineHeight: 1.7,
            marginBottom: "28px",
          }}
        >
          Choose your starting area and the destinations you can cover when
          delivering aid.
        </p>

        <section
          className="volunteer-service-form"
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
            Route coverage
          </h2>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSaved(true);
            }}
          >
            <div style={{ marginBottom: "24px" }}>
              <label
                htmlFor="serviceFrom"
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#59476c",
                }}
              >
                Starting area
              </label>

              <select
                id="serviceFrom"
                value={service.from}
                onChange={(event) => {
                  setService((previous) => ({
                    ...previous,
                    from: event.target.value,
                  }));
                  setSaved(false);
                }}
                style={inputStyle}
                required
              >
                <option value="">Choose your starting area</option>
                {areas.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#59476c",
                  marginBottom: "8px",
                }}
              >
                Destinations you can cover
              </div>

              <p
                style={{
                  fontSize: "13px",
                  color: "#81728f",
                  lineHeight: 1.6,
                  margin: "0 0 16px",
                }}
              >
                Select all the areas you are willing to deliver to.
              </p>

              <div
                className="volunteer-service-destinations"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: "12px",
                }}
              >
                {areas.map((area) => {
                  const checked = service.destinations.includes(area);

                  return (
                    <label
                      key={area}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "13px",
                        border: checked
                          ? "1px solid #b99cdd"
                          : "1px solid #eadcff",
                        borderRadius: "9px",
                        background: checked ? "#f4edff" : "#ffffff",
                        color: "#59476c",
                        fontSize: "14px",
                        cursor: "pointer",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={(event) =>
                          updateDestination(area, event.target.checked)
                        }
                        style={{
                          accentColor: "#8653bd",
                          width: "16px",
                          height: "16px",
                          flexShrink: 0,
                        }}
                      />
                      {area}
                    </label>
                  );
                })}
              </div>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <label
                htmlFor="routeNotes"
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#59476c",
                }}
              >
                Additional route details (optional)
              </label>

              <textarea
                id="routeNotes"
                rows="3"
                placeholder="e.g. I can deliver to nearby areas on weekends."
                value={service.notes}
                onChange={(event) => {
                  setService((previous) => ({
                    ...previous,
                    notes: event.target.value,
                  }));
                  setSaved(false);
                }}
                style={{
                  ...inputStyle,
                  resize: "vertical",
                }}
              />
            </div>

            <button
              className="volunteer-service-save"
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
              Save Service Area
            </button>

            {saved && (
              <p
                role="status"
                style={{
                  color: "#39835b",
                  fontSize: "14px",
                  marginTop: "16px",
                  lineHeight: 1.6,
                }}
              >
                Your service area has been saved in this demo.
              </p>
            )}
          </form>
        </section>
      </main>
    </div>
  );
};

export default VolunteerServiceArea;
