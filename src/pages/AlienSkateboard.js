import ArtworkPage from "../components/ArtworkPage";
import ArtPhoto from "../components/ArtPhoto";

import first from "../components/images/IMG_5543.jpg";
import second from "../components/images/IMG_5560.jpg";
import third from "../components/images/IMG_5558.jpg";
import fourth from "../components/images/IMG_5564.jpg";
import fifth from "../components/images/IMG_5872.jpg";

function AlienSkateboard() {
    return (
        <ArtworkPage title="Alien Skateboard">
            <h3>About the Project</h3>

            <p>
                This was part of my AP Art project about conspiracy
                theories and things people think could exist. I talked
                to different people about their ideas and used what
                they told me to make my art.
            </p>

            <p>
                For this one, I asked someone who skates what they
                thought an alien would look like. I used their idea
                to paint the big green alien on the skateboard.
                It is not supposed to look realistic. It is just
                their idea of what an alien could look like.
            </p>

            <h3>The Skateboard as a Canvas</h3>

            <p>
                I used a skateboard because the person I talked to
                skates. I thought it made more sense to paint on
                something connected to them instead of using a
                regular canvas.
            </p>

            <div className="artwork-gallery skateboard-gallery">
                <ArtPhoto image={first} alt="Back of the skateboard" />
                <ArtPhoto image={second} alt="Alien drawing" />
                <ArtPhoto image={third} alt="Painted skateboard" />
                <ArtPhoto image={fourth} alt="Close-up of the alien painting" />
                <ArtPhoto image={fifth} alt="Completed skateboard" />
            </div>
        </ArtworkPage>
    );
}

export default AlienSkateboard;