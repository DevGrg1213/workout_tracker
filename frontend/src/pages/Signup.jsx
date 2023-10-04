import { useState } from "react";
import {useSignup} from "../hooks/useSignup";
import { Link } from "react-router-dom";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {signup,isLoading,error} = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email,password);
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <label>Email address:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button disabled={isLoading}>Sign up</button>
      <span>
        <Link to="/login">Already have an account ?</Link>
      </span>
      {error && <div>{error}</div>}
    </form>
  );
};

export default Signup;
