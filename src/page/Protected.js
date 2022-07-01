import { Navigate } from "react-router-dom";
import Home from './Home'
const Protected = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/Dashboard" replace />;
  }
  return children;
};
export default Protected;
