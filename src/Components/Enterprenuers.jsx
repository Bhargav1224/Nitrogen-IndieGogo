import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

import { Footer } from "./Footer/Footer";

const Maindiv = styled.div`
  text-align: center;
`;

const Slider = styled.div`
  width: 100%;
  height: 500px;
`;
const Img = styled.img`
  height: 500px;
  filter: brightness(70%);
`;
const Div = styled.div`
  width: 43%;
  height: 300px;
  background-color: white;
  position: absolute;
  right: 3%;
  top: 20%;
  padding: 15px;
  padding-top: 25px;
`;
const High1 = styled.h1`
  font-size: 30px;
`;

const Div2 = styled.div`
  top: 25%;
  width: 35%;
  position: absolute;
  height: 300px;
  left: 6%;
  color: white;
`;

const Span = styled.span`
  font-size: 18px;
`;

const Slide = styled.div`
  position: relative;
  text-align: left;
`;

const High = styled.p`
  text-decoration: underline;
  font-size: 20px;
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
  width: 53%;
  display: grid;
  margin: auto;
  min-height: 200px;
  grid-template: "cp in";
  margin-bottom: 130px;
  
`;
const Camp = styled.div`
  width: 95%;
  grid-area: cp;
  padding: 10px;  
`
const Indem = styled.div`
  width: 90%;
  grid-area: in;
  padding: 10px;
  margin: auto;
  
  
`;
const Imgicon = styled.img`
  width: auto;
    height: 50px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  
`;

const Heading1=styled.h1`
font-size: 30px;
    font-weight: 700;
    line-height: 1.3em;
    text-align: center;
    margin-top: 20px;
    font-family: benton-sans,Helvetica,Arial,"sans-serif";
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    
    `
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
  width: 80%;
  padding: 30px 50px;
  line-height: 20px;
  margin-bottom: 30px;
`;
const FlexWorks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: auto;
`;
const Flexdiv = styled.div`
  width: 18%;
  border: 1px solid #ddd;
  padding: 30px 5px;
`;

const H212=styled.h1`
font-size:27px;
margin: 40px auto;`

const Imge=styled.img`
width:auto;
height: 60px;`


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
  padding: 25px 20px 20px 20px;
  line-height: 35px;
  margin: 20px;
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
  padding: 20px;
  margin-bottom: 40px;
`;
const IndData = styled.div`
  width: 70%;
  text-align: left;
  padding: 10px;
`;
const Flex2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 30px auto;
`;
const ImgBig = styled.img`
  width: 300px;
`;
const Para1 = styled.p`
font-size: 16px;
margin: 5px auto;
 padding: 0px 10px;
  min-height:130px ;
  line-height: 1.7em;
  font-weight: 500;
  text-align: left;
  font-family: benton-sans,Helvetica,Arial,"sans-serif";
  color: #2a2a2a;
  
`;
const Para5=styled.p`
font-size: 20px;
    margin-bottom: 1.5em;
    text-align: center;
    line-height: 1.7em;
    font-family: benton-sans,Helvetica,Arial,"sans-serif";
    margin: auto;
    width: 48%;
    margin-top:20px;
    color: #2a2a2a;
`
const Flex3 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 10px auto;
  padding-top: 20px;
`;
const Div3 = styled.div`
  width: 32%;
  font-size: 20px;
  background-color: #f5f5f5;
    color: #2a2a2a;
`

const H321=styled.h1`
color:black;`
const Div4 = styled.div`
  width: 33%;
  border: 1px solid grey;
  margin: 13px;
`;
const Head1 = styled.h1`
color: #eb1478;
padding: 0px;
margin: 15px 0px 0px 0px;
`;
const Head2 = styled.h2`
  font-size: 18px;
  text-align: left;
  padding: 10px;
`;

const Img3 = styled.img`
  width: 27%;
  text-align: left;
  font-size: 16px;
  line-height: 1.7em;
  padding: 20px 7px 15px 10px;

`;
const Project = styled.div`
background-color: #f5f5f5;
font-size: 16px;
    margin: 20px;
    padding: 20px;
    text-align: center;
    min-height: 130px;
    line-height: 22px;
    font-weight: 500;
    line-height: 2.5em;
    font-family: "benton-sans", "Helvetica", "sans-serif";
    color: #eb1478;
`;
const Spn = styled.span`
  font-size: 14px;
  color: #fa7288;
  padding: 15px 0px;
  margin-top: 20px;
  text-decoration: none;
`;

const Divvbar=styled.div`
margin: 40px 10px;
`


const HH3=styled.h3`
font-weight: 500;
    font-size: 18px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    font-family: benton-sans,Helvetica,"sans-serif";
    margin-bottom: 35px;
    
`
// decoration none
const Spaan1= styled.div`
text-align:left;
text-decoration: none !important;
color: #eb1478;
`

const SpanDiv=styled.span`
margin-top:20px;
padding:20px 0px;
line-height:30px;
`

const Hrr=styled.hr`
border-top: 1px solid #ddd;
margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    box-sizing: content-box;
    height: 0;
    display: block;
    unicode-bidi: isolate;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: auto;
    margin-inline-end: auto;
    overflow: hidden;
    line-height: 1.7em;
    font-size: 16px;
`

const H22=styled.h2`
margin:20px;`

const Paraa=styled.p`
text-decoration:none;`

const Spaan=styled.span`
margin: 0 0 10px;
display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: 16px;
    font-family: sans-serif;
    text-align:left !important;
    line-height: 1.7em; `

const H23= styled.h2`
font-size: 30px;
    font-weight: 700;
    margin-bottom: 15px;
    line-height: 1.3em;
    margin-top: 20px;
    font-family: benton-sans,Helvetica,Arial,"sans-serif";
