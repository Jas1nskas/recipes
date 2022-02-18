import './App.css';
import React, {useState} from "react";
import mainContext from "./context/useContext";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import ShowAllRecipes from "./Pages/ShowAllRecipes";
import CreateRecipe from "./Pages/CreateRecipe";
import ShowFavoriteRecipes from "./Pages/ShowFavoriteRecipes";
import ShowSingleRecipe from "./Pages/ShowSingleRecipe";


function App() {

    const [getRecipes, setRecipes] = useState([])


    return (
        <div className="d-flex a-center j-center mt-100 column">
            <mainContext.Provider value={{getRecipes, setRecipes}}>
                <Router>
                    <div>
                        <Link to="/createrecipe"><button className="ml-15">Create Recipe</button></Link>
                        <Link to='/'><button className="ml-15">All posts</button></Link>
                        <Link to='/favoriterecipes'><button className="ml-15">Favorites</button></Link>
                    </div>

                    <Routes>
                        <Route path="/" element={<ShowAllRecipes/>}/>
                        <Route path="/createrecipe" element={<CreateRecipe/>}/>
                        <Route path="/favoriterecipes" element={<ShowFavoriteRecipes/>}/>
                        <Route path="/singlerecipe/:id" element={<ShowSingleRecipe/>}/>

                    </Routes>
                </Router>
            </mainContext.Provider>
        </div>


);
}

export default App;