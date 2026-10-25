import { Link } from "react-router-dom";
import "./ArtCard.css";

function ArtCard(props) {
    return (
        <section className="art-card">
            <Link to={props.link}>
                <img src={props.image} alt={props.alt} />
                <h3>{props.title}</h3>
            </Link>

            <p>{props.medium}</p>
            <p>{props.description}</p>
        </section>
    );
}

export default ArtCard;