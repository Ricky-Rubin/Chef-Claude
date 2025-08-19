function IngredientsList(props) {
    return (
        <>
        {props.theArray.length > 0 ? <div className="section">
            <h1 className="header-one">Ingredients on hand:</h1>
            <div className="mapped">
                {props.map}
            </div>

            {props.theArray.length > 3 ? <div className="action-area">
                <div>
                    <h2>Ready for a recipe?</h2>
                    <p className="generate-text">Generate a recipe from your list of ingredients.</p>
                </div>

                <button className="recipe-button" onClick={props.clickButton}>Get a recipe</button>
            </div> : null}
        </div> : null}
        </>
    )
}

export { IngredientsList };