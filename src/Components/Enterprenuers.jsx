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
  filter:brightness(70%);

`;
const Div = styled.div`
  width: 43%;
  height: 300px;
  background-color: white;
  position: absolute;
  right: 3%;
  top: 20%;
  padding: 15px;
  padding-top:25px;
`;
const High1= styled.h1`
font-size:30px;`

const Div2= styled.div`
top:25%;
width:35%;
position:absolute;
height:300px;
left:6%;
color:white;
`

const Span=styled.span`
font-size:18px;`


const Slide = styled.div`
  position: relative;
  text-align: left;
`;

const High=styled.p`
text-decoration:underline;
font-size:20px;`
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
  width: 95%;
  grid-area: cp;
  padding: 10px;
  border:1px solid grey;
`;
const Indem = styled.div`
  width: 95%;
  grid-area: in;
  padding: 10px;
  border:1px solid grey;
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
const ImgBig = styled.img`
  width: 300px;
`;
const Flex3 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: auto;
`;
const Div3 = styled.div`
  width: 21%;
`;
const Div4 = styled.div`
  width: 22%;
  border:1px solid grey;
`;
const Head1 = styled.h1`
  color: hotpink;
  
`;
const Head2=styled.h2`
font-size:26px;
`
const Para1 = styled.p`
  font-size: 18px;
`;
const Img3 = styled.img`
  width: 30%;
`;
const Project=styled.div`
background-color:#fae4e4;
padding:10px;
`
const Spn=styled.span`
font-size:14px;
color:#fa7288;
text-decoration:none;
`
export const Enterprenuers = () => {
  return (
    <Maindiv>
      <Slider>
        <Carousel>
          <Slide>
            <Img src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2021/03/VH_Cover.png" />
            <Div>
              <High1>Get the Crowdfunding Field Guide</High1>
              <Span>
                Indiegogo is a launchpad for entrepreneurial ideas. Not sure how
                to begin? Our handy guide walks you through every step of a
                successful project.
              </Span>
              <br />
              <Button>READ THE GUIDE</Button>
            </Div>
            <Div2>
              <High>Featured</High>
              <h4>Celebrate Earth Day With Crowdfunding Changemakers (April 20-22)</h4>
              <p>Join us for a series of live roundtable panels with entrepreneurs and creators to discuss the future of green tech, sustainable fashion, electric transportation, the perils of greenwashing, and more!</p>
              <h4>SIGN UP NOW</h4>
            </Div2>
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
            <Div2>
              <High>Featured</High>
              <h4>Checklist: Ways to engage with your community</h4>
              <p>75% of backers want to communicate with the campaign owner before contributing to a campaign. Download the Community Checklist to learn how to take control and foster your community.</p>
              <h4>DOWNLOAD THE CHECKLIST</h4>
            </Div2>
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
            <Div2>
              <High>Featured</High>
              <p>Simply enter where you’re shipping to and from and in just a few clicks, you’ll gain instant insight on how best to price your perks (and save on shipping)</p>
              <h4>GET A SHIPPING QUOTE</h4>
            </Div2>
          </Slide>
          <Slide>
            <Img src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2021/02/IGG-ES-Flat-Export-Rates-Homepage-Desktop.png" />
            <Div>
              <h1>Explore the Experts Directory</h1>
              <span>
              Go to market with these experts in marketing, creative services, retail, and other professional services.
              </span>
              <br />
              <Button>DISCOVER EXPERTS</Button>
            </Div>
            <Div2>
              <High>Featured</High>
              <h4>Celebrate Earth Day With Crowdfunding Changemakers (April 20-22)</h4>
              <p>Join us for a series of live roundtable panels with entrepreneurs and creators to discuss the future of green tech, sustainable fashion, electric transportation, the perils of greenwashing, and more!</p>
              <h4>SIGN UP NOW</h4>
            </Div2>
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
            <Spn>LEARN MORE ABOUT INDIEGOGO CHINA SERVICES</Spn>
            <br />
            <br />
          </Link>
          <Link>
            <Spn>我對 INDIEGOGO CHINA 有兴趣，了解更多</Spn>
          </Link>
        </IndData>
      </IndChina>
      <h1>Success Stories</h1>
      <Flex2>
        <div>
          <ImgBig src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/04/IGG_HowItWorks_SuccessStories_387x387px_nomaticbag.jpg" />
          <Para1>
            The NOMATIC travel bag is shipping their products worldwide to 7K
            backers after raising $3M in crowdfunding on Indiegogo.
            <Link>Learn More</Link>
          </Para1>
        </div>
        <div>
          <ImgBig src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/04/IGG_HowItWorks_SuccessStories_387x387px_hyperdrive2.jpg" />
          <Para1>
            HyperDrive Thunderbolt 3 USB-C Hub for MacBook Pro raised $1M+ on
            InDemand, by targeting outreach to grow a loyal community of
            backers.<Link>Learn More</Link>
          </Para1>
        </div>
        <div>
          <ImgBig src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/07/IGG_HowItWorks_SuccessStories_387x387px_bullrest1.jpg" />
          <Para1>
            After raising $381K on Indiegogo, BullRest - the reinvented travel
            pillow - launched on Indiegogo Product Marketplace with guaranteed
            shipping.<Link>Learn More</Link>
          </Para1>
        </div>
      </Flex2>
      <Project>
        <h1>Project by project,</h1>
        <h1>we're changing the way new ideas come to life.</h1>
        <Flex3>
          <Div3>
            <Head1>1B+</Head1>
            <Para1>
              Total raised across all projects, from dance to design.
            </Para1>
          </Div3>
          <Div3>
            <Head1>11MM+</Head1>
            <Para1>
              Contributions from our amazing community of backers for 650k+
              projects.
            </Para1>
          </Div3>
          <Div3>
            <Head1>223</Head1>
            <Para1>Countries & territories are home to Indiegogo users.</Para1>
          </Div3>
          <Div3>
            <Head1>18,983%</Head1>
            <Para1>The most a campaign has exceeded its goal … so far!</Para1>
          </Div3>
        </Flex3>
      </Project>
      <div>
        <h1>Ready to Go?</h1>
        <p>
          You're only a step away from kicking off your entrepreneurial
          adventure on Indiegogo. Here's where to go next:
        </p>
        <Flex3>
          <Div4>
            <Img3 src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/07/IGG_HIW-crowdfunding-80px@2x-e1515527153625.png" />
            <Head2>Start a Campaign</Head2>
            <Para1>Take the plunge with our guided campaign-creation tool. It’s free, and you can easily start now and finish later.</Para1>
          </Div4>
          <Div4>
            <Img3 src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/07/IGG_entrepreneur-site-experts-directory-80px@2x.png" />
            <Head2>Experts Directory</Head2>
            <Para1>Take your idea further with these experienced companies recommended by Indiegogo campaigners and staff.</Para1>
          </Div4>
          <Div4>
            <Img3 src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/07/IGG_HIW-Education-center-80px@2x.png" />
            <Head2>Education Center</Head2>
            <Para1>Find everything you need for a successful campaign in one convenient location.</Para1>
          </Div4>
          <Div4>
            <Img3 src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/07/IGG_entrepreneur-site-IGGvsKS-80px@2x.png" />
            <Head2>Indiegogo vs Kickstarter</Head2>
            <Para1>Learn about the benefits of choosing Indiegogo for your idea. See our detailed breakdown.</Para1>
          </Div4>
        </Flex3>
      </div>
    </Maindiv>
  );
};
