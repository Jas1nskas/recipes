import './App.css';
import UserInfo from './Comps/CreateRecipe'
import React, {useState} from "react";
import {useRef} from "react";

function App() {

    const [getRecipes, setRecipes] = useState([])

    const photoRef = useRef()
    const secPhotoRef = useRef()
    const titleRef = useRef()
    const ingredientsRef = useRef()
    const preTimeRef = useRef()
    const preStepRef = useRef()


    function createRecipe() {


        const recipe = {
            photo: photoRef.current.value,
            secPhoto: secPhotoRef.current.value,
            title: titleRef.current.value,
            ingredients: ingredientsRef.current.value,
            preTime: preTimeRef.current.value,
            preStep: preStepRef.current.value,

        }
        setRecipes([...getRecipes, recipe])
    }

    return (
        <div className="App center ">

            <div className="card d-flex column ">

                <div>
                    <input className="mb-10" ref={photoRef} placeholder="Photo" type="text"/>
                    <input className="mb-10" ref={secPhotoRef} placeholder="Photo" type="text"/>
                </div>

                <input className="mb-10" ref={titleRef} placeholder="Title" type="text"/>
                <input className="mb-10" ref={ingredientsRef} placeholder="Ingredients" type="text"/>
                <input className="mb-10" ref={preTimeRef} placeholder="Preparation time" type="text"/>
                <input className="mb-10" ref={preStepRef} placeholder="Preparation steps" type="text"/>

                <button onClick={createRecipe}>Create</button>
            </div>

            {getRecipes.map((x, index) => <UserInfo recipe={x} key={index}/>)}

        </div>


    );
}

export default App;