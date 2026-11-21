import { useState, useEffect } from "react";
import ArtCard from "./ArtCard";
import AddArtwork from "./AddArtwork";
import "./ArtList.css";

function ArtList(props) {
    const [artworks, setArtworks] = useState([]);
    const [message, setMessage] = useState("Loading artwork...");
    const [editing, setEditing] = useState(null);
    const [result, setResult] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        async function getArtworks() {
            try {
                const response = await fetch(
                    "https://hellowworld.onrender.com/api/artworks"
                );

                if (!response.ok) {
                    throw new Error("Could not load artwork.");
                }

                const data = await response.json();
                setArtworks(data);
                setMessage("");
            } catch {
                setMessage("Could not load artwork. Please refresh.");
            }
        }

        getArtworks();
    }, []);

    function addToList(artwork) {
        if (editing) {
            setArtworks((current) =>
                current.map((item) =>
                    item._id === artwork._id ? artwork : item
                )
            );

            setResult("Artwork edited successfully!");
            setEditing(null);
        } else {
            setArtworks((current) => [...current, artwork]);
            setResult("Artwork added successfully!");
        }
    }
    async function deleteArtwork(artwork) {
    if (!window.confirm("Delete " + artwork.title + "?")) {
        return;
    }

    setDeleting(true);
    setResult("Deleting artwork...");

    try {
        const response = await fetch(
            "https://hellowworld.onrender.com/api/artworks/" + artwork._id,
            {
                method: "DELETE"
            }
        );

        const data = await response.json();

        if (response.status === 200) {
            setArtworks((current) =>
                current.filter((item) => item._id !== artwork._id)
            );

            if (editing && editing._id === artwork._id) {
                setEditing(null);
            }

            setResult("Artwork deleted successfully!");
        } else {
            setResult(data.error || "Could not delete artwork.");
        }
    } catch {
        setResult("Could not reach the server. Try again.");
    } finally {
        setDeleting(false);
    }
}
    return (
        <>
            <p role="status">{message}</p>

            <div className="art-list">
    {artworks.map((artwork) => (
        <div className="artwork-item" key={artwork._id}>
            <ArtCard
                title={artwork.title}
                image={
                    "https://hellowworld.onrender.com/images/" +
                    artwork.img_name
                }
                alt={artwork.title}
                link={artwork.link}
                medium={artwork.medium}
                year={artwork.year}
                description={artwork.description}
                popupDescription={artwork.popupDescription}
            />

            {props.admin && (
                <div className="artwork-actions">
                    <button
                        type="button"
                        disabled={deleting}
                        onClick={() => {
                            setEditing(artwork);
                            setResult("");
                        }}
                    >
                        Edit
                    </button>

                    <button
                        type="button"
                        disabled={deleting}
                        onClick={() => deleteArtwork(artwork)}
                    >
                        Delete
                    </button>
                </div>
            )}
        </div>
    ))}
</div>
            {props.admin && (
                <>
                    <p role="status">{result}</p>

                    <AddArtwork
                        key={editing ? editing._id : "add"}
                        artwork={editing}
                        onAdd={addToList}
                    />
                </>
            )}
        </>
    );
}

export default ArtList;