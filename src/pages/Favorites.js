import React, {useContext} from "react"
import {Context} from "../Context"
import FavItem from "../components/FavItem"

function Favorites() {
   
    const {favItems} = useContext(Context)
    
 
    const favItemElements = favItems.map(item => (
        <FavItem key={item.id} item={item} />
    ))  

    return (
        <main className="favorites">
            <h1>Your Favorites</h1>

            {favItems.length > 0 ? <p></p> : <p>You have no items in your favourites.</p>}

            <div className="grid-fav">
            {favItemElements}
            </div>
        </main>
    )
}

export default Favorites