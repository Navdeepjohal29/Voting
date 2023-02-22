import React from "react";
import facebook from "../../assets/social/facebook_icon.svg";
import twitter from "../../assets/social/twitter_icon.svg";
import google from "../../assets/social/google_icon.svg";
import linkedin from "../../assets/social/linkedin_icon.svg";
import youtube from "../../assets/social/youtube_icon.svg";
import pinterest from "../../assets/social/pinterest_icon.svg";

function Social() {
  return (
    <ul className="social_icons">
      <li>
        <a href="javascript:void(0)" >
          <img src={google} alt="google" />
        </a>
      </li>
      <li>
        <a href="javascript:void(0)" >
          <img src={linkedin} alt="LinkedIn" />
        </a>
      </li>
      <li>
        <a href="javascript:void(0)" >
          <img src={pinterest} alt="Pinterest" />
        </a>
      </li>
      <li>
        <a href="javascript:void(0)">
          <img src={twitter} alt="Twitter" />
        </a>
      </li>
      <li>
        <a href="javascript:void(0)">
          <img src={facebook} alt="Facebook" />
        </a>
      </li>
     
      <li>
        <a href="javascript:void(0)" >
          <img src={youtube} alt="Youtube" />
        </a>
      </li>
     
    </ul>
  );
}

export default Social;
