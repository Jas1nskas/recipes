import React, {useContext} from 'react';
import UserInfo from "../comps/ShowRecipeCard";
import mainContext from "../context/useContext";

const ShowFavoriteRecipes = () => {
    const {getRecipes} = useContext(mainContext)
    const favoriteRecipes = getRecipes.filter(x=>x.isFavorite)



    return (
        <div>

            {favoriteRecipes.map((x, index) => <UserInfo recipe={x} key={index}/>)}
        </div>
    );
};

export default ShowFavoriteRecipes;