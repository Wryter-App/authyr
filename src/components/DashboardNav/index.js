import Button from "../Button";
import { useAuth } from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

const DashboardNav = ({ className = "" }) => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate()
  return (
    <section className={`welcome-user-parent ${className}`}>
      <div className="upper-nav">
        <h1 className="welcome-user">Welcome, {user.displayName}!</h1>

        <Button>New Project</Button>
        <div className="topnav">
          <a onClick={() => navigate('/app/settings')} className="settings">Settings</a>
          <a className="help">Help</a>
          <span data-test='logout-link' onClick={logOut} className="log-out">
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
