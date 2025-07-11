import "./App.css";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import reactLogo from "./react-1-logo-svg-vector.svg";
import JsLogo from "./logo-javascript.svg";
import HTMLlogo from "./html-5-logo-svgrepo-com.svg";
import CSSLogo from "./css-3-logo-svgrepo-com.svg";
import NodeLogo from "./nodejs-logo-svgrepo-com.svg";
import csharp from "./csharp-svgrepo-com.svg";
import dotnet from "./dot-net-svgrepo-com.svg";
import sql from "./sql-svgrepo-com.svg";
import git from "./git-icon-logo-svgrepo-com.svg";
import postman from "./postman-icon-svgrepo-com.svg";
import vscode from "./visual-studio-code-svgrepo-com.svg";



function App() {

  const form = useRef();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wu1s39k",
        "template_ivdwzjk",
        form.current,
        "IzIFf5J8SfcNF9-VG"
      )
      .then(
        (result) => {
         
          console.log(result.text)

        
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>


   
      <div className="Header">
        <div style={{ fontSize: 50 }}>Kandarp Mishra</div>
        <div className="HeaderRight">
          <div style={{ paddingRight: 50 }}>
            <a
              href="https://drive.google.com/drive/folders/1MCBYdevbvfIf5VaA2K3gcohDG82vGpcA?usp=share_link"
              target="_blank" rel="noreferrer"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <div className="dash"></div>
      <div className="Introduction">
        INTRODUCTION
        <h1 style={{ color: "white" }}>Software Engineer</h1>
        <p style={{ color: "white", fontSize: 25 }}>
          As a software engineer with 3 year of experience, I am skilled in
          developing and maintaining high-quality software applications that
          meet the needs of end-users. Throughout my career, I have experience
          collaborating with cross-functional teams, including product managers,
          designers, and QA engineers, to ensure software solutions are meeting
          business objectives. Overall, I am confident that my experience and
          skills make me a valuable asset to any software development team, and
          I look forward to contributing my expertise to future projects.
        </p>
      </div>

      <div className="skills">
        <div className="heading">SKILLS</div>
        <div className="skilldetails">
          <div className="singleskill">
            <img src={reactLogo} className="skilllogo" />
          </div>
          <div className="singleskill">
            <img src={JsLogo} className="skilllogo" />
          </div>
          <div className="singleskill">
            <img src={HTMLlogo} className="skilllogo" />
          </div>
          <div className="singleskill">
            <img src={CSSLogo} className="skilllogo" />
          </div>
          <div className="singleskill">
            <img src={NodeLogo} className="skilllogo" />
          </div>

          <div className="singleskill">
            <img src={csharp} className="skilllogo" />
          </div>
          <div className="singleskill">
            <img src={dotnet} className="skilllogo" />
          </div>
          <div className="singleskill">
            <img src={sql} className="skilllogo" />
          </div>
          <div className="singleskill">
            <img src={postman} className="skilllogo" />
          </div>
          <div className="singleskill">
            <img src={git} className="skilllogo" />
          </div>
          <div className="singleskill">
            <img src={vscode} className="skilllogo" />
          </div>
        </div>
      </div>

      <div className="dash2"></div>

      <div className="contactme">CONTACT ME</div>
      <div className="formcontainer">
        <div className="contactmeform">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label><br />
            <input type="text" name="user_name" required/>
            <br />
            <br />
            <br />
            <label>Email</label><br />
            <input type="email" name="user_email" required />
            <br />
            <br />
            <br />
            <label>Message</label><br />
            <textarea name="message" required />
            <br />
            <br />
            <br />
            <input type="submit" value="Send" id="sendbutton"   />
          </form>
        </div>
      </div>


      <div className="footer">


      

      </div>
    </>
  );
}

export default App;
