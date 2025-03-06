import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router";

function Dashboard() {

  const { token, loading } = useContext(AuthContext);

  if(loading) {
    return null;
  }

  if(!token) {
    return <Navigate to="/login" replace/>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;