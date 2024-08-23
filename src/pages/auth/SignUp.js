import { useState } from "react";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { registerUser, user } = useAuth();
  const navigate = useNavigate();
  const onButtonClick = (e) => {
    e.preventDefault()
    registerUser( email, password)
  };

  const onLogInTextClick = () => {
    navigate("/login");
  };

  if (user) {
    navigate("/app");
  }

  return (
    <div className="sign-up1">
      <div className="sign-up-page">
        <h1 className="sign-up2">
          <p className="sign">Sign</p>
          <p className="sign">Up</p>
        </h1>
      </div>
      <div className="login-form">
        <div className="login-image" />
        <form className="hello-stranger-parent">
          <h1 className="hello-stranger">Hello, Stranger!</h1>
          <div className="textinput-group">
            <TextInput placeholder="Your Name" onChange={e => setName(e.target.value)} />
            <TextInput
              placeholder="You@Email.com"
              required
              type='email'
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextInput
              propAlignSelf="stretch"
              propFlex="unset"
              placeholder="Your Password"
              type='password'
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <Button onClick={onButtonClick}>Get Started</Button>
        </form>
        <div className="account-prompt">
          <div className="already-have-an-account-parent">
            <div className="already-have-an">Already have an account?</div>
            <div className="login-prompt">
              <b className="log-in1" onClick={onLogInTextClick}>
                Log In
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
