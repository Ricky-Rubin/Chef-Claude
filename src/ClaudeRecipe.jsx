function ClaudeRecipe(props) {
    return (
        <section className="feedback">
            <h2>Chef Claude Recommends:</h2>
            <article className="suggested-recipe-container" aria-live="polite">
                <div>{props.fromAi}</div>
            </article>
        </section>
    )
}

export { ClaudeRecipe };
