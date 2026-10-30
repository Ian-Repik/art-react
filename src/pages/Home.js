import { useState } from "react";
import ArtList from "../components/ArtList";
import "./Home.css";

function Home() {
    return (
        <main className="home-page">
            <section className="home-intro">
                <p>
                    My name is Ian Repik. I am a student at USC and this
                    is my art gallery. Most of the art on here was made
                    in my Art 3D class and I would like to show it off!
                </p>
            </section>

            <section className="featured-art">
                <h2>Featured Art</h2>
                <p>Click an artwork to learn more about it.</p>
                <ArtList />
            <h2 className="contact-title">Contact Me</h2>
                <div className="contact-and-map">
                     <ContactForm />
                     <ArtMap />
                </div>
            </section>
        </main>
    );
}

export default Home;
function ContactForm() {
    const [result, setResult] = useState("");
    const [sending, setSending] = useState(false);

    async function sendMessage(event) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        formData.append(
            "access_key",
            "ef3453da-ace4-432d-9304-6fe04343f8a1"
        );

        setResult("Sending...");
        setSending(true);

        try {
            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    body: formData
                }
            );

            const data = await response.json();

            if (response.ok && data.success) {
                setResult("Message sent!");
                form.reset();
            } else {
                setResult(
                    data.message || "Your message could not be sent."
                );
            }
        } catch {
            setResult("Sorry, we couldn't send your message. Try again.");
        } finally {
            setSending(false);
        }
    }

    return (
        <section className="contact-section">
            <form onSubmit={sendMessage}>
                <p>
                    <label htmlFor="contact-name">Name:</label>
                    <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                    />
                </p>

                <p>
                    <label htmlFor="contact-email">Email:</label>
                    <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                    />
                </p>

                <p>
                    <label htmlFor="contact-message">Message:</label>
                    <textarea
                        id="contact-message"
                        name="message"
                        required
                    />
                </p>

                <button type="submit" disabled={sending}>
                    {sending ? "Sending..." : "Submit"}
                </button>

                <p role="status">{result}</p>
            </form>
        </section>
    );
}

function ArtMap() {
    return (
        <section className="map-section">
            <h3>Art Inspiration</h3>

            <p>
                The Columbia Museum of Art is a local art space
            </p>

            <iframe
                src="https://www.google.com/maps?q=Columbia%20Museum%20of%20Art&output=embed"
                title="Columbia Museum of Art Map"
                loading="lazy"
            />
        </section>
    );
}