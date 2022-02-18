import React, {useContext} from 'react';
import UserInfo from "../comps/ShowRecipeCard";
import mainContext from "../context/useContext";

const ShowAllRecipes = () => {
    const {getRecipes} = useContext(mainContext)


    return (
        <div className="d-flex wrap j-center ">
            {getRecipes.map((x, index) => <UserInfo recipe={x} key={index}/>)}

        </div>
    );
};

export default ShowAllRecipes;