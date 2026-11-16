import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ArtCard.css";

function ArtCard(props) {
    const popup = useRef(null);
    const navigate = useNavigate();

    function openArtwork() {
    if (props.link) {
        navigate(props.link);
    } else {
        showDetails();
    }
}
    function showDetails() {
        popup.current.showModal();
    }

    function closeDetails() {
        popup.current.close();
    }

    return (
        <section className="art-card">
            <button
            className="art-image-button"
            type="button"
            onClick={openArtwork}
            aria-label={`View ${props.title}`}
>
                <img src={props.image} alt={props.alt} />
            </button>

            <h3>
                <button
                    className="art-title-button"
                    type="button"
                    onClick={showDetails}
                >
                    {props.title}
                </button>
            </h3>

            <p>{props.medium} · {props.year}</p>
            <p>{props.description}</p>

            <dialog
                className="art-popup"
                ref={popup}
                aria-label={`${props.title} details`}
            >
                <div className="art-popup-content">
                    <button
                        className="popup-close"
                        type="button"
                        onClick={closeDetails}
                        autoFocus
                    >
                        Close
                    </button>

                    <h2>
                        {props.link ? (
                            <Link to={props.link} onClick={closeDetails}>
                            {props.title}
                            </Link>
                         ) : (
                    props.title
    )}
                    </h2>

                    <p className="popup-description">
                        {props.medium} · {props.year}
                    </p>

                    <p className="popup-description">
                        {props.popupDescription || props.description}
                    </p>

                    {props.link && (
                        <Link to={props.link} onClick={closeDetails}>
                            View Project Page
                        </Link>
                    )}
                </div>
            </dialog>
        </section>
    );
}

export default ArtCard;