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
            </section>
        </main>
    );
}

export default Home;