import { useState, useEffect } from "react";
import ArtCard from "./ArtCard";
import AddArtwork from "./AddArtwork";
import "./ArtList.css";

function ArtList(props) {
    const [artworks, setArtworks] = useState([]);
    const [message, setMessage] = useState("Loading artwork...");

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
    setArtworks((current) => [...current, artwork]);
}

    return (
        <>
            <p role="status">{message}</p>

            <div className="art-list">
                {artworks.map((artwork) => (
                    <ArtCard
                        key={artwork._id}
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
                ))}
            </div>

            {props.admin && <AddArtwork onAdd={addToList} />}
        </>
    );
}

export default ArtList;