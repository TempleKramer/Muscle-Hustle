import React from 'react';
import { useQuery } from "@apollo/client";
import { GET_WORKOUTS } from '../utils/queries';
const Saved = ()=>{
const{loading,error, data}=useQuery(GET_WORKOUTS)
console.log(loading,error,data)
    return (<div>Saved Workouts
        <div>
            {data?.workouts.map(workout=>{
                return(<div key={workout._id}>
                    <p>{workout.name}</p>
                    <p>{workout.numberofreps}</p>
                    <p>{workout.date}</p>
                </div>)
            })}
        </div>
    </div>)
}
export default Saved;