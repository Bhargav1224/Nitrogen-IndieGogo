import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import  axios from 'axios'
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
const initial={
  title:'',
  imageUrl:'https://c2.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/eknfkaaa27hubowbb7zg',
  descrition:'',
  raisedAmount:'',
  category:'',
  percentage:'',
  days:''
}
export const Basics = () => {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);
  const [query,setQuery]=React.useState(initial)
  const [list,setList]=React.useState([])
  const {title,descrition,imageUrl,raisedAmount,category,percentage,days}=query

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

  const handleSubmit=(e)=>{
       e.preventDefault();
       const payload={
        id:percentage,
        title,
        imageUrl,
         descrition,
         raisedAmount,
         percentage,
         days
      }
  
      const update=[...list,payload]
      setList(update)
     axios.post('https://mymock-server-shubham00.herokuapp.com/campaign',parseInt(query))
     .then((res)=>{
       console.log(res)
     })
     .catch((err)=>{
      console.log(err)
     })
  }

  const handleChange=(e)=>{
     const {name,value}=e.target
     setQuery({...query,[name]:value})
  }
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
      <form onSubmit={handleSubmit}>
        <div>
          <label><h3>Campaigning title</h3></label>
          <br />
          <span>What is the title of your campaign</span>
          <br /><br/>
          <Inp type="text" placeholder="My Campaign Title" value={title} name="title" onChange={handleChange} />
          <br /><br/>
        </div>
        <div>
          <label><h3>Campaign Description</h3></label>
          <br />
          <span>
            Provide a short description that best describes your campaign to
            your audience.
          </span>
          <br /><br/>
          <input type="text-area" value={descrition} name="descrition" onChange={handleChange} style={{width:"20vw",height:"5vw"}}/>
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
          <label><h3>Raise Fund</h3></label>
          <br />
          <span>
            Choose the location where you are running the campaign. This
            location will be visible on your campaign page for your audience to
            see.
          </span>
          <br /><br/>
          <Inp type="text" placeholder="Raise Fund" value={raisedAmount} name="raisedAmount" onChange={handleChange} />
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
          <Select value={category} name="category" onChange={handleChange} >
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
          <label><h3>Percentage</h3></label>
          <br />
          <input type="text" value={percentage} name="percentage" onChange={handleChange} />
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
          <input type="text-area" value={days} name="days" onChange={handleChange} />
          <br />
        </div><br/>
        <Input type="submit" value="SAVE AND CONTINUE" />
      </form>
    </MainDiv>
  );
};
