import ArtworkPage from "../components/ArtworkPage";
import ArtPhoto from "../components/ArtPhoto";

import first from "../components/images/IMG_0732.jpg";
import second from "../components/images/IMG_0733.jpg";
import finished from "../components/images/alien_cat.jpg";

function AlienCat() {
    return (
        <ArtworkPage title="Alien Cat">
            <h3>About the Project</h3>

            <p>
                This was a fun painting I made last year. My sister
                was taking a painting class and asked her teacher
                if I could come in and paint too. The teacher said
                yes, so I went for a couple of days and made this.
            </p>

            <p>
                There is not really a deep meaning behind this one.
                I just thought it looked cool and wanted to paint it.
                For only working on it for about two class days,
                I think it turned out pretty good.
            </p>

            <h3>What Are You Looking At?</h3>

            <p>
                It is a cat wearing an alien body like a suit.
                The idea came from a skate deck I liked, but I did
                not want to buy from that brand, so I painted my
                own version instead.
            </p>

            <div className="artwork-gallery cat-gallery">
                <div className="cat-sketches">
                    <ArtPhoto image={first} alt="First alien cat drawing" />
                    <ArtPhoto image={second} alt="Second alien cat drawing" />
                </div>

                <div className="cat-finished">
                    <ArtPhoto image={finished} alt="Finished alien cat painting" />
                </div>
            </div>
        </ArtworkPage>
    );
}

export default AlienCat;