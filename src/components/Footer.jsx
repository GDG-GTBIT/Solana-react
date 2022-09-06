import React from "react";
import "../assets/css/FooterHome.css";
// images imported
import discord_icon from "../assets/images/discord_icon.png";
import facebook_icon from "../assets/images/facebook_icon.png";
import insta_icon from "../assets/images/insta_icon.png";
import twitter_icon from "../assets/images/twitter_icon.png";
import youtube_icon from "../assets/images/youtube_icon.png";
function Footer() {
  return (
    <div className="footerHomeContainer">
      <div className="footerHomeEmailSectionContainer">
        <div className="footerHomeSection1Head1">Stay In the loop</div>
        <div className="footerHomeSection1Head2">
          Join our mailing list to stay updated about development at Tiger dev
        </div>
        <div className="footerHomeEmailContainer">
          <input
            placeholder="Enter Your Email Addrress"
            className="footerHomeEmailInput"
            type={"email"}
          />
          <button className="footerHomeEmailSubmitIcon">
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
      <div className="footerHomeAboutContainer">
        <div className="footerHomeAboutGDSC">
          <div className="footerHomeAboutGDSCHead">
            <div className="footerHomeAboutGDSCLogoContainer">
              <img
                className="footerHomeAboutGDSCLogo"
                src={"https://gdscmbcet.com/assets/img/logos/dsc_logo.png"}
                alt="GDSC logo"
              />
            </div>
            <div className="footerHomeAboutGDSCText">ABOUT GDSC </div>
          </div>
          <div className="footerHomeAboutGDSCTextDesc">
            Google Developer Student Clubs are university based community groups
            for students interested in Google developer technologies. Students
            from all undergraduate or graduate programs with an interest in
            growing as a developer are welcome.{" "}
          </div>
        </div>
        <div className="footerHomeAboutMarketContainer">
          <div className="footerHomeAboutMarketHead">Marketplace</div>
          <div className="footerHomeAboutMarketDesc">
            <div>Explore</div>
            <div>Contributors</div>
            <div>Articles</div>
            <div>How it works</div>
            <div>Helps</div>
          </div>
        </div>
        <div>
          <div className="footerHomeAboutLinksHead">Links</div>
          <div className="footerHomeAboutLinkDesc">
            <div>Token</div>
            <div>API</div>
          </div>
        </div>
      </div>
      <div className="footerHomeAboutJoinCom">
        <div className="footerHomeAboutComHead">Join Our Community</div>
        <div className="footerHomeAboutComDesc">
          <div className="footerHomeAboutComDescContainer">
            <a href="https://www.youtube.com/c/GDSCGTBIT/featured" rel="noreferrer"  target={"_blank"}><img className="footerHomeAboutComIcon" src={discord_icon}  alt = {"icon"}/></a>
            <a href="https://www.facebook.com/dscgtbit" rel="noreferrer"  target={"_blank"}><img className="footerHomeAboutComIcon" src={facebook_icon}  alt = {"icon"}/></a>
            <a href="https://www.instagram.com/gdscgtbit/" rel="noreferrer"  target={"_blank"}><img className="footerHomeAboutComIcon" src={insta_icon}  alt = {"icon"}/></a>
            <a href="https://twitter.com/gdscgtbit" rel="noreferrer"  target={"_blank"}><img className="footerHomeAboutComIcon" src={twitter_icon}  alt = {"icon"}/></a>
            <a href="https://www.youtube.com/c/GDSCGTBIT/featured" rel="noreferrer"  target={"_blank"}><img className="footerHomeAboutComIcon" src={youtube_icon}  alt = {"icon"}/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;