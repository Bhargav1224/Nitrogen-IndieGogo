import React, { useEffect, useState } from "react";
import styled from "styled-components";
import styles from "./AuthPage.module.css";
import { fire } from "../Firebase/fire";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginSuccess } from "../../Redux/auth/authAction";
import { Footer } from "../Footer/Footer";

export const AuthPage = () => {
  const [user, setUser] = useState();
  const [email, setEmail] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const dispatch = useDispatch();

  const clearInputs = () => {
    setEmail("");
    setPassword("");
    setSignUpEmail("");
    setSignUpPassword("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        alert(err.code);
      });
    authListener();
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(signUpEmail, signUpPassword)
      .then((user) => {
        fire.database().ref(`users/${user.uid}`).set({ displayName: "stark" });
      })
      .catch((err) => {
        alert(err.code);
      });
    authListener();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
        console.log(user);
      } else {
        setUser("");
      }
    });
  };

  let emailId;
  let userName;
  if (user != null) {
    emailId = user.email;
    if (emailId != null) {
      let userData = emailId.split("@");
      userName = userData[0];
      let payload = {
        user: true,
        userName: userName,
      };
      dispatch(loginSuccess(payload));
    }
  }
  console.log(userName);
  useEffect(() => {
    authListener();
  }, []);
  console.log(user);
  return (
    <>
      {user ? (
        <Redirect to={"/"} />
      ) : (
        <MainCont>
          <FacebookCont>
            <h1>Get Started Quickly</h1>
            <p>Activate your community and discover what your friends are funding.</p>
            <p>No posts without your permission.</p>
            <FacebookBtn className={styles.facebookBtn}>SIGN IN WITH FACEBOOK</FacebookBtn>
          </FacebookCont>

          <SignUpCont>
            <h1>Sign Up</h1>
            <FormCont>
              <InputCont>
                <input type="text" placeholder="First Name" />
              </InputCont>
              <InputCont>
                <input type="text" placeholder="Last Name" />
              </InputCont>{" "}
              <InputCont>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={signUpEmail}
                  onChange={(e) => setSignUpEmail(e.target.value)}
                />
              </InputCont>
              <InputCont>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={signUpPassword}
                  onChange={(e) => setSignUpPassword(e.target.value)}
                />
              </InputCont>
              <CheckboxCont>
                <input type="checkbox" />
                <p>Sign me up for the weekly newsletter</p>
              </CheckboxCont>
              <CheckboxCont>
                <input type="checkbox" required />
                <p>I agree to the Terms of Use and have read and understand the Privacy Policy</p>
              </CheckboxCont>
              <CaptchaCont>
                <CaptchaCheck>
                  <input type="checkbox" required />
                  <p>I'm not a robot</p>
                </CaptchaCheck>
                <img
                  width="60px"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/1024px-RecaptchaLogo.svg.png"
                  alt="captcha"
                />
              </CaptchaCont>
              <SignBtn className={styles.signInBtn} onClick={handleSignUp}>
                CREATE AN ACCOUNT
              </SignBtn>
            </FormCont>
          </SignUpCont>
          <LoginCont>
            <h1>Log In</h1>
            <FormCont>
              <InputCont>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputCont>
              <InputCont>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputCont>
              <SignBtn className={styles.signInBtn} onClick={handleLogin}>
                LOG IN
              </SignBtn>
            </FormCont>
          </LoginCont>
        </MainCont>
      )}
      <Footer />
    </>
  );
};

//styled-components

const MainCont = styled.div`
  width: 80%;
  height: 70vh;
  margin: 5% auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const FacebookCont = styled.div`
  width: 30%;
  height: 96%;
  & > h1 {
    font-weight: 400;
  }
  & > p {
    font-size: 17px;
    font-weight: 100;
    color: #2c2c2c;
    padding: 6px 0;
  }
`;

const SignUpCont = styled.div`
  width: 30%;
  height: 96%;
`;

const LoginCont = styled.div`
  width: 30%;
  height: 96%;
`;

const FacebookBtn = styled.button`
  width: 100%;
  height: 8%;
`;

const FormCont = styled.form`
  width: 95%;
  margin: 4% auto;
  padding: 2%;
  background-color: white;
`;

const InputCont = styled.div`
  width: 100%;
  height: 40px;
  margin: 10px 0;
  & > input {
    width: 100%;
    height: 100%;
    border: 1px solid gray;
    border-radius: 2px;
  }
`;

const CheckboxCont = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  & > p {
    margin-left: 3%;
  }
`;

const CaptchaCheck = styled.div`
  display: flex;
  width: 80%;
  height: 30px;
  margin-left: 10px;
  & > p {
    margin-left: 3%;
  }
`;
const CaptchaCont = styled.div`
  width: 80%;
  border: 1px solid #969696;
  height: 70px;
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

const SignBtn = styled.button`
  width: 100%;
  height: 40px;
  margin-top: 10px;
`;
