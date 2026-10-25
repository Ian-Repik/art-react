import ArtworkPage from "../components/ArtworkPage";
import ArtPhoto from "../components/ArtPhoto";

import poster from "../components/images/IMG_6415.jpg";

function SkeletonPoster() {
    return (
        <ArtworkPage title="Skeleton Poster">
            <h3>About the Project</h3>

            <p>
                This was a small project I did in my high school
                art club. We had to make a poster for a music artist,
                and I picked Yeat. I liked the futuristic look of
                his album artwork and wanted to use some of those
                ideas in my poster.
            </p>

            <h3>About the Poster</h3>

            <p>
                I never got to finish this because we moved on to
                the next art club project. I used a skeleton being
                taken up by a UFO, numbers around the beam, and a
                futuristic city in the background.
            </p>

            <p>
                The different parts came from his album artwork.
                I wanted to put them together into one poster
                instead of just copying one album cover.
            </p>

            <div className="poster-frame">
                <ArtPhoto image={poster} alt="Skeleton and UFO poster" />
            </div>
        </ArtworkPage>
    );
}

export default SkeletonPoster;