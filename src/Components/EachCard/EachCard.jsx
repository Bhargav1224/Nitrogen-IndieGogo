import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Modal from "react-modal";
import { Redirect } from "react-router-dom";
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
    </>
  );
};

//styled-components

const MainCont = styled.div`
  width: 80%;
  height: 500px;
  border: 1px solid black;
  margin: auto;
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
`;
const ImageCont = styled.div`
  width: 53%;
  height: 100%;
  border: 1px solid black;
  & > img {
    width: 100%;
    height: 100%;
  }
`;

const TextCont = styled.div`
  width: 45%;
  height: 100%;
  border: 1px solid black;
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
