import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Modal from "react-modal";
import { Redirect } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Footer } from "../Footer/Footer";
export const EachCard = () => {
  const [data, setData] = React.useState([]);
  const [follow, setFollow] = React.useState(false);
  const [modalOn, setModalOn] = React.useState(false);
  const [payment, setPayment] = React.useState(false);

  const { id } = useParams();
  React.useEffect(() => {
    getIndividualTask();
  }, []);
  const getIndividualTask = () => {
    axios.get(`https://mymock-server-shubham00.herokuapp.com/campaign/${id}`).then((response) => {
      setData(response.data);
    });
  };
  const { title, category, descrition, percentage, days, imageUrl, raisedAmount } = data;
  //   if (payment) {
  //     <Redirect to={"/"} />;
  //   }
  console.log(payment);
  return (
    <>
      <MainCont>
        <ImageCont>
          <img src={imageUrl} alt="Image" />
        </ImageCont>
        <TextCont>
          <p>FUNDING</p>
          <h1>{title}</h1>
          <P>{descrition}</P>
          <p> Campaign | Los Angeles, United States</p>
          <FundStatus>
            <h2>$ {raisedAmount}</h2>
            <P>943 backers</P>
          </FundStatus>
          <StatusBar></StatusBar>
          <PercentageCont>
            <P1>{percentage} %</P1>
            <P1>{days} Days Left</P1>
          </PercentageCont>
          <BtnCont>
            <BackItBtn onClick={() => setModalOn(true)}>BACK IT</BackItBtn>
            <FollowBtn onClick={() => setFollow(!follow)}>{follow ? "Following" : "Follow"}</FollowBtn>
          </BtnCont>
        </TextCont>
        {payment ? (
          <Redirect to={"/"} />
        ) : (
          <Modal
            style={{
              overlay: {},
              content: {
                margin: "auto",
                backgroundColor: "white",
                width: "500px",
                height: "600px",
                boxShadow: "0 0 20px #919191",
                textAlign: "center",
              },
            }}
            isOpen={modalOn}
            onRequestClose={() => setModalOn(false)}
          >
            <h2>Back this project</h2>
            <LabelCont>
              <p>Make a contribution</p>
            </LabelCont>
            <InpCont>
              <input type="text" placeholder="$" />
              <button onClick={() => setPayment(!payment)}>Continue</button>
            </InpCont>
          </Modal>
        )}
      </MainCont>
      <hr />
      <FeaturesCont>
        <Tabs>
          <CategoryCont>
            <TabList
              style={{
                display: "flex",
                width: "500px",
                justifyContent: "space-around",
                marginTop: "10px",
              }}
            >
              <Tab style={{ listStyle: "none" }}>
                <P1>STORY</P1>
              </Tab>
              <Tab style={{ listStyle: "none" }}>
                <P1>FAQ</P1>
              </Tab>
              <Tab style={{ listStyle: "none" }}>
                <P1>UPDATES</P1>
              </Tab>
              <Tab style={{ listStyle: "none" }}>
                <P1>COMMENTS</P1>
              </Tab>
            </TabList>
          </CategoryCont>
          <TabPanel>
            <StoryCont>
              <h4>Prototype</h4>
              <p>
                The project team has a working demo, not the final product. Their ability to begin production may be
                affected by product development or financial challenges. Learn More
              </p>
            </StoryCont>
          </TabPanel>
          <TabPanel>
            <FaqCont>
              <h3>Frequently Asked Questions</h3>
              <h4>What is Flaüs made of?</h4>
              <p>
                Flaüs is made from eco-friendly materials, including infinitely sustainable aluminum (for the vertical
                body) and cornstarch-based based bioplastic that is 100% compostable and biodegradable (for all internal
                and external plastic components, including the magnetic mirror mount as well as the interchangeable
                Flaüs heads).
              </p>
              <h4>How long does the battery last?</h4>
              <p>
                Flaüs is powered by a rechargeable lithium-ion battery that fully charges within 30 minutes and lasts up
                to one month on a single charge with once-a-day use. This cable has a male USB-C connection on one side
                & a male USB-A connection on the other side and can be charged by plugging your Flaüs into any
                Apple/Android phone charger, laptop/computer, or generic USB-A charging brick. It is compatible with all
                15 types of international electrical outlet plugs used worldwide (Type-A through Type-O).
              </p>
              <h4>How is the floss replaced?</h4>
              <p>
                After each flossing session, we recommend replacing the “used” Flaüs head with a fresh/new Flaüs head
                for a hygienic clean. Our Flaüs heads easily snap on-and-off from the Flaüs neck/body. Once installed,
                Flaüs heads will remain very secure while flossing throughout your mouth. Once you have finished
                flossing, we suggest disposing of the used Flaüs head in either the recycle bin or compost bin.
              </p>
            </FaqCont>
          </TabPanel>
          <TabPanel>
            <UpdateCont>
              <p>
                by Flaüs <br />
                Apr 16, 2021 • 8:40PM
              </p>
              <hr />
              <h3>800+ Backers are Loving US!</h3>
              <p>
                Hello friends! Wow! In just 3 hours, Flaüs was 100% funded and the campaign has now grown to include
                over 800 backers! That’s amazing, and you’re amazing for joining us. <br /> We can’t begin to express
                how excited and humbled all of us here on the Flaüs team are. The overwhelmingly positive interest and
                support for Flaüs has been extremely encouraging, and we cannot wait to deliver everything we promise,
                and more. <br /> We’ll say this a lot: thank you all so much.
              </p>
            </UpdateCont>
          </TabPanel>
          <TabPanel>
            <CommentsCont>
              <p>Post a comment</p>
              <input type="text" />
              <button>Post Comment</button>
            </CommentsCont>
          </TabPanel>
        </Tabs>
      </FeaturesCont>
      <Footer />
    </>
  );
};

