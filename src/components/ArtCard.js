import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./ArtCard.css";

function ArtCard(props) {
    const popup = useRef(null);
    const location = useLocation();

function showPopup(event) {
    if (
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.altKey
    ) {
        return;
    }
    if (location.pathname !== "/") {
    return;
    }
    event.preventDefault();
    popup.current.showModal();
}
    return (
        <section className="art-card">
            <Link to={props.link} onClick={showPopup}>
    <img src={props.image} alt={props.alt} />
            </Link>

            <h3>
                <Link to={props.link}>{props.title}</Link>
            </h3>

            <p>{props.medium}</p>
            <p>{props.description}</p>
            <dialog
    className="art-popup"
    ref={popup}
    aria-label={props.title + " details"}
    onClick={(event) => {
        if (event.target === event.currentTarget) {
            popup.current.close();
        }
    }}
    onKeyDown={(event) => {
        if (event.key === "Escape") {
            popup.current.close();
        }
    }}
>
    <div className="art-popup-content">
        <h2>
            <Link
                to={props.link}
                onClick={() => popup.current.close()}
            >
                {props.title}
            </Link>
        </h2>

        <p className="popup-description">
             {props.popupDescription || props.description}
        </p>

        <button
            type="button"
            onClick={() => popup.current.close()}
        >
            Close
        </button>
    </div>
</dialog>
        </section>
    );
}

export default ArtCard;