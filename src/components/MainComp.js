import React, { useState } from "react";
import { Button, Paper } from "@mui/material";
import "./style.css";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import GroupIcon from "@mui/icons-material/Group";
import LanguageIcon from "@mui/icons-material/Language";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import AddIcon from "@mui/icons-material/Add";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NotesIcon from "@mui/icons-material/Notes";
import ComputerIcon from "@mui/icons-material/Computer";
import SearchIcon from "@mui/icons-material/Search";
import ScienceIcon from "@mui/icons-material/Science";
import BarChartIcon from "@mui/icons-material/BarChart";

import CloseIcon from "@mui/icons-material/Close";
const MainComp = ({ setShowAside }) => {
  const [show, setShow] = useState(true);
  const [showForm, setsShowForm] = useState(false);
  const [inputValues, setInputValues] = useState([]);
  const [inputSkill, setInputSkill] = useState("");

  const showHidehandle = () => {
    console.log("Show handle");
    setShow(!show);
  };

  const handleSkillStore = (event) => {
    setInputSkill(event.target.value); //Html
  };

  const handleSubmit = () => {
    setInputValues([
      ...inputValues,
      {
        name: inputSkill,
      },
    ]);
    setInputSkill("");
    console.log(inputSkill + "type of:" + typeof inputValues);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };
  const handleDelete = (index) => {
    const updatedList = [...inputValues];
    updatedList.splice(index, 1);
    setInputValues(updatedList);
  };
  return (
    <>
      <Paper elevation={0} className="mainComp">
        <div className="headerItem">
          <div className="leftItem">
            <div className="menuIcon">
              <NotesIcon onClick={() => setShowAside(true)} />
            </div>
            <p className="headertext">Assessment</p>
            <div className="devider dispNone"></div>
            <div className="my_assess">
              <p className="headertext1">My Assessment</p>
            </div>
          </div>
          <div className="rightItem">
            <PhoneIphoneIcon className="phoneIcon" />
            <ComputerIcon className="compIcon" />
          </div>
        </div>
        <div className="headerItem1">
          <div className="my_assess1">
            <p className="headertext1">My Assessment</p>
          </div>
          <div className="my_assess1 borderNone">
            <p className="headertext1 fontColor">Unstop Assessments</p>
          </div>
        </div>
        {show ? (
          <div className="mainArea">
            <p className="mainareaTest">Assessment overview</p>
            <div className="assessDetails">
              <div className="details_item1 ">
                <p className="details_Title">Total Assessment</p>
                <div className="details_value_Box">
                  <div className="details_icon_box">
                    <DragHandleIcon className="details_icon" />
                  </div>
                  <div className="details_value details_value1">
                    <p className="value">34</p>
                  </div>
                </div>
              </div>
              <div className="details_item2">
                <p className="details_Title">Candidates</p>
                <div className="details_value_Box">
                  <div className="details_icon_box">
                    <GroupIcon className="details_icon" />
                  </div>
                  <div className="details_value">
                    <div className="details_value1">
                      <p className="value">
                        11,145 <span>+89</span>
                      </p>
                      <p className="value_title">Total Condidates</p>
                    </div>
                    <div className="devider ml-20"></div>
                    <div className="details_value1">
                      <p className="value">
                        114 <span>+89</span>
                      </p>
                      <p className="value_title">Who Attamped</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="details_item3">
                <p className="details_Title">Candidates Source</p>
                <div className="details_value_Box">
                  <div className="details_icon_box">
                    <LanguageIcon className="details_icon" />
                  </div>
                  <div className="details_value">
                    <div className="details_value1">
                      <p className="value">
                        11,000 <span>+89</span>
                      </p>
                      <p className="value_title">E-mail</p>
                    </div>
                    <div className="devider ml-20"></div>
                    <div className="details_value1">
                      <p className="value">
                        145 <span>+89</span>
                      </p>
                      <p className="value_title">Social Share</p>
                    </div>
                    <div className="devider ml-20"></div>
                    <div className="details_value1">
                      <p className="value">
                        145 <span>+89</span>
                      </p>
                      <p className="value_title">Unique Link</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="details_item4 ">
                <p className="details_Title">Total Purpose</p>
                <div className="details_value_Box">
                  <div className="details_icon_box">
                    <InsertLinkIcon className="details_icon" />
                  </div>
                  <div className="details_value details_value1">
                    <p className="value">11</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <div className="mainAreaBody ">
          <div className="mainMenuSec">
            <p className="mainareaTest mt-40">My Assessment </p>
            <div className="mainAIcons">
              <SearchIcon />
              <ScienceIcon />
              <BarChartIcon className="toggleIcon" onClick={showHidehandle} />
            </div>
          </div>

          <div className="cardArea">
            <div className="cardItem1" onClick={() => setsShowForm(true)}>
              <AddIcon className="cardAddIcon" />
              <p className="cardTitle">New Assessment</p>
              <p className="cardDesc">
                From Here you can add question of multipal types like MCQ's,
                Subjective (text or paragraph)!
              </p>
            </div>
            <div className="cardItem2">
              <div className="cardTopArea">
                <div className="cardInnerItem">
                  <div className="cardIcon">
                    <BusinessCenterIcon />
                  </div>
                  <div>
                    <p className="cardTitle2">Math Assessment</p>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p className="job">Job</p>{" "}
                      <span className="devider2"></span>
                      <CalendarMonthIcon className="dateIcon" />{" "}
                      <span className="date"> 20 Aprl 2023</span>
                    </div>
                  </div>
                </div>
                {/* <div className="rightSetIcon"></div> */}
                <MoreVertIcon />
              </div>
              <div className="devider3"></div>
              <div className="cardBottmArea">
                <div className="left">
                  <div>
                    <p>00</p>
                    <p>Duration</p>
                  </div>
                  <div>
                    <p>00</p>
                    <p>Duration</p>
                  </div>
                </div>
                <div className="right">
                  <div className="shareBTN">
                    <InsertLinkIcon />
                    <p>Share</p>
                  </div>
                  <div
                    style={{
                      position: "relative",
                      height: "30px",
                      width: "30px",
                    }}
                  >
                    <div className="LPBox">LP</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cardItem2">
              <div className="cardTopArea">
                <div className="cardInnerItem">
                  <div className="cardIcon">
                    <BusinessCenterIcon />
                  </div>
                  <div>
                    <p className="cardTitle2">Math Assessment</p>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p className="job">Job</p>{" "}
                      <span className="devider2"></span>
                      <CalendarMonthIcon className="dateIcon" />{" "}
                      <span className="date"> 20 Aprl 2023</span>
                    </div>
                  </div>
                </div>
                {/* <div className="rightSetIcon"></div> */}
                <MoreVertIcon />
              </div>
              <div className="devider3"></div>
              <div className="cardBottmArea">
                <div className="left">
                  <div>
                    <p>00</p>
                    <p>Duration</p>
                  </div>
                  <div>
                    <p>00</p>
                    <p>Duration</p>
                  </div>
                </div>
                <div className="right">
                  <div className="shareBTN">
                    <InsertLinkIcon />
                    <p>Share</p>
                  </div>
                  <div
                    style={{
                      position: "relative",
                      height: "30px",
                      width: "55px",
                    }}
                  >
                    <div className="LPBox">LP</div>
                    <div className="LPBox1 LPBox">LP</div>
                    <div className="LPBox2 LPBox">LP</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Paper>

      <div className={`formSec ${showForm ? "active" : null}`}>
        <div className="formHeader">
          <p>Create new assessment</p>
          <CloseIcon onClick={() => setsShowForm(false)} />
        </div>
        <div className="formArea">
          <div className="inputGroup">
            <p>Name of Assessment</p>
            <input type="text" placeholder="Type Hear" className="inputField" />
          </div>
          <div className="inputGroup">
            <p>Purpose of the text is</p>
            <select name="select" className="optionInForm">
              <option value="select">Select</option>
            </select>
          </div>
          <div className="inputGroup">
            <p>Purpose of the text is</p>
            <select name="select" className="optionInForm">
              <option value="select">Select</option>
            </select>
          </div>
          <div className="skillsGroup">
            {/* <p>Name of Assessment</p> */}
            <div className="addSkill">
              <div className="showSkill">
                {inputValues.map((item, index) => (
                  <div key={index} className="showSkillHandle">
                    <p >{item.name} </p>
                    <CloseIcon onClick={() => handleDelete(index)} />
                  </div>
                ))}
              </div>
              <div className="skilldevider"></div>
              <input
                type="text"
                placeholder="Type Hear"
                className="addSkillInput"
                value={inputSkill}
                onChange={handleSkillStore}
                onKeyPress={handleKeyPress}
              />
            </div>
          </div>
          <div className="inputGroup">
            <p>Duration of assessment</p>
            <input type="text" placeholder="HH:MM:SS" className="inputField" />
          </div>
          
        </div>
        <div className="BTNGroup">
           <Button variant="contained" style={{width:"90%",margin:"20px"}}>Save</Button>
          </div>
      </div>
    </>
  );
};

export default MainComp;
