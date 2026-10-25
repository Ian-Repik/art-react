import ProgressStep from "../components/ProgressStep";
import ArtPhoto from "../components/ArtPhoto";
import "./InProgress.css";

import iris from "../components/progress-images/IMG_2124.jpg";
import pinhole from "../components/progress-images/IMG_2125.jpg";
import grain from "../components/progress-images/grain_glow.jpg";

import first from "../components/progress-images/IMG_2258.jpg";
import second from "../components/progress-images/IMG_2262.jpg";
import third from "../components/progress-images/IMG_2259.jpg";
import fourth from "../components/progress-images/IMG_2257.jpg";
import fifth from "../components/progress-images/IMG_2320.jpg";
import sixth from "../components/progress-images/IMG_2321.jpg";

function InProgress() {
    return (
        <main className="in-progress-page">
            <h2>In Progress</h2>

            <p className="progress-intro">
                The project I am working on is called Grain and Glow.
                I am using a green light from a traffic light to make
                a non-objective lamp. These pictures show some of
                the ideas I tried and what I have done so far.
            </p>

            <ProgressStep image={iris} alt="Iris aperture experiment">
                My first idea was to use an iris aperture, like the
                one in a camera, to project a cool effect onto a
                surface. It worked, but it did not look the way
                I wanted, so I decided to try something else.
            </ProgressStep>

            <ProgressStep
                image={pinhole}
                alt="Pin-hole light experiment"
                reverse={true}
            >
                After that, I tried a pin-hole idea. The light is
                really focused in the middle, so it is hard to get
                the effect to go very far. I still need to figure
                out how to get the effect I want.
            </ProgressStep>

            <ProgressStep image={grain} alt="Grain and Glow sculpture">
                This is what I have done so far. I wanted to use
                a repeating box shape. It is supposed to be
                non-objective, but I think it looks like a traffic
                light, and I like the way it looks.
            </ProgressStep>

            <div className="progress-photos">
                <ArtPhoto image={first} alt="Light sculpture construction" />
                <ArtPhoto image={second} alt="Another view of the construction" />
                <ArtPhoto image={third} alt="Light sculpture materials" />
                <ArtPhoto image={fourth} alt="Sculpture assembly in progress" />
                <ArtPhoto image={fifth} alt="Testing the sculpture" />
                <ArtPhoto image={sixth} alt="Latest sculpture progress" />
            </div>
        </main>
    );
}

export default InProgress;