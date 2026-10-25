import "./ArtPhoto.css";

function ArtPhoto(props) {
    return (
        <img
            className="art-photo"
            src={props.image}
            alt={props.alt}
        />
    );
}

export default ArtPhoto;    