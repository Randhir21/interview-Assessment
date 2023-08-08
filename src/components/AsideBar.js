import { Paper } from "@mui/material";
import React from "react";
import "./style.css";
import GridViewIcon from "@mui/icons-material/GridView";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import QuizIcon from "@mui/icons-material/Quiz";
import CloseIcon from '@mui/icons-material/Close';
const AsideBar = ({setShowAside, showAside}) => {
  return (
    <Paper elevation={0} className={`assideBar ${showAside?"showMobileAsside":null}`}>
      <div className="assideHead">
       <p>menu</p>
        <CloseIcon onClick={()=>setShowAside(false)} />
      </div>
      <div className="item pl-10 mt-30 ">
          <GridViewIcon className="iconColor" />
          <p className="menuCont">Dashboard</p>
      </div>
      <div className="item pl-10 activeMenu">
        <NoteAltIcon className="iconColor" />
        <p className="menuCont">Assessment</p>
      </div>
      <div className="item pl-10">
        <QuizIcon className="iconColor" />
        <p className="menuCont">My Library</p>
      </div>
      <div className="item1"></div>
      <div className="item pl-10">
        <p className="adminCon">Admin</p>
        <div className="item">
          <QuizIcon className="iconColor" />
          <p className="menuCont">Round Status</p>
        </div>
      </div>
    </Paper>
  );
};

export default AsideBar;
