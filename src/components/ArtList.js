import ArtCard from "./ArtCard";
import "./ArtList.css";

import haniwa from "./images/hanwia.jpg";
import squid from "./images/sqiud.jpg";
import skateboard from "./images/sk8.jpg";
import poster from "./images/skely.jpg";
import cat from "./images/alien_cat.jpg";
import grain from "./images/grain_glow.jpg";

function ArtList() {
    return (
        <div className="art-list">
            <ArtCard
                title="Relics and Relief"
                image={haniwa}
                alt="Haniwa sculpture"
                link="/relics-and-relief"
                medium="Clay sculpture"
                year="2026"
                description="My clay haniwa with red spiky hair, modern clothes, and a skateboard."
            />

            <ArtCard
                title="Squid Slab"
                image={squid}
                alt="Squid slab artwork"
                link="/squid-slab"
                medium="Glazed clay slab"
                year="2024"
                description="A clay slab I made of a giant squid pulling a ship into the ocean."
            />

            <ArtCard
                title="Alien Skateboard"
                image={skateboard}
                alt="Alien skateboard artwork"
                link="/alien-skateboard"
                medium="Acrylic paint on skateboard"
                year="2025"
                description="A skateboard I painted using a skater's idea of what an alien might look like."
            />

            <ArtCard
                title="Skeleton Poster"
                image={poster}
                alt="Skeleton poster"
                link="/skeleton-poster"
                medium="Poster design"
                year="2025"
                description="A poster I started in my high school art club based on Yeat's music and album artwork."
            />

            <ArtCard
                title="Alien Cat"
                image={cat}
                alt="Alien cat painting"
                link="/alien-cat"
                medium="Painting"
                year="2025"
                description="A painting I made of a cat wearing an alien suit."
            />

            <ArtCard
                title="Grain and Glow"
                image={grain}
                alt="Grain and Glow sculpture"
                link="/in-progress"
                medium="Light sculpture"
                year="2025"
                description="A light sculpture I am still working on using a green traffic light and a repeating box shape."
            />
        </div>
    );
}

export default ArtList;