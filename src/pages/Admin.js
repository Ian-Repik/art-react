import ArtList from "../components/ArtList";
import "./Gallery.css";

function Admin() {
    return (
        <main className="gallery-page admin-page">
            <h2>Manage My Art</h2>
            <p>Add your artwork and review the collection below.</p>

            <ArtList admin={true} />
        </main>
    );
}

export default Admin;