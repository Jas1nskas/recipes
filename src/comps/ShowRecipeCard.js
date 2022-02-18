import React from 'react';


const UserInfo = ({recipe}) => {

        const addToFavorite = () =>{
            recipe.isFavorite = !recipe.isFavorite
        }

    return (
        <div className="box d-flex center column bg-color">

            <span>
                <img src={recipe.photo} alt=""/>
                <img src={recipe.secPhoto} alt=""/>
            </span>

            <h3>{recipe.title}</h3>
            <div><strong>Ingredients: </strong>{recipe.ingredients}</div>
            <div><strong> Preparation time: </strong>{recipe.prepTime}</div>
            <div className="mb-10"><strong>Steps: </strong> {recipe.prepStep}</div>

            <button className="margin" onClick={addToFavorite}> {recipe.isFavorite ?  "Remove from Favorite" : "Add to favorite" }</button>


                </div>
                );
            }
            ;

            export default UserInfo;