//styled-components

const MainCont = styled.div`
  width: 80%;
  height: 500px;
  margin: auto;
  margin-top: 60px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
`;
const ImageCont = styled.div`
  width: 53%;
  height: 100%;
  & > img {
    width: 100%;
    height: 100%;
  }
`;

const TextCont = styled.div`
  width: 45%;
  height: 100%;
  & > h1 {
    margin: 10px 0;
  }
  & > p {
    margin-bottom: 10px;
  }
`;

const FundStatus = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;
const StatusBar = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 10px;
  border: none;
  background-color: #34ca96;
  margin: 10px 0;
`;
const PercentageCont = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const BtnCont = styled.div`
  width: 100%;
  display: flex;
`;

const BackItBtn = styled.button`
  width: 20%;
  height: 45px;
  background-color: #e51075;
  border: 1px solid#e51075;
  color: white;
  font-size: 17px;
  border-radius: 5px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
`;
const FollowBtn = styled.button`
  width: 20%;
  height: 45px;
  background-color: white;
  border: 1px solid #7a7a7a;
  color: black;
  font-size: 17px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-left: 20px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
`;

const P = styled.p`
  font-size: 20px;
  line-height: 30px;
`;
const P1 = styled.p`
  font-size: 17px;
  line-height: 30px;
`;

const LabelCont = styled.div`
  width: 40%;
  margin-top: 40px;
`;

const InpCont = styled.div`
  width: 90%;
  height: 100px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px auto;
  & > input {
    width: 70%;
    height: 40%;
    outline: none;
  }
  & > button {
    width: 22%;
    height: 39%;
    background-color: white;
    border: 1px solid #7a7a7a;
    color: #e51075;
    font-size: 17px;
    font-weight: bold;
    letter-spacing: 1px;
    margin-left: 20px;
    border-radius: 2px;
    cursor: pointer;
    outline: none;
  }
`;

const FeaturesCont = styled.div`
  width: 42%;
  border: 1px solid #c4c4c4;
  margin-left: 10%;
  margin-top: 40px;
  margin-bottom: 40px;
  height: 600px;
`;

const CategoryCont = styled.div`
  width: 80%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  & > p {
    cursor: pointer;
    border-bottom: 1px solid black;
  }
`;

const StoryCont = styled.div`
  width: 100%;
  padding: 30px;
  & > p {
    margin: 10px 0;
  }
`;

const FaqCont = styled.div`
  width: 100%;
  padding: 30px;
  & > h4 {
    margin: 10px 0;
  }
`;

const UpdateCont = styled.div`
  width: 100%;
  padding: 30px;
  & > h3 {
    margin: 10px 0;
  }
  & > p {
    margin: 10px 0;
  }
`;

const CommentsCont = styled.div`
  width: 100%;
  padding: 30px;
  & > p {
    margin: 10px 0;
  }
  & > input {
    width: 100%;
    height: 90px;
    outline: none;
  }
  & > button {
    margin: 30px 0;
    float: right;
    width: 26%;
    height: 40px;
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: bold;
    background-color: #c4c4c4;
    outline: none;
    color: white;
    border: none;
    cursor: pointer;
  }
`;
