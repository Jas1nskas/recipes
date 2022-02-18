import React, {useRef, useContext} from 'react';
import mainContext from "../context/useContext";

const CreateRecipe = () => {

    const{getRecipes, setRecipes } = useContext(mainContext)

        const photoRef = useRef()
        const secondPhotoRef = useRef()
        const titleRef = useRef()
        const ingredientsRef = useRef()
        const preTimeRef = useRef()
        const preStepRef = useRef()

        function createNewRecipe() {

            const recipe = {
                id: getRecipes.length +1,
                photo: photoRef.current.value,
                secPhoto: secondPhotoRef.current.value,
                title: titleRef.current.value,
                ingredients: ingredientsRef.current.value,
                prepTime: preTimeRef.current.value,
                prepStep: preStepRef.current.value,
                reviews: [],
                isFavorite: false ,
            }

            setRecipes([...getRecipes, recipe])
        } console.log(getRecipes)



        return (
            <div>
                <div className="card d-flex column  ">

                    <div>
                        <input className="mb-10" ref={photoRef} placeholder="Photo" type="text"/>
                        <input className="mb-10" ref={secondPhotoRef} placeholder="Photo" type="text"/>
                    </div>

                    <input className="mb-10" ref={titleRef} placeholder="Title" type="text"/>
                    <input className="mb-10" ref={ingredientsRef} placeholder="Ingredients" type="text"/>
                    <input className="mb-10" ref={preTimeRef} placeholder="Preparation time" type="text"/>
                    <input className="mb-10" ref={preStepRef} placeholder="Preparation steps" type="text"/>

                    <button onClick={createNewRecipe}>Create</button>
                </div>
            </div>
        );

    }
;

export default CreateRecipe;