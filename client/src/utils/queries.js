import { gql } from '@apollo/client';

export const GET_WORKOUTS = gql`
  query GetWorkouts {
    workouts {
        _id
        name
        numberofreps
        date
        
    }
  }
`;
export const GET_WORKOUTSBYNAME= gql`
  query Workouts($name: String!) {
    workouts(name: $name) {
      _id
      name
      numberofreps
      date
      
    }
  }
`;
export const GET_WORKOUTSBYID= gql`
  query Workouts($id: String!) {
    workouts(id: $id) {
      _id
      name
      numberofreps
      date
      
    }
  }
`;