import React from "react";
import styled from "styled-components";
import robo from "../Images/robo.PNG";
import { Link } from "react-router-dom";

const MainDiv = styled.div`
  width: 50%;
  margin: auto;
`;
const Select = styled.select`
  width: 100%;
  height: 30px;
  padding: 5px;
`;
const RobDiv = styled.div`
  width: 50%;
  margin: auto;
`;
const ImgRob = styled.img`
  width: 100%;
`;
const Camdiv1 = styled.div`
  text-align: center;
  margin-top: 20px;
  line-height: 30px;
`;
const Div1 = styled.div`
  margin: 20px 10px;
`;
const Pers1 = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Button = styled.button`
  width: 50%;
  height: 40px;
  margin-left: 24%;
`;
const Input = styled.input`
  margin-left: 20px;
`;

export const Camp = () => {
  return (
    <MainDiv>
      {" "}
      <RobDiv>
        <ImgRob src={robo} />
      </RobDiv>
      <Camdiv1>
        <h1>Let’s get ready to start your campaign!</h1>
        <p>
          We want to create the best onboarding for you – please fill out the information below.{" "}
          <h4>Your answers will be locked for this campaign and can’t be changed later.</h4>
        </p>
      </Camdiv1>
      <Div1>
        <h3>Who are you raising money for?</h3>
        <p>Please choose the type of account that will be receiving your funds.</p>
        <br />
        <Pers1>
          <div>
            <Input type="radio" name="person" />
            <label> Individual</label>
          </div>
          <div>
            <Input type="radio" name="person" />
            <label> Business or Non-profit</label>
          </div>
        </Pers1>
      </Div1>
      <Div1>
        <h3>Where are you located?</h3>
        <p>
          If you are raising funds as an individual, what is your country of legal residence? If you are raising funds
          for a business, where is the business headquartered? Learn more about country limitations.
        </p>
        <br />
        <Select name="country">
          <option value="Aus">Australia</option>
          <option value="US">U.S.</option>
          <option value="Ind">India</option>
          <option value="UK">U.K.</option>
          <option value="Fra">France</option>
        </Select>
      </Div1>
      <Div1>
        <h3>Where is your bank?</h3>
        <p>Your bank account location determines the currency in which you can raise funds.</p>
        <br />
        <Select>
          {/* <span>Select a Bank country</span> */}
          <option name="country"></option>
          <option value="Other">Other Countries</option>
          <option value="Aus">Australia</option>
          <option value="US">U.S.</option>
          <option value="Ind">India</option>
          <option value="UK">U.K.</option>
          <option value="Fra">France</option>
        </Select>
      </Div1>
      <Link to="/campaigns/basics">
        <Button>START MY CAMPAIGN</Button>
      </Link>
    </MainDiv>
  );
};
