import { useRef } from "react";
import { Link } from "react-router-dom";
import "./ArtCard.css";

function ArtCard(props) {
    const popup = useRef(null);

function showPopup(event) {
    if (
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.altKey
    ) {
        return;
    }

    event.preventDefault();
    popup.current.showModal();
}
    return (
        <section className="art-card">
            <Link to={props.link} onClick={showPopup}>
                <img src={props.image} alt={props.alt} />
                <h3>{props.title}</h3>
            </Link>

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
            {props.description}
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