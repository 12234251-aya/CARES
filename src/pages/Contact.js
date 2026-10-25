
import { Link } from "react-router-dom";

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value.trim();
        const phone = form.phone.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        const subject = encodeURIComponent(`Contact message from ${name}`);
        const body = encodeURIComponent(
            `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`
        );

        // Replace this with the association's real email address.
        window.location.href =
            `mailto:association@example.com?subject=${subject}&body=${body}`;
    };

    return (
        <main style={styles.page}>
            <section style={styles.hero}>
                <span style={styles.eyebrow}>WE'RE HERE FOR YOU</span>

                <h1 style={styles.title}>
                    Let's make good things{" "}
                    <span style={styles.highlight}>happen together.</span>
                </h1>

                <p style={styles.intro}>
                    Have a question about CARES or want to be part of our community?
                    Choose a way to connect with us.
                </p>
            </section>

            <section className="contact-layout" style={styles.layout}>
                {/* Contact cards at the top */}
                <div style={styles.contactCards}>
                    <article className="cares-card" style={styles.card}>
                        <span style={styles.icon}>☎</span>

                        <h2 style={styles.cardTitle}>Call Us</h2>

                        <p style={styles.cardText}>
                            For questions and general information, reach us by phone.
                        </p>

                        <a href="tel:1234567890" style={styles.cardLink}>
                            123-456-7890 <span>↗</span>
                        </a>
                    </article>

                    <article className="cares-card" style={styles.card}>
                        <span style={styles.icon}>✉</span>

                        <h2 style={styles.cardTitle}>Email Us</h2>

                        <p style={styles.cardText}>
                            Have a question? Send us an email and we'll be happy to hear
                            from you.
                        </p>

                        <a
                            href="mailto:association@example.com"
                            style={styles.cardLink}
                        >
                            association@example.com <span>↗</span>
                        </a>
                    </article>

                    <article className="cares-card" style={styles.card}>
                        <span style={styles.icon}>♥</span>

                        <h2 style={styles.cardTitle}>Join Our Community</h2>

                        <p style={styles.cardText}>
                            Every contribution matters, whether you donate, request
                            aid, or volunteer.
                        </p>

                        <Link to="/Login" style={styles.cardLink}>
                            Find your role <span>↗</span>
                        </Link>
                    </article>
                </div>

                {/* Contact form below the cards */}
                <section style={styles.formPanel}>
                    <div style={styles.formHeader}>
                        <div style={styles.formIcon}>✉</div>

                        <div>
                            <span style={styles.formLabel}>GET IN TOUCH</span>

                            <h2 style={styles.formTitle}>Send Us a Message</h2>

                            <p style={styles.formText}>
                                Fill in the form below and tell us how we can help you.
                            </p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} style={styles.form}>
                        <div className="contact-form-fields" style={styles.formFields}>
                            <div style={styles.field}>
                                <label htmlFor="contact-name" style={styles.label}>
                                    Full Name
                                </label>

                                <input
                                    id="contact-name"
                                    name="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    autoComplete="name"
                                    required
                                    style={styles.input}
                                />
                            </div>

                            <div style={styles.field}>
                                <label htmlFor="contact-phone" style={styles.label}>
                                    Phone Number
                                </label>

                                <input
                                    id="contact-phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    autoComplete="tel"
                                    required
                                    style={styles.input}
                                />
                            </div>

                            <div style={styles.field}>
                                <label htmlFor="contact-email" style={styles.label}>
                                    Email Address
                                </label>

                                <input
                                    id="contact-email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    autoComplete="email"
                                    required
                                    style={styles.input}
                                />
                            </div>

                            <div style={styles.messageField}>
                                <label htmlFor="contact-message" style={styles.label}>
                                    Your Message
                                </label>

                                <textarea
                                    id="contact-message"
                                    name="message"
                                    placeholder="Write your message here..."
                                    required
                                    rows={5}
                                    style={styles.textarea}
                                />
                            </div>
                        </div>

                        <button type="submit" style={styles.button}>
                            Send Message <span>↗</span>
                        </button>
                    </form>
                </section>
            </section>

            <section style={styles.note}>
                <span style={styles.noteHeart}>♥</span>

                <p style={styles.noteText}>
                    <strong>
                        A community works better when we care for one another.
                    </strong>
                    <br />
                    Thank you for being interested in Community Aid and Rescue System.
                </p>
            </section>

            {/* Responsive layout for tablets and mobile screens */}
            <style>{`
                @media (max-width: 850px) {
                    .contact-layout {
                        grid-template-columns: 1fr !important;
                    }
                }

                @media (max-width: 700px) {
                    .contact-form-fields {
                        grid-template-columns: 1fr !important;
                    }
                }

                @media (max-width: 650px) {
                    .contact-layout {
                        gap: 18px !important;
                    }
                }

                @media (max-width: 600px) {
                    .contact-layout > div:first-child {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </main>
    );
};

const styles = {
    page: {
        background: "#faf8fd",
        minHeight: "calc(100vh - 180px)",
        padding: "65px 5% 75px",
        color: "#29213a",
        fontFamily: '"DM Sans", sans-serif',
        overflow: "hidden",
    },

    hero: {
        maxWidth: "800px",
        textAlign: "center",
        margin: "0 auto 42px",
    },

    eyebrow: {
        display: "inline-block",
        color: "#8052b4",
        background: "#f0e7fb",
        border: "1px solid #e8dbf5",
        padding: "9px 14px",
        borderRadius: "999px",
        fontSize: "11px",
        fontWeight: "800",
        letterSpacing: "1.3px",
    },

    title: {
        fontFamily: '"Manrope", sans-serif',
        fontSize: "clamp(35px, 4.5vw, 55px)",
        lineHeight: "1.15",
        letterSpacing: "-1.7px",
        margin: "21px 0 15px",
        fontWeight: "800",
    },

    highlight: {
        color: "#8052b4",
    },

    intro: {
        color: "#756d80",
        fontSize: "16px",
        lineHeight: "1.8",
        maxWidth: "650px",
        margin: "0 auto",
    },

    layout: {
        display: "flex",
        flexDirection: "column",
        gap: "22px",
        maxWidth: "1120px",
        margin: "0 auto",
    },

    contactCards: {
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: "16px",
    },

    card: {
        background: "#fff",
        border: "1px solid #ebe3f4",
        borderRadius: "20px",
        padding: "24px",
        boxShadow: "0 10px 28px rgba(52,32,75,.05)",
        minWidth: 0,
    },

    icon: {
        width: "48px",
        height: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f2eafd",
        color: "#8052b4",
        borderRadius: "15px",
        fontSize: "23px",
    },

    cardTitle: {
        fontFamily: '"Manrope", sans-serif',
        color: "#30243d",
        fontSize: "19px",
        lineHeight: "1.4",
        margin: "20px 0 10px",
    },

    cardText: {
        color: "#777083",
        fontSize: "14px",
        lineHeight: "1.8",
        margin: 0,
    },

    cardLink: {
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        marginTop: "12px",
        color: "#8052b4",
        textDecoration: "none",
        fontWeight: "800",
        fontSize: "14px",
        overflowWrap: "anywhere",
    },

    formPanel: {
        background: "#fff",
        border: "1px solid #ebe3f4",
        borderRadius: "22px",
        padding: "30px",
        color: "#29213a",
        boxShadow: "0 10px 28px rgba(52,32,75,.06)",
        width: "100%",
        boxSizing: "border-box",
    },

    formHeader: {
        display: "flex",
        alignItems: "flex-start",
        gap: "18px",
        marginBottom: "24px",
    },

    formIcon: {
        width: "48px",
        height: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        borderRadius: "15px",
        background: "#f2eafd",
        color: "#8052b4",
        fontSize: "23px",
    },

    formLabel: {
        color: "#8052b4",
        fontSize: "10px",
        fontWeight: "800",
        letterSpacing: "1.5px",
    },

    formTitle: {
        fontFamily: '"Manrope", sans-serif',
        fontSize: "25px",
        lineHeight: "1.4",
        margin: "5px 0 7px",
        color: "#30243d",
    },

    formText: {
        color: "#777083",
        fontSize: "14px",
        lineHeight: "1.85",
        margin: 0,
    },

    form: {
        display: "flex",
        flexDirection: "column",
        gap: "18px",
    },

    formFields: {
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: "16px",
    },

    field: {
        display: "flex",
        flexDirection: "column",
        gap: "7px",
        minWidth: 0,
    },

    messageField: {
        gridColumn: "1 / -1",
        display: "flex",
        flexDirection: "column",
        gap: "7px",
        minWidth: 0,
    },

    label: {
        color: "#493b59",
        fontSize: "13px",
        fontWeight: "700",
    },

    input: {
        boxSizing: "border-box",
        width: "100%",
        padding: "12px 13px",
        border: "1px solid #ded3eb",
        borderRadius: "10px",
        background: "#fcfaff",
        color: "#29213a",
        fontFamily: "inherit",
        fontSize: "14px",
        outlineColor: "#956ac6",
    },

    textarea: {
        boxSizing: "border-box",
        width: "100%",
        padding: "12px 13px",
        border: "1px solid #ded3eb",
        borderRadius: "10px",
        background: "#fcfaff",
        color: "#29213a",
        fontFamily: "inherit",
        fontSize: "14px",
        lineHeight: "1.6",
        resize: "vertical",
        outlineColor: "#956ac6",
    },

    button: {
        alignSelf: "flex-start",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "13px",
        marginTop: "4px",
        padding: "13px 20px",
        background: "#956ac6",
        color: "#fff",
        border: "none",
        borderRadius: "11px",
        fontWeight: "700",
        fontSize: "14px",
        cursor: "pointer",
        fontFamily: "inherit",
    },

    note: {
        display: "flex",
        alignItems: "center",
        gap: "15px",
        maxWidth: "1120px",
        margin: "28px auto 0",
        padding: "18px 22px",
        background: "#fff",
        border: "1px solid #ebe3f4",
        borderRadius: "16px",
    },

    noteHeart: {
        color: "#8052b4",
        fontSize: "25px",
        flexShrink: 0,
    },

    noteText: {
        color: "#756d80",
        fontSize: "14px",
        lineHeight: "1.8",
        margin: 0,
    },
};

export default Contact;
