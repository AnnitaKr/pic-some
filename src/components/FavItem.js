import React, {useState, useContext} from "react"
import {Context} from "../Context"

function FavItem({item}) {
    const [hovered, setHovered] = useState(false)
    const {removeFromFavs} = useContext(Context)
    
    const iconClassName = hovered ? "ri-heart-line" : "ri-heart-fill"
    
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
           
        </div>
    )
}

export default FavItem