function Form() {
    const array = ['Potatoes', 'Chicken', 'Spinach'];
    const mappedArray = array.map(item => <li>{item}</li>)

    function logSomething(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const addedIngredient = formData.get("ingredient");
        array.push(addedIngredient);
        console.log(array);

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
        */
    }

    return (
        <>
            <form onSubmit={logSomething}>
                <input name="ingredient" type="text" id="text-bar" className="text-bar" placeholder="e.g. oregano"/>
                <button className="form-button">Add Ingredient</button>
            </form>

            <div className="mapped">
                {mappedArray}
            </div>
        </>
    )
}

export { Form };