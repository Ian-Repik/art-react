import ArtworkPage from "../components/ArtworkPage";
import ArtPhoto from "../components/ArtPhoto";

import first from "../components/images/IMG_1813.jpg";
import second from "../components/images/IMG_1856.jpg";
import third from "../components/images/IMG_1859.jpg";
import fourth from "../components/images/IMG_2134.jpg";

function RelicsAndRelief() {
    return (
        <ArtworkPage title="Relics and Relief">
            <h3>About the Project</h3>

            <p>
                For this project, I made a haniwa sculpture out of clay.
                I wanted to use the idea of the old Japanese figures but
                add things from my own life. I gave mine modern clothes,
                shoes, red spiky hair, and a skateboard.
            </p>

            <p>
                The red hair is a hairstyle I have wanted to try, and the
                skateboard represents skating being part of my life.
                I wanted to make the sculpture more personal by adding
                things I like.
            </p>

            <p>
                I kept the face and body simple and put the figure on
                a cylinder like some of the older haniwa. I wanted it
                to still look like a haniwa while having my own ideas
                added to it.
            </p>

            <h3>What are Haniwas?</h3>

            <p>
                Haniwa are clay figures from ancient Japan that were
                placed around burial mounds. They came in different
                shapes like people, animals, houses, and cylinders.
                They were made by building up coils of clay and then
                firing them.
            </p>

            <div className="artwork-gallery">
                <ArtPhoto image={first} alt="Haniwa sculpture in progress" />
                <ArtPhoto image={second} alt="Front of the haniwa sculpture" />
                <ArtPhoto image={third} alt="Another view of the sculpture" />
                <ArtPhoto image={fourth} alt="Finished haniwa sculpture" />
            </div>
        </ArtworkPage>
    );
}

export default RelicsAndRelief;