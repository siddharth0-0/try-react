import { useRef } from "react";
import Card from "../ui/Card";
import classes from './NewMeetupForm.module.css'

function NewMeetupForm(props){

    const titleIn = useRef();
    const imageIn = useRef();
    const addressIn = useRef();
    const descriptionIn = useRef();

    function submitHandler(event){
        event.preventDefault();

        const eneterdTitle = titleIn.current.value;
        const eneterdImage = imageIn.current.value;
        const eneterdAddress = addressIn.current.value;
        const eneterdDescrption = descriptionIn.current.value;

        const meetupData = {
            title : eneterdTitle,
            image : eneterdImage,
            address : eneterdAddress,
            descriptin : eneterdDescrption
        }

        props.onAddMeetup(meetupData);
    }

    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Meetup Tittle</label>
                <input type="text" required id="title" ref={titleIn}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Meetup Image</label>
                <input type="url" required id="image" ref={imageIn}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Address</label>
                <input type="text" required id="address" ref={addressIn}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Description</label>
                <textarea id="description" required rows="5" ref={descriptionIn}></textarea>
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
}

export default NewMeetupForm;