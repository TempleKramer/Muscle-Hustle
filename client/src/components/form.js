import React, { useState, useEffect } from "react";
import Auth from '../utils/auth'
const Form = (props) => {
  const [exerciseForm, setExerciseForm] = useState({
    exercise: {
      inputType: "input",
      value: "",
      title: "Name of Exercise",
      elementConfig: {
        type: "text",
        placeholder: "Exercise Name",
      },
    },
    reps: {
      inputType: "input",
      value: "",
      title: "Number of Reps",
      elementConfig: {
        type: "text",
        placeholder: "Number of Reps",
      },
    },
  });
  const loggedIn = Auth.loggedIn()
  let inputArray = [];
  for (let key in exerciseForm) {
    inputArray.push({
      id: key,
      config: exerciseForm[key],
    });
  }
  const inputChangedHandler = (e, input) => {
    const updatedInput = {
      ...exerciseForm[input],
      value: e.target.value,
    };
    const updatedForm = {
      ...exerciseForm,
      [input]: updatedInput,
    };
    setExerciseForm(updatedForm);
  };
  const clearFields = () => {
    const clearExercise = {
      ...exerciseForm["exercise"],
      value: "",
    };
    const clearReps = {
      ...exerciseForm["reps"],
      value: "",
    };
    const clearedForm = {
      ...exerciseForm,
      exercise: clearExercise,
      reps: clearReps,
    };
    setExerciseForm(clearedForm);
  };
  const submitExerciseHandler = (e) => {
    e.preventDefault();
    const exercise = exerciseForm.exercise.value;
    const reps = exerciseForm.reps.value;
    const newExercise = {
      exercise: exercise,
      reps: reps,
    };
    const localStorageExercises = JSON.parse(localStorage.getItem("exercises"));
    localStorageExercises.push(newExercise);
    localStorage.setItem("exercises", JSON.stringify(localStorageExercises));
    onCheckAuth();
    props.onSaveExercise(newExercise);
    clearFields();
  };
  const submitWorkoutHandler = (e) => {
    e.preventDefault();
    const id = props.userId;
    const exercise = exerciseForm.exercise.value;
    const reps = exerciseForm.reps.value;
    const workout = JSON.parse(localStorage.getItem("exercises"));
    const time = new Date();
    const date = time.toLocaleDateString("en", {
      month: "numeric",
      day: "numeric",
      year: "2-digit",
    });
    const addDate = {
      date: date,
    };
    workout.unshift(addDate);
    if (exercise) {
      const newExercise = {
        exercise: exercise,
        reps: reps,
      };
      workout.push(newExercise);
      props.onSaveWorkout(workout, id);
      clearFields();
    } else {
      props.onSaveWorkout(workout, id);
      clearFields();
    }
  };
  let errorMessage = null;
  if (props.errorMessage) {
    errorMessage = <p className={"error"}>{props.errorMessage}</p>;
  }
  return (loggedIn&&
    <div>
      <form className={"form"}>
        {inputArray.map((input) => (
          <input
            key={input.id}
            inputType={input.config.inputType}
            value={input.config.value}
            title={input.config.title}
            elementConfig={input.config.elementConfig}
            changed={(e) => inputChangedHandler(e, input.id)}
          />
        ))}
        <div className={"spreadButtons"}>
          <Button clicked={submitExerciseHandler}>Save Exercise</Button>
          <Button clicked={submitWorkoutHandler}>Save Workout</Button>
        </div>
      </form>
    </div>
  );
  
};
const mapStateToProps = (state) => {
    return {
      errorMessage: state.workouts.error,
      userId: state.auth.userId,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      onSaveExercise: (newExercise) =>
        dispatch(actions.saveExercise(newExercise)),
      onSaveWorkout: (workout, id) =>
        dispatch(actions.saveWorkout(workout, id)),
      onCheckAuth: () => dispatch(actions.checkAuth()),
    };
  };
  export default Form;
