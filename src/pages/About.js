
import { Link } from "react-router-dom";

const About = () => (
    <main style={styles.page}>
        <section className="about-hero" style={styles.hero}>
            <div style={styles.heroCopy}>
                <span style={styles.eyebrow}>OUR STORY · OUR COMMUNITY</span>

                <h1 style={styles.title}>
                    Care becomes powerful when{" "}
                    <span style={styles.highlight}>we connect.</span>
                </h1>

                <p style={styles.intro}>
                    Community Aid and Rescue System (CARES) is designed to bring
                    donors, people in need, and volunteers together — making it
                    easier for useful donations to reach the people who need them.
                </p>

                <Link to="/Login" style={styles.button}>
                    Be part of CARES <span>↗</span>
                </Link>
            </div>

            <div
                className="cares-about-art"
                style={styles.imageWrap}
                aria-label="Illustration of a connected community helping one another"
            >
                <div style={styles.aboutHalo} />
                <div style={styles.aboutHeart}>♥</div>

                <div style={styles.aboutMiniCard}>
                    <span style={styles.aboutMiniIcon}>♧</span>
                    <span>
                        <strong>Give what you can</strong>
                        <small>Useful items, new purpose</small>
                    </span>
                </div>

                <div style={styles.aboutMiniCardRight}>
                    <span style={styles.aboutMiniIconGreen}>✓</span>
                    <span>
                        <strong>Help reaches people</strong>
                        <small>With care and connection</small>
                    </span>
                </div>

                <div style={styles.aboutDots}>✦　♡　✦</div>

                <div style={styles.imageNote}>
                    <span style={styles.noteIcon}>♥</span>
                    <span>
                        <strong>People first</strong>
                        <small>Every act of kindness matters</small>
                    </span>
                </div>
            </div>
        </section>

        <section style={styles.missionSection}>
            <div style={styles.missionCopy}>
                <span style={styles.label}>WHY WE EXIST</span>

                <h2 style={styles.heading}>
                    A simpler way to turn generosity into support.
                </h2>

                <p style={styles.paragraph}>
                    Sometimes people have items they no longer need, while
                    others are looking for exactly those essentials. CARES aims
                    to make that connection easier and support the delivery
                    process through volunteers.
                </p>
            </div>

            <div style={styles.values}>
                <article className="cares-card" style={styles.valueCard}>
                    <span style={styles.valueIcon}>♡</span>
                    <h3 style={styles.cardTitle}>Compassion</h3>
                    <p style={styles.cardText}>
                        We believe everyone deserves dignity, care, and support.
                    </p>
                </article>

                <article className="cares-card" style={styles.valueCard}>
                    <span style={styles.valueIcon}>✧</span>
                    <h3 style={styles.cardTitle}>Connection</h3>
                    <p style={styles.cardText}>
                        We bring available donations closer to real community needs.
                    </p>
                </article>

                <article className="cares-card" style={styles.valueCard}>
                    <span style={styles.valueIcon}>↗</span>
                    <h3 style={styles.cardTitle}>Action</h3>
                    <p style={styles.cardText}>
                        We make room for volunteers to help aid reach its destination.
                    </p>
                </article>
            </div>
        </section>

        <section style={styles.process}>
            <div style={styles.processIntro}>
                <span style={styles.label}>HOW IT WORKS</span>

                <h2 style={styles.heading}>
                    From giving to getting help.
                </h2>

                <p style={styles.paragraph}>
                    A clear process helps everyone understand how they can take part.
                </p>
            </div>

            <div style={styles.steps}>
                {[
                    {
                        number: "01",
                        title: "Share a donation",
                        text: "Donors provide details about the useful items they can offer.",
                    },
                    {
                        number: "02",
                        title: "Match a need",
                        text: "The system helps connect available donations with requests.",
                    },
                    {
                        number: "03",
                        title: "Coordinate delivery",
                        text: "Volunteers can help collect, transport, and distribute aid.",
                    },
                ].map((step) => (
                    <article
                        key={step.number}
                        className="cares-card"
                        style={styles.step}
                    >
                        <span style={styles.number}>{step.number}</span>
                        <h3 style={styles.cardTitle}>{step.title}</h3>
                        <p style={styles.cardText}>{step.text}</p>
                    </article>
                ))}
            </div>
        </section>
    </main>
);

