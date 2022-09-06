import React, {useState, useContext} from "react"
import {Context} from "../Context"

function FavItem({item}) {
    const [hovered, setHovered] = useState(false)
    const {removeFromFavs, addToCart} = useContext(Context)
    
    const iconClassName = hovered ? "ri-heart-line" : "ri-heart-fill"

    function cartNotFave(item) {
        addToCart(item)
        removeFromFavs(item.id)
    }
    
    return (
        <div className="fav-item">
            <i 
                className={iconClassName} 
                onClick={() => removeFromFavs(item.id)}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
            </i>
            
            <img src={item.url} width="130px" />
            <button className="small-btn" onClick={() => cartNotFave(item, item.id)}>Add to cart</button>
           
        </div>
    )
}

export default FavItem