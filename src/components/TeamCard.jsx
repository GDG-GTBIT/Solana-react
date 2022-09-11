import React from 'react'
import '../assets/css/Card.css';
// import NFT1 from "../assets/images/NFT1.png";
import NFT2Back from "../assets/images/NFT2BACKGROUND.png";

const TeamCard = (props) => {
    return (
        
        <div className="card" style={{
        width: "15rem", 
        background: "White", 
        display: "flex",
        alignItems:"center",
        borderRadius:"5%",
        color: "black",
        marginRight:"2%",
        marginBottom:"2%",
        fontSize:"14px"
        }}>
            <img className="card-img-top" src={props.img} alt="Card cap" style={{borderRadius:"5%", backgroundImage:`url(${NFT2Back})`, backgroundSize:"cover", width:"90%", 
            marginTop:"5%"
            }} />
            <div className="card-body" style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                paddingBottom:"0",
                paddingRight:"5px"
            }}>
                <div className="card-text" >
                    <h5>
                    Name : {props.formData?.Name}
                    </h5>
                </div>
                
            </div>

            <div className="card-body" style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                paddingBottom:"0",
                paddingTop:"0"
            }}>
                <div className="card-text">
                    Designation : {props.formData?.Designation}
                </div>
                <div className="card-text">
                    
                </div>
            </div>

            <div className="card-body" style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                paddingTop:"10px"
            }}>
                <div className="card-text">
                    <a href={props.formData?.InstagramUrl}>
                        <span className='bi bi-instagram text-dark'></span>
                    </a>
                </div>
                <div className="card-text">
                    <a href={props.formData?.LinkedinUrl}>
                    <span className='bi bi-linkedin text-dark'></span>
                    </a>
                </div>
                <div className="card-text">
                    <a href={props.formData?.TwitterUrl}>
                    <span className='bi bi-twitter text-dark'></span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TeamCard;