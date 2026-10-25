import "./ArtworkPage.css";

function ArtworkPage(props) {
    return (
        <main className="artwork-page">
            <h2>{props.title}</h2>
            {props.children}
        </main>
    );
}

export default ArtworkPage;