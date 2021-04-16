import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  width: 20%;
  background-color: #f5f5f5;
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
    console.log(value1);
    handleCategory(value1);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Wrapper>
        <p style={{ padding: "10px 10px", width: "200px" }}>ALL Category</p>
        <p style={{ padding: "10px 10px", width: "200px" }}>Filter Result</p>
        <p style={{ padding: "10px 10px", width: "200px" }}>Category</p>
        <div style={{ padding: "10px 10px", width: "200px" }}>
          <p onClick={handledrop}>
            Tech & Innovation
            {drop ? (
              <FontAwesomeIcon icon={faChevronUp} style={{ marginLeft: "10px" }} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
          </p>
          <div onClick={() => handledrop()}>
            {sub ? (
              <div style={{ display: "block", padding: "10px 10px" }}>
                <p onClick={(e) => handleSelect(e.target.innerHTML)}>Audio</p>
                <p onClick={(e) => handleSelect(e.target.innerHTML)}>Camera Gear</p>
              </div>
            ) : (
              <div style={{ display: "none" }}>
                <p></p>
              </div>
            )}
          </div>
        </div>
        <div style={{ padding: "10px 10px", width: "200px" }}>
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
                <p onClick={(e) => handleSelect(e.target.innerHTML)}>Art</p>
                <p onClick={(e) => handleSelect(e.target.innerHTML)}>Music</p>
              </div>
            ) : (
              <div style={{ display: "none" }}>
                <p></p>
              </div>
            )}
          </div>
        </div>
        <p style={{ padding: "10px 10px", width: "200px" }}>Project timing</p>
        <form style={{ padding: "10px 10px", width: "200px" }}>
          <label style={{ width: "200px", padding: "10px 10px" }}>
            <input type="checkbox" />
            All
          </label>
          <br />
          <label style={{ width: "200px" }}>
            <input type="checkbox" />
            Launching
          </label>
          <br />
          <label style={{ width: "200px" }}>
            <input type="checkbox" />
            Ending
          </label>
        </form>
      </Wrapper>
    </div>
  );
};
