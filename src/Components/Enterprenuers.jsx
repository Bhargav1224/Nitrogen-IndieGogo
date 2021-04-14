import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const Maindiv = styled.div`
  text-align: center;
`;

const Slider = styled.div`
  width: 100%;
  height: 500px;
`;
const Img = styled.img`
  height: 500px;
`;
const Div = styled.div`
  width: 50%;
  height: 300px;
  background-color: white;
  position: absolute;
  right: 3%;
  top: 20%;
  padding: 15px;
`;
const Slide = styled.div`
  position: relative;
  text-align: left;
`;
const Button = styled.button`
  width: 200px;
  height: 40px;
  padding: 10px;
  color: white;
  background-color: #f31081;
  font-size: 16px;
  margin: 20px;
  border: none;
  border-radius: 10px;
`;

const CampAcc = styled.div`
  width: 70%;
  display: grid;
  gap: 20px;
  margin: auto;
  height: 200px;
  grid-template: "cp in";
`;
const Camp = styled.div`
  width: 100%;
  grid-area: cp;
  padding: 10px;
`;
const Indem = styled.div`
  width: 100%;
  grid-area: in;
  padding: 10px;
`;
const Imgicon = styled.img`
  height: 70px;
  width: 90px;
`;
const Enterpreneur = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: auto;
  margin-top: 80px;
  background-color: #f7f3f3;
  margin-bottom: 40px;
`;
const EntData = styled.div`
  width: 70%;
`;
const FlexWorks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
`;
const Flexdiv = styled.div`
  box-shadow: 2px 2px 10px 1px black;
  width: 18%;
`;
const ButtonExp = styled.button`
  color: white;
  background-color: #a7124b;
  margin-top: 100px;
  border: none;
  width: 200px;
  height: 50px;
  font-size: 20px;
`;
const DivGuide = styled.div`
  background-color: #4e4e4e;
  padding: 15px 10px;
  margin: 10px;
  color: white;
`;
const H5 = styled.div`
  font-size: 20px;
`;
const IndChina = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: auto;
  margin-top: 80px;
  background-color: #f7f3f3;
  padding: 10px;
  margin-bottom: 40px;
`;
const IndData = styled.div`
  width: 50%;
  text-align: left;
