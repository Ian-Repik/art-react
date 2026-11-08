import ProgressStep from "../components/ProgressStep";
import ArtPhoto from "../components/ArtPhoto";
import "../components/ArtworkPage.css";
import "./GrainAndGlow.css";

import iris from "../components/progress-images/IMG_2124.jpg";
import pinhole from "../components/progress-images/IMG_2125.jpg";
import grain from "../components/progress-images/grain_glow.jpg";

import first from "../components/progress-images/IMG_2258.jpg";
import second from "../components/progress-images/IMG_2262.jpg";
import third from "../components/progress-images/IMG_2259.jpg";
import fourth from "../components/progress-images/IMG_2257.jpg";
import fifth from "../components/progress-images/IMG_2320.jpg";
import sixth from "../components/progress-images/IMG_2321.jpg";

import finished from "../components/progress-images/grain-glow-finished.jpg";
import lit from "../components/progress-images/grain-glow-lit.jpg";

function GrainAndGlow() {
    return (
        <main className="artwork-page grain-glow-page">
            <h2>Grain and Glow</h2>

            <p className="progress-intro">
                The project I am working on is called Grain and Glow.
                I am using a green light from a traffic light to make
                a non-objective lamp. These pictures show some of
                the ideas I tried and what I have done so far.
            </p>
             <section className="finished-artwork">
                <h3>Finished Piece</h3>

                <div className="finished-photos">
                    <ArtPhoto
                        image={finished}
                        alt="Finished Grain and Glow sculpture with yellow boxes and red flames"
                    />

                    <ArtPhoto
                        image={lit}
                        alt="Grain and Glow sculpture with its light turned on"
                    />
                </div>
            </section>

            <h3>How I Made It</h3>

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
                After that, I tried a pin-hole idea. The light was
                really focused in the middle, so it was hard to get
                the effect to go very far.
            </ProgressStep>

            <ProgressStep image={grain} alt="Grain and Glow sculpture">
                This shows an earlier stage of the sculpture. I wanted
                to use a repeating box shape. It was supposed to be
                non-objective, but I think it looks like a traffic
                light, and I like the way it looks.
            </ProgressStep>

            <div className="progress-photos">
                <ArtPhoto
                    image={first}
                    alt="Light sculpture construction"
                />

                <ArtPhoto
                    image={second}
                    alt="Another view of the construction"
                />

                <ArtPhoto
                    image={third}
                    alt="Light sculpture materials"
                />

                <ArtPhoto
                    image={fourth}
                    alt="Sculpture assembly in progress"
                />

                <ArtPhoto
                    image={fifth}
                    alt="Testing the sculpture"
                />

                <ArtPhoto
                    image={sixth}
                    alt="Sculpture construction progress"
                />
            </div>
        </main>
    );
}
export default GrainAndGlow;