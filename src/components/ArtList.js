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
                popupDescription="Exploring Ancient Art! This Haniwa sculpture was inspired by the terracotta figures created in ancient Japan. I enjoyed learning how these figures were made and putting my own artistic style into the piece."
            />

            <ArtCard
                title="Squid Slab"
                image={squid}
                alt="Squid slab artwork"
                link="/squid-slab"
                medium="Glazed clay slab"
                year="2024"
                description="A clay slab I made of a giant squid pulling a ship into the ocean."
                popupDescription="Giant Squid! For this 3D art project, I created a clay slab showing a giant squid attacking a ship. I was inspired by sea-monster stories like 20,000 Leagues Under the Sea and wanted to make it feel like the ship was being pulled into the ocean. I built the squid in raised relief, adding suction-cup textures and flowing lines to create movement. After firing, I used blue, red, and dark brown glazes to bring the ocean, squid, and ship to life."
            />

            <ArtCard
                title="Alien Skateboard"
                image={skateboard}
                alt="Alien skateboard artwork"
                link="/alien-skateboard"
                medium="Acrylic paint on skateboard"
                year="2025"
                description="A skateboard I painted using a skater's idea of what an alien might look like."
                popupDescription="Exploring Unknown Ideas! This skateboard painting was created for an AP Art project exploring people’s views on conspiracy theories and unknown ideas. I interviewed different people about what they believe could exist and used their ideas to inspire my artwork. For this piece, I asked a skater to imagine what an alien might look like and used their description to create the large green alien in the center. The artwork represents how imagination and personal perspectives can shape our understanding of the unknown."
            />

            <ArtCard
                title="Skeleton Poster"
                image={poster}
                alt="Skeleton poster"
                link="/skeleton-poster"
                medium="Poster design"
                year="2025"
                description="A poster I started in my high school art club based on Yeat's music and album artwork."
                popupDescription="Skeleton Poster! This was a small side project I made in my high school art club. Our task was to create a poster for a music artist, and I chose Yeat because of his futuristic, high-energy sound. I enjoyed designing the poster and using the bold style of his music as inspiration."
            />

            <ArtCard
                title="Alien Cat"
                image={cat}
                alt="Alien cat painting"
                link="/alien-cat"
                medium="Painting"
                year="2025"
                description="A painting I made of a cat wearing an alien suit."
                popupDescription="Alien Cat! This painting was created last year as a fun project. My sister was taking a painting class and asked her teacher if I could join, and I ended up painting for a couple of days. This piece doesn’t have a deep meaning behind it, but I really enjoyed creating it and experimenting with painting. For only spending about two class days on it, I’m really happy with how it turned out."
            />

            <ArtCard
                title="Grain and Glow"
                image={grain}
                alt="Grain and Glow sculpture"
                link="/in-progress"
                medium="Light sculpture"
                year="2025"
                description="A light sculpture I am still working on using a green traffic light and a repeating box shape."
                popupDescription="Grain and Glow! This project explores the idea of using an iris aperture, similar to the aperture in a camera, to project a unique effect onto a surface. The concept worked during my experiments, but the effect wasn’t quite what I imagined, so I decided to rethink the idea. This piece is still in progress as I continue experimenting with light, projection, and different ways to create the effect I’m looking for."
            />
        </div>
    );
}

export default ArtList;