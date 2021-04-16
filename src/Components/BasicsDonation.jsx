import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";


const Select = styled.select`
  display: flex;
`;
const Nav=styled.div`
top:10%;
position:fixed;
background-color:#ececec;
width:100%;
`

export const Basics = () => {
    const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
        
      <h5>Basics</h5>
      <span>
        Make a good first impression: introduce your campaign objectives and
        entice people to learn more. This basic information will represent your
        campaign on your campaign page, on your campaign card, and in searches.
      </span>
      <form>
        <div>
          <label>Campaigning title</label>
          <br />
          <span>What is the title of your campaign</span>
          <br />
          <input type="text" placeholder="My Campaign Title" />
          <br />
        </div>
        <div>
          <label>Campaign Tagline*</label>
          <br />
          <span>
            Provide a short description that best describes your campaign to
            your audience.
          </span>
          <br />
          <input type="text-area" />
          <br />
        </div>
        <div>
          <label>Campaign Card Image *</label>
          <br />
          <span>Upload a square image that represents your campaign.</span>
          <br />
          <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={imageUploader}
        style={{
          display: "none"
        }}
      />
      <div
        style={{
          height: "60px",
          width: "60px",
          border: "1px dashed black"
        }}
        onClick={() => imageUploader.current.click()}
      >
        <img
          ref={uploadedImage}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute"
          }}
        />
      </div>
      Click to upload Image
    </div>

          <br />
        </div>
        <div>
          <label>Location*</label>
          <br />
          <span>
            Choose the location where you are running the campaign. This
            location will be visible on your campaign page for your audience to
            see.
          </span>
          <br />
          <input type="text" placeholder="Country" />
          <br />
        </div>
        <div>
          <label>Category</label>
          <br />
          <span>
            To help backers find your campaign, select a category that best
            represents your project.
          </span>
          <br />
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
        <div>
          <label>Tags*</label>
          <br />
          <span>
            Enter up to five keywords that best describe your campaign. These
            tags will help with organization and discoverability.
          </span>
          <br />
          <select>
            <option value="3d">3d</option>
            <option value="3d printers">3d printers</option>
            <option value="air purifiers">Air purifiers</option>
            <option value="Album">Album</option>
            <option value="Animation">Animation</option>
          </select>
          <br />
        </div>
        <div>
          <label>Campaign Duration*</label>
          <br />
          <span>
            How many days will you be running your campaign for? You can run a
            campaign for any number of days, with a 60 day duration maximum.
          </span>
          <br />
          <input type="text-area"/>
          <br />
        </div>
      </form>
    </div>
  );
};
