import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Select = styled.select`
width:50%;
height:50px;
padding:8px;
`;
const Nav = styled.div`
  top: 7%;
  background-color: #ececec;
  width: 100%;
  height:50px;
  padding:10px;
`;
const MainDiv=styled.div`
width:70%;
margin:auto;
`
const Input=styled.input`
margin-left:60%;
background-color:#6d7bf3;
color:white;
width:30%;
height:30px;
font-size:18px;
border:none;
`
const Inp=styled.input`
width:60%;
height:40px;
padding:8px;
`

export const Basics = () => {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <MainDiv>
        <Nav>
            <h2>Campaigns/Basics</h2>
        </Nav>
      <h3>Basics</h3><br/>
      <span>
        Make a good first impression: introduce your campaign objectives and
        entice people to learn more. This basic information will represent your
        campaign on your campaign page, on your campaign card, and in searches.
      </span><br/><br/>
      <form>
        <div>
          <label><h3>Campaigning title</h3></label>
          <br />
          <span>What is the title of your campaign</span>
          <br /><br/>
          <Inp type="text" placeholder="My Campaign Title" />
          <br /><br/>
        </div>
        <div>
          <label><h3>Campaign Tagline</h3></label>
          <br />
          <span>
            Provide a short description that best describes your campaign to
            your audience.
          </span>
          <br /><br/>
          <input type="text-area" style={{width:"20vw",height:"5vw"}}/>
          <br /><br/>
        </div>
        <div>
          <label><h3>Campaign Card Image</h3></label>
          <br />
          <span>Upload a square image that represents your campaign.</span>
          <br /><br/>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              ref={imageUploader}
              style={{
                display: "none",
              }}
            />
            <div
              style={{
                height: "50%",
                width: "50%",
                border: "1px dashed black",
              }}
              onClick={() => imageUploader.current.click()}
            >
              <img
                ref={uploadedImage}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </div>

          <br />
        </div>
        <div><br/>
          <label><h3>Location</h3></label>
          <br />
          <span>
            Choose the location where you are running the campaign. This
            location will be visible on your campaign page for your audience to
            see.
          </span>
          <br /><br/>
          <Inp type="text" placeholder="Country" />
          <br />
        </div><br/>
        <div>
          <label><h3>Category</h3></label>
          <br />
          <span>
            To help backers find your campaign, select a category that best
            represents your project.
          </span>
          <br /><br/>
          <Select>
            <option>Audio</option>
            <option>Camera Gear</option>
            <option>Education</option>
            <option>Energy and GreenTech</option>
            <option>Art</option>
            <option>Comics</option>
            <option>Music</option>
            <option>Culture</option>
            <option>Environment</option>
            <option>Human Rights</option>
          </Select>
        </div>
        <div><br/>
          <label><h3>Tags</h3></label>
          <br />
          <span>
            Enter up to five keywords that best describe your campaign. These
            tags will help with organization and discoverability.
          </span>
          <br />
          <Select>
            <option value="3d">3d</option>
            <option value="3d printers">3d printers</option>
            <option value="air purifiers">Air purifiers</option>
            <option value="Album">Album</option>
            <option value="Animation">Animation</option>
          </Select>
          <br />
        </div>
        <div><br/>
          <label><h3>Campaign Duration</h3></label>
          <br />
          <span>
            How many days will you be running your campaign for? You can run a
            campaign for any number of days, with a 60 day duration maximum.
          </span>
          <br />
          <input type="text-area" />
          <br />
        </div><br/>
        <Input type="submit" value="SAVE AND CONTINUE" />
      </form>
    </MainDiv>
  );
};
