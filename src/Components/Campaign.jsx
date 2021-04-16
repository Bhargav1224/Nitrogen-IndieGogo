import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import robo from "./../Images/robo.PNG";

const Camdiv = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: auto;
`;

const Camdiv1 = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Camdiv2 = styled.div`
  text-align: center;
  filter: grayscale(100%);
  margin: 5px;
  padding: 40px;
  border:.5px solid black;
  width: 96%;
  margin-top: 50px;
  height: 300px;
  :hover& {
    filter: none;
    transform: scale(1.03);
  }
`;
const Img1 = styled.img`
  width: 130px;
  height: 60px;
`;

const Tp = styled.p`
  margin-top: 20px;
  text-align: center;
`;
const RobDiv = styled.div`
  width: 40%;
  margin: auto;
`;
const ImgRob = styled.img`
  width: 100%;
`;
export const Campaign = () => {
  return (
    <div>
      <RobDiv>
        <ImgRob src={robo} />
      </RobDiv>
      <Camdiv1>
        <h1>Welcome to Indiegogo</h1>
        <p>What are you crowdfunding for?</p>
      </Camdiv1>

      <Camdiv>
        <Link to={"/start-a-campaign/project"} style={{textDecoration:"none"}}>
          
          <Camdiv2>
            <h2>A project</h2>
            <br />
            <p>
              Indiegogo is a crowdfunding platform helping entrepreneurial ideas
              come to life.
            </p>
            <br />
            <p>5% platform fee </p>
            <br />
            <Img1
              src="https://www.techadvisor.co.uk/cmsdata/features/3779591/should-i-buy-from-indiegogo-main_thumb800.png"
              alt="indiegogo"
            />
          </Camdiv2>
        </Link>
        <Link style={{textDecoration:"none"}}>
          {" "}
          <Camdiv2>
            <h2>A cause</h2>
            <br />
            <p>
              GoFundMe is the world's largest and most trusted free social
              fundraising platform.
            </p>
            <br />
            <p>0% platform fee </p>
            <br />
            <Img1
              src="https://theme.zdassets.com/theme_assets/196447/72ab29b19ac3aa13a964e08152ed35a9e3ae95db.png"
              alt="gofundme"
            />
          </Camdiv2>
        </Link>
      </Camdiv>
      <Tp>
        All Indiegogo projects must provide banking information, a
        government-issued ID, location, and tax information. This information is
        used to prevent fraud, comply with the law, and disburse project funds.
      </Tp>
    </div>
  );
};
