import Button from "../Button";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const DashboardNav = ({ className = "" }) => {
  const { user, logOut } = useAuth();
  return (
    <section className={`welcome-user-parent ${className}`}>
      <div className="upper-nav">
        <h1 className="welcome-user">Welcome, {user.displayName}!</h1>

        <Button>New Project</Button>
        <div className="topnav">
          <a className="settings">Settings</a>
          <a className="help">Help</a>
          <span onClick={logOut} className="log-out">
            Log Out
          </span>
        </div>
      </div>
      <div className="vector-parent">
        <img className="frame-child" alt="" src="/topnav.svg" />
      </div>
    </section>
  );
};

export default DashboardNav;
