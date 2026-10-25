
import { Link } from "react-router-dom";

const Home = () => (
    <main style={styles.page}>
        <section className="home-hero" style={styles.hero}>
            <div style={styles.heroCopy}>
                <span style={styles.eyebrow}>
                    <span style={styles.pulse} />
                    A LITTLE HELP CAN CHANGE A LOT
                </span>

                <h1 style={styles.title}>
                    Kindness looks good{" "}
                    <span style={styles.highlight}>on everyone.</span>
                </h1>

                <p style={styles.description}>
                    CARES brings donors, people in need, and volunteers together
                    so useful items can find a new home — and help can reach the
                    right hands.
                </p>

                <div style={styles.actions}>
                    <Link to="/Login" style={styles.primary}>
                        Be part of the change <span>↗</span>
                    </Link>

                    <Link to="/About" style={styles.secondary}>
                        Discover our mission
                    </Link>
                </div>

                <div className="trust-row" style={styles.trustRow}>
                    <span style={styles.trustIcon}>♥</span>
                    <span>
                        <strong>Give with care.</strong>
                        <small>Help with purpose. Build community.</small>
                    </span>
                </div>
            </div>

            <div
                className="cares-hero-art"
                style={styles.visual}
                aria-label="Illustration showing donations connecting with community needs"
            >
                <div style={styles.artGlow} />
                <div style={styles.artCircle}>
                    <span>♥</span>
                </div>

                <div
                    className="cares-art-card cares-art-donation"
                    style={styles.artDonation}
                >
                    <span style={styles.artIcon}>♧</span>
                    <span>
                        <strong>Donation ready</strong>
                        <small>Clothes · Food · Supplies</small>
                    </span>
                    <span style={styles.artCheck}>✓</span>
                </div>

                <div
                    className="cares-art-card cares-art-match"
                    style={styles.artMatch}
                >
                    <span style={styles.artMatchIcon}>↗</span>
                    <span>
                        <strong>A need met</strong>
                        <small>Matched with care</small>
                    </span>
                </div>

                <div style={styles.artPeople}>
                    <span style={styles.personOne}>♥</span>
                    <span style={styles.personTwo}>✦</span>
                    <span style={styles.personThree}>♡</span>
                </div>

                <div style={styles.artCaption}>
                    <span>✦</span> Every little act brings us closer
                </div>
            </div>

            <div style={styles.decorOne} />
            <div style={styles.decorTwo} />
        </section>

        <section style={styles.pillars}>
            <div style={styles.sectionIntro}>
                <span style={styles.sectionLabel}>HOW CARES HELPS</span>

                <h2 style={styles.sectionTitle}>
                    Good things happen when we{" "}
                    <span style={styles.highlight}>work together.</span>
                </h2>

                <p style={styles.sectionDescription}>
                    One simple connection can turn an unused item into
                    something someone truly needs.
                </p>
            </div>

            <div style={styles.cards}>
                {[
                    {
                        number: "01",
                        icon: "♡",
                        title: "Give what you can",
                        text: "Share useful items such as clothes, food, school supplies, furniture, and more.",
                    },
                    {
                        number: "02",
                        icon: "✧",
                        title: "Connect with a need",
                        text: "Help donations reach people whose requests match the available support.",
                    },
                    {
                        number: "03",
                        icon: "↗",
                        title: "Deliver with care",
                        text: "Volunteers help coordinate collection and delivery to the right place.",
                    },
                ].map((item) => (
                    <article
                        key={item.number}
                        className="cares-card"
                        style={styles.card}
                    >
                        <div style={styles.cardTop}>
                            <span style={styles.cardIcon}>{item.icon}</span>
                            <span style={styles.number}>{item.number}</span>
                        </div>

                        <h3 style={styles.cardTitle}>{item.title}</h3>
                        <p style={styles.cardText}>{item.text}</p>
                    </article>
                ))}
            </div>
        </section>
    </main>
);

