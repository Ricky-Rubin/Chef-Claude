import React from "react";
import { ClaudeRecipe } from "/src/ClaudeRecipe.jsx"
import { IngredientsList } from "/src/IngredientsList.jsx"
import { getRecipeFromMistral } from "/src/ai.js" 

function Form() {
    const [array, setArray] = React.useState([]);
    const [recipeShown, setRecipeShown] = React.useState(false)
    const [text, setText] = React.useState("")

    const mappedArray = array.map(item => <li key={item}>{item}</li>)

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

    async function getRecipeButtonState() {
        setRecipeShown(prevBoolean => !prevBoolean);
        const fetchRecipe = await getRecipeFromMistral(array)
        setText(fetchRecipe)

        //   try {
        //     // call your backend route, send the array as query params or body
        //     const response = await fetch(`/api/chef_claude?recipe=${array.join(",")}`);
        //     const data = await response.json();

        //     setText(data); // or setText(data.recipe) depending on API response
        // } catch (err) {
        //     console.error("Error fetching recipe:", err);
        //     setText("Something went wrong, please try again.");
        // }
    }

    return (
        <>
            <form action={addIngredient}>
                <input name="ingredient" type="text" id="text-bar" className="text-bar" placeholder="e.g. oregano"/>
                <button className="form-button">Add Ingredient</button>
            </form>

            {/* {array.length > 0 ? <div className="section">
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
            </div> : null} */}

            <IngredientsList map={mappedArray} clickButton={getRecipeButtonState} theArray={array}/>

            {recipeShown ? <ClaudeRecipe fromAi={text}/> : null}
        </>
    )
}

export { Form };