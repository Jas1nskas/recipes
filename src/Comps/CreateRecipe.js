import React from 'react';


const UserInfo = ({recipe}) => {


    return (
        <div className=" box d-flex center column">

            <img src={recipe.photo} alt=""/>
            <img src={recipe.secPhoto} alt=""/>
            <h1>{recipe.title}</h1>
            <div>{recipe.ingredients}</div>
            <div>{recipe.preTime}</div>
            <div>{recipe.preStep}</div>


        </div>
    );
};

export default UserInfo;