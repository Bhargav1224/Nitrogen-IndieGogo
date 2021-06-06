import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  width: 20%;
  background-color: #f5f5f5;
  margin-left: 30px;
  margin-top:20px;
  & > p:hover {
    cursor: pointer;
    color: #eb1478;
  }
  & > div > p:hover {
    cursor: pointer;
    color: #eb1478;
  }
  & > div > div > div > p:hover {
    color: #eb1478;
  }
  & > div > div > div > p {
    cursor: pointer;
  }
`;

const P=styled.p`
text-align: start;
margin-left: 50px;
padding:5px 0px;
`;

const P1=styled.p`
text-align: start;
margin-left: 60px;
padding:5px 0px;
`;

const Form=styled.form`
margin-left: 50px;
`;
export const Sidebar = ({ handleCategory }) => {
  const [drop, setDrop] = useState(false);
  const [drop2, setDrop2] = useState(false);
  const [sub, setSub] = useState(true);
  const [sub1, setSub1] = useState(true);

  const handledrop = () => {
    setDrop(!drop);
    setSub(!sub);
  };

  const handledrop2 = () => {
    setDrop2(!drop2);
    setSub1(!sub1);
  };

  const handleSelect = (value) => {
    let value1 = value.toUpperCase();
    handleCategory(value1);
  };

  return (
    <div>
      <Wrapper>
      <p style={{ padding: "10px 10px", width: "200px",fontSize:'18px',fontWeight:'600' }}>Filter Result</p>
        <p style={{ padding: "10px 10px", width: "190px" }}>ALL Category</p>
        <p style={{ padding: "10px 1px", width: "150px" }}>Category</p>
        <div style={{ padding: "10px 10px", width: "230px" }}>
          <p onClick={handledrop}>
            Tech & Innovation
            {drop ? (
              <FontAwesomeIcon icon={faChevronUp}  style={{marginLeft:"6px"}} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} style={{marginLeft:"6px"}} />
            )}
          </p>
          <div onClick={() => handledrop()}>
            {sub ? (
              <div style={{ display: "block", padding: "10px 10px" }}>
                <P onClick={(e) => handleSelect(e.target.innerHTML)}>Audio</P>
                <P onClick={(e) => handleSelect(e.target.innerHTML)}>Camera Gear</P>
                <P onClick={(e) => handleSelect(e.target.innerHTML)}>Education</P>
                <P onClick={(e) => handleSelect(e.target.innerHTML)}>Energy </P>
                <P onClick={(e) => handleSelect(e.target.innerHTML)}>Fashion</P>
                <P onClick={(e) => handleSelect(e.target.innerHTML)}>Health</P>
              </div>
            ) : (
              <div style={{ display: "none" }}>
                <p></p>
              </div>
            )}
          </div>
        </div>
        <div style={{ padding: "10px 10px", width: "210px" }}>
          <p onClick={handledrop2}>
            Creative Work
            {drop2 ? (
              <FontAwesomeIcon icon={faChevronUp} style={{ marginLeft: "10px" }} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
          </p>
          <div onClick={() => handledrop2()}>
            {sub1 ? (
              <div style={{ display: "block", width: "200px" }}>
                <P1 onClick={(e) => handleSelect(e.target.innerHTML)}>Art</P1>
                <P1 onClick={(e) => handleSelect(e.target.innerHTML)}>Music</P1>
                <P1 onClick={(e) => handleSelect(e.target.innerHTML)}>Comics</P1>
                <P1 onClick={(e) => handleSelect(e.target.innerHTML)}>Film</P1>
                <P1 onClick={(e) => handleSelect(e.target.innerHTML)}>PhotograP1hy</P1>
              </div>
            ) : (
              <div style={{ display: "none" }}>
                <p></p>
              </div>
            )}
          </div>
        </div>
        <p style={{ padding: "10px 10px", width: "188px" }}>Project timing</p>
        <Form>
          <label style={{width:"40px", display: "flex", justifyContent: "space-between", marginLeft: "20px" }}>
            <input type="checkbox"/>
            All
          </label>
          <br />
          <label style={{width:"95px", display: "flex", justifyContent: "space-between", marginLeft: "20px" }}>
            <input type="checkbox" />
            Launching
          </label>
          <br />
          <label style={{width:"70px",display: "flex", justifyContent: "space-between", marginLeft: "20px" }}>
            <input type="checkbox"/>
            Ending
          </label>
        </Form>
      </Wrapper>
    </div>
  );
};
