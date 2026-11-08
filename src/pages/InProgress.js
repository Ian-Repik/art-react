import { Link } from "react-router-dom";
import "./InProgress.css";

function InProgress() {
    return (
        <main className="coming-soon-page">
            <section className="coming-soon-card">
                <h2>Coming Soon</h2>
                <p>More projects are on the way. Check back for new work.</p>
                <Link to="/gallery">View the Gallery</Link>
            </section>
        </main>
    );
}

export default InProgress;