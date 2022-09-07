import React from 'react'
import '../assets/css/Card.css';
import NFT1 from "../assets/images/NFT1.png";
import NFT2Back from "../assets/images/NFT2BACKGROUND.png";

const TeamCard = () => {
    return (
        
        <div class="card" style={{
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
            <img class="card-img-top" src={NFT1} alt="Card cap" style={{borderRadius:"5%", backgroundImage:`url(${NFT2Back})`, backgroundSize:"cover", width:"90%", 
            marginTop:"5%"
            }} />
            <div class="card-body" style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                paddingBottom:"0",
                paddingRight:"5px"
            }}>
                <div class="card-text" >
                    <h5>
                    Name
                    </h5>
                </div>
                
            </div>

            <div class="card-body" style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                paddingBottom:"0",
                paddingTop:"0"
            }}>
                <div class="card-text">
                    Designation
                </div>
                <div class="card-text">
                    
                </div>
            </div>

            <div class="card-body" style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                paddingTop:"10px"
            }}>
                <div class="card-text">
                    <span className='bi bi-instagram text-dark'></span>
                </div>
                <div class="card-text">
                <span className='bi bi-linkedin text-dark'></span>
                </div>
                <div class="card-text">
                <span className='bi bi-twitter text-dark'></span>
                </div>
            </div>
        </div>
    )
}

export default TeamCard;