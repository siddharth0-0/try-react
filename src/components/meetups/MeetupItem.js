import Card from '../ui/Card';
import classes from './MeetupItem.module.css'
import {useContext} from 'react'
import FavoritiesContext from '../../store/favorities-context';

function MeetupItem(props) {
    const favoritiesCtx =  useContext(FavoritiesContext);
    const itemIsFavorities = favoritiesCtx.itemIsFavorities(props.id)
    function toogleFavoritieHandler(){
        if(itemIsFavorities){
            favoritiesCtx.removeFavorities(props.id);
        }
        else {
            favoritiesCtx.addFavorities({
                id:props.id,
                title : props.title,
                image : props.image,
                address : props.address,
                description : props.description
            });
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toogleFavoritieHandler}>
                        {itemIsFavorities ? 'Remove From Favotities' : 'To Favorities'}
                    </button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem;