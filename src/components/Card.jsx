import React from 'react'
import '../assets/css/card.css';
import NFT1 from "../assets/images/NFT1.png";
import NFT2Back from "../assets/images/NFT2BACKGROUND.png";

const Card = () => {
    return (
        
        <div class="card" style={{
        width: "12rem", 
        background: "grey", 
        display: "flex",
        alignItems:"center",
        borderRadius:"5%",
        color: "white",
        marginRight:"2%",
        marginBottom:"2%",
        fontSize:"14px"
        }}>
            <img class="card-img-top" src={NFT1} alt="Card image cap" style={{borderRadius:"5%", backgroundImage:`url(${NFT2Back})`, backgroundSize:"cover", width:"90%", 
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
                    XXXX
                    </h5>
                </div>
                <div class="card-text">
                   <button type="button"  style = {{borderRadius:"25%", background:"lightgreen",border:"none",color:"white"}}>BUY NOW</button>
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
                    XXXX
                </div>
                <div class="card-text">
                    XXXX
                </div>
            </div>

            <div class="card-body" style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                paddingTop:"0"
            }}>
                <div class="card-text">
                    Floor Price
                </div>
                <div class="card-text">
                    XXXX
                </div>
            </div>
        </div>
    )
}

export default Card;