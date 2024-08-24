import { useState } from "react";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginUser, user } = useAuth();
  const navigate = useNavigate();
  const onButtonClick = (e) => {
    e.preventDefault();
    loginUser(email, password);
  };

  const onLogInTextClick = () => {
    navigate("/");
  };

  if (user) {
    navigate("/app");
  }

  return (
    <div className="sign-up1">
      <div className="sign-up-page">
        <h1 className="sign-up2">
          <p className="sign">Log</p>
          <p className="sign">In</p>
        </h1>
      </div>
      <div className="login-form">
        <div className="login-image" />
        <form className="hello-stranger-parent">
          <h1 className="hello-stranger">Welcome Back!</h1>
          <div className="textinput-group">
            
            <TextInput
              placeholder="You@Email.com"
              required
              type="email"
                          onChange={(e) => setEmail(e.target.value)}
                          data-test='email-input'
            />
            <TextInput
              propAlignSelf="stretch"
              propFlex="unset"
              placeholder="Your Password"
              type="password"
                          onChange={(e) => setPassword(e.target.value)}
                          data-test='password-input'
            />
          </div>
          <Button data-test='login-button' onClick={onButtonClick}>Log In</Button>
        </form>
        <div className="account-prompt">
          <div className="already-have-an-account-parent">
            <div className="already-have-an">Don't have an account?</div>
            <div className="login-prompt">
              <b className="log-in1" onClick={onLogInTextClick}>
                Sign Up
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
