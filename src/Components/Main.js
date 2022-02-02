import React from "react";
import "./Main.css";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
import punkhead from "../assets/owner/punkhead.png";
import {useState,useEffect} from "react";
const Main = ({selectedPunk, punkListData}) => {
  const[ActivePunk,setActivePunk] = useState(punkListData[0]);
  useEffect(()=>{
    setActivePunk(punkListData[selectedPunk])
  }
  ,[punkListData,selectedPunk])
  
  return (
    <div className="Main">
      <div className="Main-content">
        <div className="punk-highlights">
      <div className="punk-container">
        <img className="selectedPunk" src={ActivePunk.image_original_url} alt="selectedPunk" />
      </div>
      </div>
      <div className="punk-details">
        <div className="Title">{ActivePunk.name}</div>
        <span className="itemNumber">.#{ActivePunk.token_id}</span>
        </div>
      <div className="owner">
          <div className="owner-image-container">
            <img
              className="owner-image"
              src={ActivePunk.owner.profile_img_url}
              alt="owner"
            />
          </div>
          <div className="owner-details">
            <div className="ownerNameandHandle">
              <div>{ActivePunk.owner.address}</div>
              <div className="ownerHandle">@AshishJangra</div>
            </div>
            <div className="icon">
              <img src={instagramLogo} />
            </div>
            <div className="icon">
              <img src={twitterLogo} />
            </div>
            <div className="icon">
              <img src={moreIcon} />
            </div>
            </div>
            </div>
          </div>
          </div>
  );
};

export default Main;
