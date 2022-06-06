import { createContext,useState } from "react";
import Favorities from "../pages/Favorities";

const FavoritiesContext = createContext({
    favorities : [],
    totalFavorties : 0,
    addFavorities : (favoritiesMeetup) => {},
    removeFavorities : (meetupId) => {},
    itemIsFavorities : (meetupId) => {}
});

export function FavoritiesContextProvider(props){
    const [userFavorities,setUserFavorities] = useState([]);

    function addFavoritiesHandler(favoritiesMeetup){
        setUserFavorities((prevUserFavorities)=>{
            return prevUserFavorities.concat(favoritiesMeetup);
        })
    }
    
    function removeFavoritiesHAndler(meetupId){
        setUserFavorities((prevUserFavorities)=>{
            return prevUserFavorities.filter(meetup => meetup.id !== meetupId)
        })
    }

    function itemIsFavoritiesHAndler(meetupId){
        return userFavorities.some(meetup => meetup.id === meetupId)
    }

    const context = {
        favorities : userFavorities,
        totalFavorties : userFavorities.length,
        addFavorities : addFavoritiesHandler,
        removeFavorities : removeFavoritiesHAndler,
        itemIsFavorities : itemIsFavoritiesHAndler
    }

    return (
        <FavoritiesContext.Provider value={context}>
            {props.children}
        </FavoritiesContext.Provider>
    );
}

export default FavoritiesContext;