import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritiesContext from "../store/favorities-context";


function Favorities(){

    const favoritiesCtx = useContext(FavoritiesContext);

    let content;

    if(favoritiesCtx.totalFavorties === 0){
        content = <p>Yo got no favorities yet. Start adding some?</p>
    }else{
        content = <MeetupList meetups = {favoritiesCtx.favorities}/>
    }

    return (
       <section>
           <h1>My Favorities</h1>
           {content}
       </section> 
    )
}

export default Favorities;