import React, {useState, useEffect} from "react"
const Context = React.createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [favItems, setFavItems] = useState([])
    
    const url = "https://raw.githubusercontent.com/AnnitaKr/Desktop/main/imgs.json"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
            .catch(error => <p>Sorry, couldn't load. {error}</p>)
    }, [])
    
    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        
        setAllPhotos(updatedArr)
        const itemsInFav = updatedArr.filter(img => img.isFavorite)
        setFavItems(itemsInFav)
    }


    function removeFromFavs(id) {
        setFavItems(prevItems => prevItems.filter(item => item.id !== id))
        toggleFavorite(id)
    }
    

    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }
    
    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }
    
    function emptyCart() {
        setCartItems([])
    }
    
    return (
        <Context.Provider value={{
            allPhotos, 
            toggleFavorite, 
            cartItems, 
            addToCart, 
            removeFromCart, 
            removeFromFavs,
            emptyCart, 
            favItems
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}