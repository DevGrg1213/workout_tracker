import { WorkoutContext } from "../context/WorkoutsContext";

import { useContext } from "react";

const useWorkoutContext = () => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw Error(
      "useWorkoutContext hook must be only used inside the WorkoutContextProvider"
    );
  }
  return context;
};

export default useWorkoutContext;