`;
const Flex2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: auto;
`;
const ImgBig=styled.img`
width:300px;

`
export const Enterprenuers = () => {
  return (
    <Maindiv>
      <Slider>
        <Carousel>
          <Slide>
            <Img src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2021/03/VH_Cover.png" />
            <Div>
              <h1>Get the Crowdfunding Field Guide</h1>
              <span>
                Indiegogo is a launchpad for entrepreneurial ideas. Not sure how
                to begin? Our handy guide walks you through every step of a
                successful project.
              </span>
              <br />
              <Button>READ THE GUIDE</Button>
            </Div>
          </Slide>
          <Slide>
            <Img src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2020/09/shutterstock_526147684_-scaled.jpg" />
            <Div>
              <h1>Get the Crowdfunding Field Guide</h1>
              <span>
                Indiegogo is a launchpad for entrepreneurial ideas. Not sure how
                to begin? Our handy guide walks you through every step of a
                successful project.
              </span>
              <br />
              <Button>READ THE GUIDE</Button>
            </Div>
          </Slide>
          <Slide>
            <Img src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2018/08/IGG_carousel-desktop_2000x468_experts-directory-general.jpg" />
            <Div>
              <h1>Get the Crowdfunding Field Guide</h1>
              <span>
                Indiegogo is a launchpad for entrepreneurial ideas. Not sure how
                to begin? Our handy guide walks you through every step of a
                successful project.
              </span>
              <br />
              <Button>READ THE GUIDE</Button>
            </Div>
          </Slide>
          <Slide>
            <Img src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2021/02/IGG-ES-Flat-Export-Rates-Homepage-Desktop.png" />
            <Div>
              <h1>Get the Crowdfunding Field Guide</h1>
              <span>
                Indiegogo is a launchpad for entrepreneurial ideas. Not sure how
                to begin? Our handy guide walks you through every step of a
                successful project.
              </span>
              <br />
              <Button>READ THE GUIDE</Button>
            </Div>
          </Slide>
        </Carousel>
      </Slider>
      <div>
        <h1>Dream it. Fund it. Make it. Ship it.</h1>
        <h1>We help at every step from concept to market.</h1>
      </div>
      <CampAcc>
        <Camp>
          <Imgicon src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/07/IGG_HIW-crowdfunding-80px@2x-e1515527153625.png" />
          <h2>Raise funds with a crowdfunding campaign</h2>
          <span>
            Acquire starter capital and validate your idea by tapping into
            Indiegogo’s global network of early adopters.
          </span>
          <br />
          <br />
          <Link>
            <span>START A CAMPAIGN ›</span>
          </Link>
        </Camp>
        <Indem>
          <Imgicon src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/08/IGG_entrepreneur-site-indemand-50px@2x.png" />
          <h2>Extend your campaign with InDemand</h2>
          <span>
            After your crowdfunding campaign, continue raising money and
            building your community with InDemand. No fundraising target, no
            deadline limits.
          </span>
          <br />
          <br />
          <Link>
            <span>ACCESS INDEMAND ›</span>
          </Link>
        </Indem>
      </CampAcc>
      <Enterpreneur>
        <img src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2018/01/T2-IGG_Entrepreneur-services.png" />
        <EntData>
          <h2>Entrepreneur Services</h2>
          <span>
            From concept to market, Indiegogo Entrepreneur Services is here to
            help. More than a crowdfunding platform, Indiegogo offers services
            and resources from key partners to empower entrepreneurs throughout
            the life of their project.
          </span>
        </EntData>
      </Enterpreneur>
      <FlexWorks>
        {" "}
        <Flexdiv>
          <Link>
            <img src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/07/IGG_experts-directory-creative-services-@2x.png" />
            <p>Create Services</p>
          </Link>
        </Flexdiv>
        <Flexdiv>
          <Link>
            {" "}
            <img src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/07/IGG_entrepreneur-site-fulfillment-50px@2x.png" />
            <p>Fulfillment</p>
          </Link>
        </Flexdiv>{" "}
        <Flexdiv>
          <Link>
            <img src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/07/IGG_entrepreneur-site-marketing-50px@2x.png" />
            <p>Marketing and Communication</p>
          </Link>
        </Flexdiv>{" "}
        <Flexdiv>
          <Link>
            {" "}
            <img src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/07/IGG_experts-directory-prototyping-and-production-@2x.png" />
            <p>Prototyping and Production</p>
          </Link>
        </Flexdiv>{" "}
        <Flexdiv>
          <Link>
            {" "}
            <img src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/07/IGG_experts-directory-retail-licensing-distribution-50x50-@2x.png" />
            <p>Retail,Licensing and Distribution</p>
          </Link>
        </Flexdiv>
      </FlexWorks>
      <ButtonExp>Find Experts</ButtonExp>
      <DivGuide>
        <h4>Ready to Start Your Business?</h4>
        <h2>Get the Essential Crowdfunding Field Guide</h2>
        <H5>
          We worked with our Campaign Strategists to compile all the best
          practices and inspiring examples of a great crowdfunding experience.
        </H5>
        <Button>READ THE GUIDE</Button>
      </DivGuide>
      <IndChina>
        <img src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2018/01/T2-IGG_Entrepreneur-services.png" />
        <IndData>
          <h2>Indiegogo China: Your Fast Track to the Global Market</h2>
          <span>
            We’re here to help China’s top innovative products launch in U.S.
            and Western markets.
          </span>
          <span>
            In the past two years alone, products from China have raised nearly
            $100 million on Indiegogo. Our team offers unparalleled support and
            resources to help you with the challenges of cross-border
            crowdfunding.
          </span>
          <hr />
          <Link>
            <span>LEARN MORE ABOUT INDIEGOGO CHINA SERVICES</span>
            <br />
            <br />
          </Link>
          <Link>
            <span>我對 INDIEGOGO CHINA 有兴趣，了解更多</span>
          </Link>
        </IndData>
      </IndChina>
      <h1>Success Stories</h1>
      <Flex2>
        <div>
          <ImgBig src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/04/IGG_HowItWorks_SuccessStories_387x387px_nomaticbag.jpg" />
          <p>
            The NOMATIC travel bag is shipping their products worldwide to 7K
            backers after raising $3M in crowdfunding on Indiegogo.
            <Link>Learn More</Link>
          </p>
        </div>
        <div>
          <ImgBig src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/04/IGG_HowItWorks_SuccessStories_387x387px_hyperdrive2.jpg" />
          <p>
            HyperDrive Thunderbolt 3 USB-C Hub for MacBook Pro raised $1M+ on
            InDemand, by targeting outreach to grow a loyal community of
            backers.<Link>Learn More</Link>
          </p>
        </div>
        <div>
          <ImgBig src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/07/IGG_HowItWorks_SuccessStories_387x387px_bullrest1.jpg" />
          <p>
            After raising $381K on Indiegogo, BullRest - the reinvented travel
            pillow - launched on Indiegogo Product Marketplace with guaranteed
            shipping.<Link>Learn More</Link>
          </p>
        </div>
      </Flex2>
    </Maindiv>
  );
};
