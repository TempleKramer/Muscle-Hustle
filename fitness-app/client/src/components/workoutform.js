import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_WORKOUT } from "../utils/mutations";
import Auth from "../utils/auth";
const WorkoutForm = () => {
  const [addWorkout, { error }] = useMutation(ADD_WORKOUT);
  const loggedIn = Auth.loggedIn();
  async function onSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    const formData = new FormData(event.target);
    const params = {
      name: formData.get("name"),
      numberofreps: parseInt(formData.get("numberofreps")),
      date: formData.get("date"),
    };
    try {
      const { data } = await addWorkout({ variables: params });
      console.log(data);
      event.target.reset();
    } catch (error) {
      console.error(error);
    }
  }
  return (
    loggedIn && (
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
          <input type="date" required name="date" />
        </div>
        <button>Save</button>
      </form>
    )
  );
};
export default WorkoutForm;
