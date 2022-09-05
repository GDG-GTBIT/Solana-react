import React from 'react'
import '../assets/css/FooterHome.css';
function Footer() {
  return (
    <div className='footerHomeContainer'>
      <div className = 'footerHomeEmailSectionContainer'>
        <div className='footerHomeSection1Head1'>Stay In the loop</div>
        <div className='footerHomeSection1Head2'>Join our mailing list to stay updated about development at Tiger dev</div>
        <div className='footerHomeEmailContainer'>
          <input placeholder='Enter Your Email Addrress' className='footerHomeEmailInput' type = {"email"}/>
          <button className='footerHomeEmailSubmitIcon'><i className="bi bi-arrow-right"></i></button>
        </div>
      </div>
      <div className='footerHomeAboutContainer'>
        <div> 
          <div className='footerHomeAboutGDSCHead'>
            <div className='footerHomeAboutGDSCLogoContainer'>
            <img className='footerHomeAboutGDSCLogo' src={'https://gdscmbcet.com/assets/img/logos/dsc_logo.png'} alt= "GDSC logo"/>
            </div>
            <div className='footerHomeAboutGDSCText'>ABOUT GDSC </div>
          </div>
          <div>Google Developer Student Clubs are university based community groups for students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. </div>
        </div>
        <div className='footerHomeAboutMarketContainer'> 
          <div className='footerHomeAboutMarketHead'>Marketplace</div>
          <div className='footerHomeAboutMarketDesc'>
            <div>Explore</div>
            <div>Contributors</div>
            <div>Articles</div>
            <div>How it works</div>
            <div>Helps</div>
          </div>
        </div>
        <div> 
          <div className='footerHomeAboutLinksHead'>Links</div> 
          <div className='footerHomeAboutLinkDesc'>
            <div>Token</div>
            <div>API</div>
          </div>
        </div>
      </div>
      <div className='footerHomeAboutJoinCom'>
        <div className='footerHomeAboutComHead'>Join Our Community</div>
        <div className='footerHomeAboutComDesc'>
          <div className='footerHomeAboutComDescContainer'><i class="bi bi-discord"></i>
          <i class="bi bi-instagram"></i>
          <i class="bi bi-youtube"></i>
          <i class="bi bi-meta"></i>
          <i class="bi bi-twitter"></i></div>
        </div>
      </div>
    </div>
  )
}

export default Footer