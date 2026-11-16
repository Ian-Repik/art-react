import { useRef } from "react";
import { Link } from "react-router-dom";
import "./ArtCard.css";

function ArtCard(props) {
    const popup = useRef(null);

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
                onClick={showDetails}
                aria-label={`View ${props.title} details`}
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

                    <h2>{props.title}</h2>

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