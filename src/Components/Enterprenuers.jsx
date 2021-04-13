import React from "react";
import styled, { keyframes } from "styled-components";
const slider=keyframes`
0%{
    background-image:url("https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2021/03/VH_Cover.png");
}
25%{
    background-image:url("https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2021/02/IGG-ES-Flat-Export-Rates-Homepage-Desktop.png");
}
`

const Slider=styled.div`
width:80%;
height:400px;
margin:auto;
margin-top:20px;
background-image:url("https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2021/03/VH_Cover.png");
background-size:100% 100%;
box-shadow:1px 2px 10px 5px white;
animation: slider 9s infinite linear;
`



export const Enterprenuers=()=>{

    return(
        <div>
            <Slider>

            </Slider>
        </div>
    )
} 