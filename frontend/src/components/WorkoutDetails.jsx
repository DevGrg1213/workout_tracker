import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import useWorkoutContext from "../hooks/useWorkoutContext";
const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutContext();

  const handleDelete = async () => {
    const response = await fetch(`/api/workouts/${workout._id}`, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };
  return (
    <div className="workout-details">
      <h4 className="workout-title">{workout.title}</h4>
      <p>
        <strong>Load (KG)</strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps</strong>
        {workout.reps}
      </p>
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>

      <span className="update" onClick={handleDelete}>
        delete
      </span>
      {/* <span className='delete' onClick={handleUpdate}>update</span> */}
    </div>
  );
};

export default WorkoutDetails;
