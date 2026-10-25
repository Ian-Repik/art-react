import ArtworkPage from "../components/ArtworkPage";
import ArtPhoto from "../components/ArtPhoto";

import first from "../components/images/IMG_4305.jpg";
import second from "../components/images/IMG_4306.jpg";
import third from "../components/images/IMG_4307.jpg";
import finished from "../components/images/sqiud.jpg";

function SquidSlab() {
    return (
        <ArtworkPage title="Squid Slab">
            <h3>About the Project</h3>

            <p>
                For this project, I made a clay slab with a giant squid
                attacking a ship. I got the idea from sea-monster stories
                like 20,000 Leagues Under the Sea. I wanted it to look
                like the squid was pulling the ship into the ocean.
            </p>

            <p>
                I built the squid up from the slab so it would stick out
                and added suction cups to the tentacles. I also added
                lines around the ship to make the water look like it
                was moving.
            </p>

            <p>
                After it was fired, I used blue glaze for the ocean and
                squid, red on the tentacles, and dark brown for the ship.
            </p>

            <div className="artwork-gallery">
                <ArtPhoto image={first} alt="First stage of the clay slab" />
                <ArtPhoto image={second} alt="Painted clay slab" />
                <ArtPhoto image={third} alt="Clay slab in progress" />
                <ArtPhoto image={finished} alt="Finished squid slab" />
            </div>
        </ArtworkPage>
    );
}

export default SquidSlab;