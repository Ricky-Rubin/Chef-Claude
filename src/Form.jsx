import React from "react";

function Form() {
    const [array, setArray] = React.useState([]);
    const mappedArray = array.map(item => <li>{item}</li>)

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

    return (
        <>
            <form action={addIngredient}>
                <input name="ingredient" type="text" id="text-bar" className="text-bar" placeholder="e.g. oregano"/>
                <button className="form-button">Add Ingredient</button>
            </form>

            <div className="section">
                <h1 className="header-one">Ingredients on hand:</h1>
                <div className="mapped">
                    {mappedArray}
                </div>

                <div className="action-area">
                    <div>
                        <h2>Ready for a recipe?</h2>
                        <p className="generate-text">Gnerate a recipe from your list of ingredients.</p>
                    </div>

                    <button className="recipe-button">Get a recipe</button>
                </div>
            </div>
        </>
    )
}

export { Form };