
const Footer = () => {
    return (
        <footer
            style={{
                background: "linear-gradient(135deg, #eee2ff, #e5d2ff)",
                padding: "35px 7% 20px",
                color: "#302044",
                fontFamily: "Arial, sans-serif",
                boxSizing: "border-box",
            }}
        >
            <div style={{ maxWidth: "500px", marginBottom: "25px" }}>
                <h2
                    style={{
                        margin: "0 0 12px",
                        fontSize: "27px",
                        fontWeight: "800",
                    }}
                >
                    <span style={{ color: "#8653bd" }}>♥</span> CARES
                </h2>

                <p
                    style={{
                        margin: 0,
                        color: "#665773",
                        lineHeight: "1.7",
                        fontSize: "15px",
                    }}
                >
                    Connecting donations, people in need, and volunteers
                    to build a caring community.
                </p>
            </div>

            <div
                style={{
                    borderTop: "1px solid #d8c1f3",
                    paddingTop: "18px",
                    textAlign: "center",
                    color: "#665773",
                    fontSize: "14px",
                }}
            >
                © {new Date().getFullYear()} CARES — Community Aid and Rescue
                System. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
