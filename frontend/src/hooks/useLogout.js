import useAuthContext from "./useAuthContext";
import useWorkoutContext from "./useWorkoutContext";

const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: workoutDispatch } = useWorkoutContext();
  const logout = () => {
    // removing user from local storage
    localStorage.removeItem("user");
    // dispatch logout action
    dispatch({ type: "LOGOUT" });
    workoutDispatch({ type: "SET_WORKOUTS", payload: null });
  };
  return { logout };
};

export default useLogout;
