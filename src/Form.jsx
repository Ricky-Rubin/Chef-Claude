import React from "react";

function Form() {
    const [array, setArray] = React.useState([]);
    const mappedArray = array.map(item => <li key={item}>{item}</li>)
    
    const [recipeShown, setRecipeShown] = React.useState(false)

    function addIngredient(formData) {
        const ingredient = formData.get("ingredient")

        setArray(function(prevArray) {
            return [...prevArray, ingredient];
        })

        /*
            const check = document.getElementById("text-bar");
            array.push(check.value)
            console.log(array);

            While the lines above did the exact thing I wanted,
            I guess that is the JS method since working with JavaScript
            is imperative and not declarative like react. 

            The new FormData, event.currentTarget and the get method,
            which took the name attrubute of the input element seems to 
            be a method that works well with react STATE. 

            The .push method for arrays doesn't work in REACT like it 
            does in JS. The goal is to add a new element to the array and 
            the best way to do that is to use react state. 

            An even better method to handle forms in react is by makiing
            the action attribute of the form equalt to a function that handles
            everything, including the preventDefault that stops the page from 
            refreshing after every submit action takes place. This new form 
            method also reduces the lines of code and it will be used here. 
        */
    }

    function getRecipeButtonState() {
        setRecipeShown(prevBoolean => !prevBoolean);
        console.log(recipeShown);
    }

    return (
        <>
            <form action={addIngredient}>
                <input name="ingredient" type="text" id="text-bar" className="text-bar" placeholder="e.g. oregano"/>
                <button className="form-button">Add Ingredient</button>
            </form>

            {array.length > 0 ? <div className="section">
                <h1 className="header-one">Ingredients on hand:</h1>
                <div className="mapped">
                    {mappedArray}
                </div>

                {array.length > 3 ? <div className="action-area">
                    <div>
                        <h2>Ready for a recipe?</h2>
                        <p className="generate-text">Gnerate a recipe from your list of ingredients.</p>
                    </div>

                    <button className="recipe-button" onClick={getRecipeButtonState}>Get a recipe</button>
                </div> : null}
            </div> : null}

            {recipeShown ? <section className="feedback">
                <h2>Chef Claude Recommends:</h2>
                <article className="suggested-recipe-container" aria-live="polite">
                    <p>Based on the ingredients you have available, I would recommend making a simple a delicious <strong>Beef Bolognese Pasta</strong>. Here is the recipe:</p>
                    <h3>Beef Bolognese Pasta</h3>
                    <strong>Ingredients:</strong>
                    <ul>
                        <li>1 lb. ground beef</li>
                        <li>1 onion, diced</li>
                        <li>3 cloves garlic, minced</li>
                        <li>2 tablespoons tomato paste</li>
                        <li>1 (28 oz) can crushed tomatoes</li>
                        <li>1 cup beef broth</li>
                        <li>1 teaspoon dried oregano</li>
                        <li>1 teaspoon dried basil</li>
                        <li>Salt and pepper to taste</li>
                        <li>8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
                    </ul>
                    <strong>Instructions:</strong>
                    <ol>
                        <li>Bring a large pot of salted water to a boil for the pasta.</li>
                        <li>In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden spoon, until browned and cooked through, about 5-7 minutes.</li>
                        <li>Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the onion is translucent.</li>
                        <li>Stir in the tomato paste and cook for 1 minute.</li>
                        <li>Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.</li>
                        <li>Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, to allow the flavors to meld.</li>
                        <li>While the sauce is simmering, cook the pasta according to the package instructions. Drain the pasta and return it to the pot.</li>
                        <li>Add the Bolognese sauce to the cooked pasta and toss to combine.</li>
                        <li>Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired.</li>
                    </ol>
                </article>
            </section> : null}
        </>
    )
}

export { Form };