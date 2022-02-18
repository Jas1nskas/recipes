import React from 'react';


const UserInfo = ({recipe}) => {


    return (
        <div className="d-flex center" >

            <img src={recipe.photo} alt=""/>
            <h1>{recipe.title}</h1>
            <div>{recipe.ingredients}</div>
            <div>{recipe.preTime}</div>
            <div>{recipe.preStep}</div>



        </div>
    );
};

export default UserInfo;