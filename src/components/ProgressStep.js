import "./ProgressStep.css";

function ProgressStep(props) {
    return (
        <section
            className={props.reverse ? "progress-step reverse" : "progress-step"}
        >
            <img src={props.image} alt={props.alt} />
            <p>{props.children}</p>
        </section>
    );
}

export default ProgressStep;