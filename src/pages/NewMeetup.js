import NewMeetupForm from "../components/meetups/NewMeetupForm";
import {useNavigate} from 'react-router-dom';

function NewMeetup(){

    const history = useNavigate();

    function addMeetpHandler(meetupData){
        fetch(
            'https://react-test-33472-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
            {
                method:'POST',
                body:JSON.stringify(meetupData),
                headers:{
                    'Content-Type':'application/json'
                }
            }
        ).then(()=>{
            history('/');
        })
    }
    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetpHandler}/>
        </section>
    )
}

export default NewMeetup;