const styles = {
    page: {
        color: "#29213a",
        background: "#fff",
        fontFamily: '"DM Sans", sans-serif',
        overflow: "hidden",
    },
    hero: {
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "68px 5% 75px",
        display: "grid",
        gridTemplateColumns: "1fr .9fr",
        gap: "55px",
        alignItems: "center",
    },
    heroCopy: {
        maxWidth: "590px",
    },
    eyebrow: {
        display: "inline-block",
        padding: "9px 13px",
        borderRadius: "999px",
        background: "#f3ebfc",
        color: "#8052b4",
        fontSize: "11px",
        fontWeight: "800",
        letterSpacing: "1.2px",
    },
    title: {
        fontFamily: '"Manrope", sans-serif',
        fontSize: "clamp(36px, 4.5vw, 58px)",
        lineHeight: "1.14",
        letterSpacing: "-1.8px",
        margin: "23px 0 20px",
        fontWeight: "800",
    },
    highlight: {
        color: "#8052b4",
    },
    intro: {
        color: "#71697d",
        fontSize: "16px",
        lineHeight: "1.9",
        margin: "0 0 27px",
    },
    button: {
        display: "inline-flex",
        alignItems: "center",
        gap: "15px",
        padding: "14px 19px",
        background: "#8052b4",
        color: "#fff",
        textDecoration: "none",
        borderRadius: "12px",
        fontWeight: "700",
        fontSize: "14px",
        boxShadow: "0 9px 20px rgba(128,82,180,.2)",
    },
    imageWrap: {
        position: "relative",
        minHeight: "370px",
        overflow: "hidden",
        borderRadius: "28px 28px 90px 28px",
        background: "linear-gradient(145deg, #f7f1ff 0%, #eee3fb 55%, #e4d2f6 100%)",
        border: "1px solid #eadcf7",
        boxShadow: "0 20px 45px rgba(51,34,70,.09)",
    },
    aboutHalo: {
        position: "absolute",
        width: "250px",
        height: "250px",
        borderRadius: "50%",
        background: "rgba(255,255,255,.58)",
        top: "40px",
        left: "50%",
        transform: "translateX(-50%)",
    },
    aboutHeart: {
        position: "absolute",
        top: "80px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "145px",
        height: "145px",
        borderRadius: "42px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #9a70c7, #7347a7)",
        color: "#fff",
        fontSize: "62px",
        boxShadow: "0 18px 35px rgba(99,61,143,.22)",
        border: "10px solid rgba(255,255,255,.55)",
    },
    aboutMiniCard: {
        position: "absolute",
        top: "36px",
        left: "5%",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "12px",
        background: "rgba(255,255,255,.96)",
        borderRadius: "14px",
        boxShadow: "0 12px 28px rgba(67,43,91,.10)",
    },
    aboutMiniIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "36px",
        height: "36px",
        borderRadius: "11px",
        background: "#f0e7fb",
        color: "#8052b4",
        fontSize: "22px",
        flexShrink: 0,
    },
    aboutMiniCardRight: {
        position: "absolute",
        right: "4%",
        bottom: "92px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "12px",
        background: "rgba(255,255,255,.96)",
        borderRadius: "14px",
        boxShadow: "0 12px 28px rgba(67,43,91,.10)",
    },
    aboutMiniIconGreen: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "36px",
        height: "36px",
        borderRadius: "11px",
        background: "#e5f3e8",
        color: "#4f8c64",
        fontSize: "19px",
        fontWeight: "800",
        flexShrink: 0,
    },
    aboutDots: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: "34px",
        textAlign: "center",
        color: "#9877b7",
        fontSize: "23px",
        letterSpacing: "5px",
    },
    imageNote: {
        position: "absolute",
        left: "12px",
        bottom: "25px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "14px 17px",
        borderRadius: "15px",
        background: "#fff",
        boxShadow: "0 12px 30px rgba(40,25,55,.14)",
    },
    noteIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "40px",
        height: "40px",
        borderRadius: "12px",
        background: "#f2eafd",
        color: "#8052b4",
        fontSize: "21px",
        flexShrink: 0,
    },
    missionSection: {
        padding: "72px 5%",
        background: "#faf8fd",
        borderTop: "1px solid #f0eaf6",
        borderBottom: "1px solid #f0eaf6",
    },
    missionCopy: {
        maxWidth: "740px",
        textAlign: "center",
        margin: "0 auto 32px",
    },
    label: {
        color: "#8052b4",
        fontSize: "11px",
        fontWeight: "800",
        letterSpacing: "1.4px",
    },
    heading: {
        fontFamily: '"Manrope", sans-serif',
        fontSize: "clamp(27px, 3.2vw, 38px)",
        letterSpacing: "-.8px",
        lineHeight: "1.25",
        margin: "12px 0",
        color: "#30243d",
    },
    paragraph: {
        color: "#756d80",
        fontSize: "15px",
        lineHeight: "1.8",
        margin: 0,
    },
    values: {
        maxWidth: "1120px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "18px",
    },
    valueCard: {
        background: "#fff",
        border: "1px solid #ebe3f4",
        borderRadius: "19px",
        padding: "25px",
        boxShadow: "0 10px 26px rgba(52,32,75,.04)",
    },
    valueIcon: {
        width: "45px",
        height: "45px",
        borderRadius: "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#8052b4",
        background: "#f2eafd",
        fontSize: "25px",
    },
    cardTitle: {
        fontFamily: '"Manrope", sans-serif',
        color: "#30243d",
        fontSize: "19px",
        lineHeight: "1.4",
        margin: "18px 0 10px",
    },
    cardText: {
        color: "#756d80",
        fontSize: "14px",
        lineHeight: "1.8",
        margin: 0,
    },
    process: {
        maxWidth: "1120px",
        margin: "0 auto",
        padding: "78px 5%",
    },
    processIntro: {
        textAlign: "center",
        maxWidth: "650px",
        margin: "0 auto",
    },
    steps: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "18px",
        marginTop: "32px",
    },
    step: {
        padding: "25px",
        border: "1px solid #ebe3f4",
        borderRadius: "19px",
        background: "#fff",
        boxShadow: "0 10px 26px rgba(52,32,75,.04)",
    },
    number: {
        color: "#8052b4",
        fontSize: "12px",
        letterSpacing: "1.5px",
        fontWeight: "800",
    },
};

export default About;
