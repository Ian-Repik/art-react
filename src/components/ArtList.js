import { useState, useEffect } from "react";
import ArtCard from "./ArtCard";
import "./ArtList.css";

const serverURL = "https://hellowworld.onrender.com";

// Keep the existing detailed popup text.
const popupDescriptions = {
    1: "Exploring Ancient Art! This Haniwa sculpture was inspired by the terracotta figures created in ancient Japan. I enjoyed learning how these figures were made and putting my own artistic style into the piece.",

    2: "Giant Squid! For this 3D art project, I created a clay slab showing a giant squid attacking a ship. I was inspired by sea-monster stories like 20,000 Leagues Under the Sea and wanted to make it feel like the ship was being pulled into the ocean. I built the squid in raised relief, adding suction-cup textures and flowing lines to create movement. After firing, I used blue, red, and dark brown glazes to bring the ocean, squid, and ship to life.",

    3: "Exploring Unknown Ideas! This skateboard painting was created for an AP Art project exploring people’s views on conspiracy theories and unknown ideas. I interviewed different people about what they believe could exist and used their ideas to inspire my artwork. For this piece, I asked a skater to imagine what an alien might look like and used their description to create the large green alien in the center. The artwork represents how imagination and personal perspectives can shape our understanding of the unknown.",

    4: "Skeleton Poster! This was a small side project I made in my high school art club. Our task was to create a poster for a music artist, and I chose Yeat because of his futuristic, high-energy sound. I enjoyed designing the poster and using the bold style of his music as inspiration.",

    5: "Alien Cat! This painting was created last year as a fun project. My sister was taking a painting class and asked her teacher if I could join, and I ended up painting for a couple of days. This piece doesn’t have a deep meaning behind it, but I really enjoyed creating it and experimenting with painting. For only spending about two class days on it, I’m really happy with how it turned out.",

    6: "Grain and Glow! This project started with experiments using an iris aperture, similar to the aperture in a camera, to project an effect onto a surface. The effect wasn’t quite what I imagined, so I tried other ideas. The finished sculpture uses a repeating box shape painted yellow with red flames. The artwork page shows the experiments, construction, and finished piece with the light turned on."
};

function ArtList() {
    const [artworks, setArtworks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const getArtworks = async () => {
            try {
                const response = await fetch(serverURL + "/api/artworks");

                if (!response.ok) {
                    throw new Error("Could not load artwork.");
                }

                const data = await response.json();
                setArtworks(data);
            } catch (error) {
                setError("Artwork could not be loaded. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        getArtworks();
    }, []);

    return (
        <div className="art-list">
            {loading && <p>Loading artwork...</p>}
            {error && <p>{error}</p>}

            {artworks.map((artwork) => (
                <ArtCard
                    key={artwork._id}
                    title={artwork.title}
                    image={serverURL + "/images/" + artwork.img_name}
                    alt={artwork.title}
                    link={artwork.link}
                    medium={artwork.medium}
                    year={artwork.year}
                    description={artwork.description}
                    popupDescription={
                        artwork.popupDescription ||
                        popupDescriptions[artwork._id] ||
                        artwork.description
                    }
                />
            ))}
        </div>
    );
}

export default ArtList;