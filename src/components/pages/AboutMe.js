import React from 'react';
import '../../styles/AboutMe.css';
import myimage from '../../assets/picture.jpg';
export default function AboutMe() {
  return (
    <div>
      <div>
        <hero>
          <img class="profile-card" src={myimage} style={{width: "8%" }} alt="myimage" ></img>
          </hero>

        <div class="my-1 bio-info flex-row-wrapper-lg-2">
          <h1>About Me</h1>
          </div>
        <br></br>
        <p> This is a about me
        </p>

        <p>
          more text here  
        </p>
        <p>
          this is an about me page 
        </p>
    </div>
    </div >
  )
}


