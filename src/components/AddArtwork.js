import { useState } from "react";

function AddArtwork(props) {
    const [result, setResult] = useState("");
    const editing = Boolean(props.artwork);

    async function submitArtwork(event) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const artwork = {
            title: formData.get("title").trim(),
            medium: formData.get("medium").trim(),
            year: formData.get("year").trim(),
            description: formData.get("description").trim(),
            popupDescription: formData.get("popupDescription").trim(),
            img_name: formData.get("img_name")
};

        if (artwork.title.length < 3 || artwork.title.length > 80) {
            setResult("Title must be 3–80 characters.");
            return;
        }

        if (artwork.medium.length < 3 || artwork.medium.length > 80) {
            setResult("Medium must be 3–80 characters.");
            return;
        }

        if (
            artwork.description.length < 10 ||
            artwork.description.length > 1000
        ) {
            setResult("Description must be 10–1000 characters.");
            return;
        }
        if (
    artwork.popupDescription.length < 10 ||
    artwork.popupDescription.length > 2000
        ) {
    setResult("Popup text must be 10–2000 characters.");
    return;
        }

        setResult(editing ? "Saving artwork..." : "Adding artwork...");

        try {
           const response = await fetch(
        "https://hellowworld.onrender.com/api/artworks" +
        (editing ? "/" + props.artwork._id : ""),
    {
        method: editing ? "PUT" : "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(artwork)
    }
);

            const data = await response.json();

            if (response.ok) {
            props.onAdd(data);
            setResult(editing ? "Artwork edited!" : "Artwork added!");

            if (!editing) {
            form.reset();
            }
            } else {
            setResult(data.error || "Could not save artwork.");
            }
        } catch {
            setResult("Could not reach the server. Try again.");
        }
    }

     return (
        <section className="add-artwork">
            <h2>{editing ? "Edit My Artwork" : "Add My Artwork"}</h2>

            <form onSubmit={submitArtwork}>
                <div className="artwork-fields">
                    <div>
                        <label htmlFor="art-title">Title</label>
                        <input
                            id="art-title"
                            name="title"
                            defaultValue={props.artwork?.title || ""}
                            minLength={3}
                            maxLength={80}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="art-medium">Medium</label>
                        <input
                            id="art-medium"
                            name="medium"
                            defaultValue={props.artwork?.medium || ""}
                            minLength={3}
                            maxLength={80}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="art-year">Year</label>
                        <input
                            id="art-year"
                            name="year"
                            defaultValue={props.artwork?.year || ""}
                            pattern="(19[0-9]{2}|20[0-9]{2}|2100)"
                            maxLength={4}
                            title="Enter a year from 1900 to 2100"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="art-image">Image</label>
                        <select
                            id="art-image"
                            name="img_name"
                            defaultValue={props.artwork?.img_name || ""}
                            required
                        >
                            <option value="">Choose an image</option>
                            <option value="hanwia.jpg">Haniwa</option>
                            <option value="sqiud.jpg">Squid Slab</option>
                            <option value="sk8.jpg">Alien Skateboard</option>
                            <option value="skely.jpg">Skeleton Poster</option>
                            <option value="alien_cat.jpg">Alien Cat</option>
                            <option value="grain_glow.jpg">Grain and Glow</option>
                        </select>
                    </div>

                    <div className="artwork-description">
                        <label htmlFor="art-description">Description</label>
                        <textarea
                            id="art-description"
                            name="description"
                            defaultValue={props.artwork?.description || ""}
                            minLength={10}
                            maxLength={1000}
                            required
                        />
                    </div>

                    <div className="artwork-description">
                        <label htmlFor="art-popup">Popup Text</label>
                        <textarea
                            id="art-popup"
                            name="popupDescription"
                            defaultValue={props.artwork?.popupDescription || ""}
                            minLength={10}
                            maxLength={2000}
                            required
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={
                        result === "Adding artwork..." ||
                        result === "Saving artwork..."
                    }
                >
                    {editing ? "Save Changes" : "Add to Gallery"}
                </button>

                <p role="status">{result}</p>
            </form>
        </section>
    );
}

export default AddArtwork;