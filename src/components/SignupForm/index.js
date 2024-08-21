import { useNavigate, Link } from "react-router-dom";
import TextInput from "../TextInput";
import Button from "../Button";

const LoginForm = ({ className = "" }) => {
  const navigate = useNavigate();

  return (
    <section className={`login-form ${className}`}>
      <div className="profile-picture" />
      <form className="hello-stranger-parent">
        <h1 className="hello-stranger">Hello, Stranger</h1>
        <div className="email-input-area">
          <TextInput placeholder="Your Name" name="password" id="password" />
          <TextInput
            placeholder="You@Email.com"
            type="email"
            name="email"
            id="email"
          />
          <TextInput
            placeholder="Password"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <Button>Get Started</Button>
      </form>
      <div className="already-have-an-account-parent">
        <div className="already-have-an">Already have an account?</div>
        <div className="login-link">
          <Link className="login-li2">Log In</Link>
        </div>
      </div>
    </section>
  );
};

export default LoginForm