const styles = {
    page: {
        background: "#fff",
        overflow: "hidden",
        fontFamily: '"DM Sans", sans-serif',
    },
    hero: {
        position: "relative",
        maxWidth: "1240px",
        minHeight: "555px",
        margin: "0 auto",
        padding: "70px 5% 76px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        gap: "48px",
    },
    heroCopy: {
        position: "relative",
        zIndex: 2,
        maxWidth: "590px",
    },
    eyebrow: {
        display: "inline-flex",
        alignItems: "center",
        gap: "9px",
        color: "#7951a6",
        background: "#f4edfc",
        border: "1px solid #e9dcf8",
        padding: "10px 14px",
        borderRadius: "999px",
        fontSize: "11px",
        fontWeight: "800",
        letterSpacing: "1.15px",
    },
    pulse: {
        width: "7px",
        height: "7px",
        background: "#8bca9d",
        borderRadius: "50%",
        boxShadow: "0 0 0 4px #e0f5e5",
    },
    title: {
        fontFamily: '"Manrope", sans-serif',
        color: "#29213a",
        fontSize: "clamp(42px, 5vw, 66px)",
        lineHeight: "1.08",
        letterSpacing: "-2.5px",
        fontWeight: "800",
        margin: "25px 0 20px",
    },
    highlight: {
        color: "#8052b4",
    },
    description: {
        color: "#71697d",
        fontSize: "17px",
        lineHeight: "1.85",
        maxWidth: "540px",
        margin: 0,
    },
    actions: {
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "13px",
        marginTop: "30px",
    },
    primary: {
        background: "#8052b4",
        color: "#fff",
        textDecoration: "none",
        borderRadius: "13px",
        padding: "15px 20px",
        fontWeight: "700",
        fontSize: "14px",
        boxShadow: "0 10px 22px rgba(128,82,180,.22)",
        display: "inline-flex",
        alignItems: "center",
        gap: "14px",
    },
    secondary: {
        color: "#5e4b70",
        textDecoration: "none",
        border: "1px solid #e5d9f0",
        background: "#fff",
        borderRadius: "13px",
        padding: "14px 18px",
        fontWeight: "700",
        fontSize: "14px",
    },
    trustRow: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginTop: "35px",
    },
    trustIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "38px",
        height: "38px",
        background: "#f2eafd",
        color: "#8052b4",
        borderRadius: "12px",
        fontSize: "18px",
    },
    visual: {
        position: "relative",
        minHeight: "410px",
        borderRadius: "34px 34px 90px 34px",
        overflow: "hidden",
        background:
            "linear-gradient(145deg, #f7f1ff 0%, #eee3fb 55%, #e4d2f6 100%)",
        border: "1px solid #eadcf7",
        boxShadow: "0 25px 55px rgba(57,36,78,.10)",
    },
    artGlow: {
        position: "absolute",
        width: "310px",
        height: "310px",
        borderRadius: "50%",
        background: "rgba(255,255,255,.55)",
        top: "35px",
        right: "-45px",
    },
    artCircle: {
        position: "absolute",
        width: "170px",
        height: "170px",
        borderRadius: "50%",
        top: "90px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "linear-gradient(135deg, #9a70c7, #7347a7)",
        border: "12px solid rgba(255,255,255,.6)",
        boxShadow: "0 18px 35px rgba(99,61,143,.22)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: "67px",
    },
    artDonation: {
        position: "absolute",
        left: "7%",
        top: "48px",
        display: "flex",
        alignItems: "center",
        gap: "11px",
        padding: "14px 15px",
        background: "rgba(255,255,255,.94)",
        border: "1px solid #fff",
        borderRadius: "16px",
        boxShadow: "0 12px 30px rgba(67,43,91,.10)",
    },
    artIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "39px",
        height: "39px",
        background: "#f0e7fb",
        color: "#8052b4",
        borderRadius: "12px",
        fontSize: "24px",
    },
    artCheck: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "22px",
        height: "22px",
        borderRadius: "50%",
        background: "#e1f5e8",
        color: "#328052",
        fontWeight: "800",
        fontSize: "12px",
    },
    artMatch: {
        position: "absolute",
        right: "5%",
        bottom: "82px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "13px 16px",
        background: "rgba(255,255,255,.96)",
        border: "1px solid #fff",
        borderRadius: "16px",
        boxShadow: "0 12px 30px rgba(67,43,91,.10)",
    },
    artMatchIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "38px",
        height: "38px",
        background: "#e7f5e9",
        color: "#43835a",
        borderRadius: "12px",
        fontSize: "24px",
    },
    artPeople: {
        position: "absolute",
        bottom: "50px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "12px",
        alignItems: "center",
    },
    personOne: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "49px",
        height: "49px",
        borderRadius: "50%",
        background: "#fff",
        color: "#8052b4",
        fontSize: "23px",
        boxShadow: "0 8px 20px rgba(67,43,91,.10)",
    },
    personTwo: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "59px",
        height: "59px",
        borderRadius: "50%",
        background: "#f8e5d9",
        color: "#b66d50",
        fontSize: "25px",
        boxShadow: "0 8px 20px rgba(67,43,91,.10)",
    },
    personThree: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "49px",
        height: "49px",
        borderRadius: "50%",
        background: "#e5f3e8",
        color: "#4f8c64",
        fontSize: "23px",
        boxShadow: "0 8px 20px rgba(67,43,91,.10)",
    },
    artCaption: {
        position: "absolute",
        bottom: "16px",
        left: 0,
        right: 0,
        textAlign: "center",
        color: "#72588d",
        fontWeight: "700",
        fontSize: "12px",
        letterSpacing: ".2px",
    },
    decorOne: {
        position: "absolute",
        width: "220px",
        height: "220px",
        borderRadius: "50%",
        background: "#f7f1fd",
        right: "-115px",
        top: "-95px",
        zIndex: 0,
    },
    decorTwo: {
        position: "absolute",
        width: "110px",
        height: "110px",
        borderRadius: "50%",
        border: "1px solid #e5d8f2",
        right: "46%",
        bottom: "8px",
        zIndex: 0,
    },
    pillars: {
        background: "#faf8fd",
        padding: "78px 5% 85px",
        borderTop: "1px solid #f0eaf6",
        borderBottom: "1px solid #f0eaf6",
    },
    sectionIntro: {
        maxWidth: "680px",
        margin: "0 auto",
        textAlign: "center",
    },
    sectionLabel: {
        color: "#8052b4",
        fontWeight: "800",
        fontSize: "11px",
        letterSpacing: "1.5px",
    },
    sectionTitle: {
        fontFamily: '"Manrope", sans-serif',
        color: "#30243d",
        fontSize: "clamp(27px, 3vw, 36px)",
        lineHeight: "1.3",
        margin: "14px 0",
    },
    sectionDescription: {
        color: "#777083",
        fontSize: "15px",
        lineHeight: "1.8",
        margin: 0,
    },
    cards: {
        maxWidth: "1120px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(235px, 1fr))",
        gap: "20px",
        margin: "36px auto 0",
    },
    card: {
        background: "#fff",
        border: "1px solid #ebe3f4",
        borderRadius: "22px",
        padding: "27px",
        boxShadow: "0 10px 28px rgba(52,32,75,.045)",
    },
    cardTop: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    cardIcon: {
        width: "48px",
        height: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "15px",
        background: "#f2eafd",
        color: "#8052b4",
        fontSize: "27px",
    },
    number: {
        color: "#c6b5d8",
        fontSize: "13px",
        fontWeight: "800",
        letterSpacing: "1px",
    },
    cardTitle: {
        fontFamily: '"Manrope", sans-serif',
        fontSize: "20px",
        margin: "23px 0 10px",
        color: "#30243d",
    },
    cardText: {
        color: "#777083",
        fontSize: "14px",
        lineHeight: "1.8",
        margin: 0,
    },
};

export default Home;
