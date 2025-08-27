import ReactMarkdown from "react-markdown"

function ClaudeRecipe(props) {
    return (
        <section className="feedback">
            <h2>Chef Claude Recommends:</h2>
            <article className="suggested-recipe-container" aria-live="polite">
                <ReactMarkdown>{props.fromAi}</ReactMarkdown>
            </article>
        </section>
    )
}

export { ClaudeRecipe };
