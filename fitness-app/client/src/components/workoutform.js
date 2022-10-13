import React from "react";
import Auth from "../utils/auth";
const WorkoutForm = () => {
  const loggedIn = Auth.loggedIn();
    function onSubmit(event){
 event.preventDefault()
 event.stopPropagation()
 const formData = new FormData(event.target)
 const params = {
    name: formData.get('name'),
    numberofreps: formData.get('numberofreps'),
    date:formData.get('date')
 }
    }
  return (loggedIn&&
    <form onSubmit={onSubmit}> 
      <div>
        <label>Name of Exercise</label>
        <input name="name" type="text" placeholder="Exercise Name" required />
      </div>
      <div>
        <label>Number of Reps</label>
        <input
          type="number"
          placeholder="Number of Reps"
          required
          min={0}
          step={1}
          name="numberofreps"
        />
      </div>
      <div>
        <label>Workout Date</label>
        <input
          type="date"
          required
          name="date"
        />
      </div>
      <button>Save</button>

    </form>
  );
};
export default WorkoutForm;
