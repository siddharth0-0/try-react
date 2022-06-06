import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";


function AllMeetup() {
  const [isLoading,setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() =>{
    setIsLoading(true);
    fetch(
      'https://react-test-33472-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json'
    ).then(response => {
      return response.json();
    }).then(data=> {
      const meetup = []
      for(const key in data){
        const meet = {
          id : key,
          ...data[key]
        }
        meetup.push(meet)
      }

      setIsLoading(false);
      setLoadedMeetups(meetup);
    })
  },[])

  if(isLoading){
    return (
      <section>
        <p>Loading....</p>
      </section>
    )
  }

  return (
      <section>
          <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups}/>
      </section>
  );
}

export default AllMeetup;