`

const H21= styled.h2`
margin:30px;
font-size:25px;`

const Divlast=styled.div`
margin: 30px auto;
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
                Indiegogo is a launchpad for entrepreneurial ideas. Not sure how to begin? Our handy guide walks you
                through every step of a successful project.
              </Span>
              <br />
              <Button>READ THE GUIDE</Button>
            </Div>
            <Div2>
              <High>Featured</High>
              <h4>Celebrate Earth Day With Crowdfunding Changemakers (April 20-22)</h4>
              <p>
                Join us for a series of live roundtable panels with entrepreneurs and creators to discuss the future of
                green tech, sustainable fashion, electric transportation, the perils of greenwashing, and more!
              </p>
              <h4>SIGN UP NOW</h4>
            </Div2>
          </Slide>
          <Slide>
            <Img src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2020/09/shutterstock_526147684_-scaled.jpg" />
            <Div>
              <h1>Get the Crowdfunding Field Guide</h1>
              <span>
                Indiegogo is a launchpad for entrepreneurial ideas. Not sure how to begin? Our handy guide walks you
                through every step of a successful project.
              </span>
              <br />
              <Button>READ THE GUIDE</Button>
            </Div>
            <Div2>
              <High>Featured</High>
              <h4>Checklist: Ways to engage with your community</h4>
              <p>
                75% of backers want to communicate with the campaign owner before contributing to a campaign. Download
                the Community Checklist to learn how to take control and foster your community.
              </p>
              <h4>DOWNLOAD THE CHECKLIST</h4>
            </Div2>
          </Slide>
          <Slide>
            <Img src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2018/08/IGG_carousel-desktop_2000x468_experts-directory-general.jpg" />
            <Div>
              <h1>Get the Crowdfunding Field Guide</h1>
              <span>
                Indiegogo is a launchpad for entrepreneurial ideas. Not sure how to begin? Our handy guide walks you
                through every step of a successful project.
              </span>
              <br />
              <Button>READ THE GUIDE</Button>
            </Div>
            <Div2>
              <High>Featured</High>
              <p>
                Simply enter where you’re shipping to and from and in just a few clicks, you’ll gain instant insight on
                how best to price your perks (and save on shipping)
              </p>
              <h4>GET A SHIPPING QUOTE</h4>
            </Div2>
          </Slide>
          <Slide>
            <Img src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2021/02/IGG-ES-Flat-Export-Rates-Homepage-Desktop.png" />
            <Div>
              <h1>Explore the Experts Directory</h1>
              <span>
                Go to market with these experts in marketing, creative services, retail, and other professional
                services.
              </span>
              <br />
              <Button>DISCOVER EXPERTS</Button>
            </Div>
            <Div2>
              <High>Featured</High>
              <h4>Celebrate Earth Day With Crowdfunding Changemakers (April 20-22)</h4>
              <p>
                Join us for a series of live roundtable panels with entrepreneurs and creators to discuss the future of
                green tech, sustainable fashion, electric transportation, the perils of greenwashing, and more!
              </p>
              <h4>SIGN UP NOW</h4>
            </Div2>
          </Slide>
        </Carousel>
      </Slider>
      <Divvbar>
        <Heading1>Dream it. Fund it. Make it. Ship it.<br/>
    We help at every step from concept to market.</Heading1>
      </Divvbar>
      <CampAcc>
        <Camp>
          <Imgicon src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/07/IGG_HIW-crowdfunding-80px@2x-e1515527153625.png" />
          <HH3>CROWDFUNDING</HH3>
          
          <Spaan><strong>Raise funds with a crowdfunding campaign</strong><br/>
          
            Acquire starter capital and validate your idea by tapping into Indiegogo’s global network of early adopters.
          </Spaan>
          <br />
          <br />
          <Link  to="" style={{textDecoration:"none"}}>
            <Spaan1>START A CAMPAIGN ›</Spaan1>
          </Link>
        </Camp>
        <Indem>
          <Imgicon src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/08/IGG_entrepreneur-site-indemand-50px@2x.png" />
         <HH3>INDEMAND</HH3>
          
          <Spaan><strong>Extend your campaign with InDemand</strong><br/>
          
            After your crowdfunding campaign, continue raising money and building your community with InDemand. No
            fundraising target, no deadline limits.
          </Spaan>
          <br />
          <br />
          <Link  to="" style={{textDecoration:"none"}}>
          {/* decoration none */}
            <Spaan1 style={{textDecoration:"none"}}>ACCESS INDEMAND ›</Spaan1>
          </Link>
        </Indem>
      </CampAcc>
      <Enterpreneur>
      {/* eslint-disable-next-line */}
        <img src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2018/01/T2-IGG_Entrepreneur-services.png" style={{width:"250px",height:"200px"}} />
        <EntData>
          <H22>Entrepreneur Services</H22>
          <span>
            From concept to market, Indiegogo Entrepreneur Services is here to help. More than a crowdfunding platform,
            Indiegogo offers services and resources from key partners to empower entrepreneurs throughout the life of
            their project.
          </span>
        </EntData>
      </Enterpreneur>
      <H212>All the Right Experts to Help Your Business</H212>
      <FlexWorks>
        {" "}
        <Flexdiv>
          <Link  to="" style={{textDecoration:"none"}}>
            <Imge src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/07/IGG_experts-directory-creative-services-@2x.png" />
            <p>Create Services</p>
          </Link>
        </Flexdiv>
        <Flexdiv>
         
          <Link  to="" style={{textDecoration:"none"}}>
            {" "}
            <Imge src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/07/IGG_entrepreneur-site-fulfillment-50px@2x.png" />
            <p>Fulfillment</p>
          </Link>
        </Flexdiv>{" "}
        <Flexdiv>
          <Link  to="" style={{textDecoration:"none"}}>
            <Imge src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/07/IGG_entrepreneur-site-marketing-50px@2x.png" />
            <p>Marketing and Communication</p>
          </Link>
        </Flexdiv>{" "}
        <Flexdiv>
          <Link  to="" style={{textDecoration:"none"}} >
            {" "}
            <Imge src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/07/IGG_experts-directory-prototyping-and-production-@2x.png" />
            <p>Prototyping and Production</p>
          </Link>
        </Flexdiv>{" "}
        <Flexdiv>
          <Link  to="" style={{textDecoration:"none"}}>
            {" "}
            <Imge src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/07/IGG_experts-directory-retail-licensing-distribution-50x50-@2x.png" />
            <Paraa>Retail,Licensing and Distribution</Paraa>
          </Link>
        </Flexdiv>
      </FlexWorks>
      <ButtonExp>Find Experts</ButtonExp>
      <DivGuide>
        <h4>Ready to Start Your Business?</h4>
        <h2>Get the Essential Crowdfunding Field Guide</h2>
        <H5>
          We worked with our Campaign Strategists to compile all the best practices and inspiring examples of a great
          crowdfunding experience.
        </H5>
        <Button>READ THE GUIDE</Button>
      </DivGuide>
      <IndChina>
      {/* eslint-disable-next-line */}
        <img src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2018/01/T2-IGG_Entrepreneur-services.png" style={{width:"270px"}} />
        <IndData>
          <H23>Indiegogo China: Your Fast Track to the Global Market</H23>
          <SpanDiv>We’re here to help China’s top innovative products launch in U.S. and Western markets.<br/>
         In the past two years alone, products from China have raised nearly $100 million on Indiegogo. Our team
            offers unparalleled support and resources to help you with the challenges of cross-border crowdfunding.
          </SpanDiv>
          <br/>
          <Hrr />
          <Link  to="" style={{textDecoration:"none"}}>
            <Spn>LEARN MORE ABOUT INDIEGOGO CHINA SERVICES</Spn>
            <br />
            <br />
          </Link>
          <Link  to="" style={{textDecoration:"none"}}>
            <Spn>我對 INDIEGOGO CHINA 有兴趣，了解更多</Spn>
          </Link>
        </IndData>
      </IndChina>

      <H21>Success Stories</H21>
      
      <Flex2>
        <div>
          <ImgBig src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/04/IGG_HowItWorks_SuccessStories_387x387px_nomaticbag.jpg" />
          <Para1>
            The NOMATIC travel bag is shipping their products worldwide to 7K backers after raising $3M in crowdfunding
            on Indiegogo.
            <Link  to="" style={{textDecoration:"none",color:"#eb1478"}}>Learn More</Link>
          </Para1>
        </div>
        <div>
          <ImgBig src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/04/IGG_HowItWorks_SuccessStories_387x387px_hyperdrive2.jpg" />
          <Para1>
            HyperDrive Thunderbolt 3 USB-C Hub for MacBook Pro raised $1M+ on InDemand, by targeting outreach to grow a
            loyal community of backers.
           
            <Link  to="" style={{textDecoration:"none",color:"#eb1478"}}>Learn More</Link>
          </Para1>
        </div>
        <div>
          <ImgBig src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/07/IGG_HowItWorks_SuccessStories_387x387px_bullrest1.jpg" />
          <Para1>
            After raising $381K on Indiegogo, BullRest - the reinvented travel pillow - launched on Indiegogo Product
            Marketplace with guaranteed shipping.
            <Link  to="" style={{textDecoration:"none", color:"#eb1478"}}>Learn More</Link>
          </Para1>
        </div>
      </Flex2>
      <Project>
        <H321>Project by project,</H321>
        <H321>we're changing the way new ideas come to life.</H321>
        <Flex3>
          <Div3>
            <Head1>1B+</Head1>
            <Para1>Total raised across all projects, from dance to design.</Para1>
          </Div3>
          <Div3>
            <Head1>11MM+</Head1>
            <Para1>Contributions from our amazing community of backers for 650k+ projects.</Para1>
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
      <Divlast>
        <h1>Ready to Go?</h1>
        <Para5>
          You're only a step away from kicking off your entrepreneurial adventure on Indiegogo. Here's where to go next:
        </Para5>
        <Flex3>
          <Div4>
            <Img3 src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/07/IGG_HIW-crowdfunding-80px@2x-e1515527153625.png" />
            <Head2>Start a Campaign</Head2>
            <Para1>
              Take the plunge with our guided campaign-creation tool. It’s free, and you can easily start now and finish
              later.
            </Para1>
          </Div4>
          <Div4>
            <Img3 src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/07/IGG_entrepreneur-site-experts-directory-80px@2x.png" />
            <Head2>Experts Directory</Head2>
            <Para1>
              Take your idea further with these experienced companies recommended by Indiegogo campaigners and staff.
            </Para1>
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
      </Divlast>
      <Footer />
    </Maindiv>
  );
};
