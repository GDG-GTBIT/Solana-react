import React,{useEffect,useState} from 'react'
// import '../assets/css/Card.css';
import NFT1 from "../assets/images/NFT1.png";
import NFT2Back from "../assets/images/NFT2BACKGROUND.png";


const Card = (props) => {
    const [clicked,setClicked] = useState(false);

    useEffect(()=>{
        // console.log(props.id," ",props.visible);
        setClicked(props.visible);
    },[clicked]);

    function handleClick(check){
        console.log(props.id)
        setClicked(check);
        if(check){
            // props.cardsArr.push(props.id);
            props.setCardsArr([...props.cardsArr,props.id]);
        }
        else{
            let arr = JSON.parse(JSON.stringify(props.cardsArr));
            
            for( var i = 0; i < arr.length; i++){ 
                if (arr[i] === props.id) { 
                    arr.splice(i, 1); 
                }
            }
            
            props.setCardsArr([...arr]);
        }
        console.log(props.cardsArr,'array')
            localStorage.setItem('cards',JSON.stringify(props.cardsArr));
        
    }
    return (
        
        <div class="card" style={{
        width: "12rem", 
        // background: "grey", 
        display: "flex",
        alignItems:"center",
        color: "white",
        marginRight:"2%",
        marginBottom:"2%",
        fontSize:"14px",
        background: "rgba( 144, 130, 130, 0.25 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 5.5px )",
        borderRadius: "10px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )"
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
                    {/* XXXX
                    {props.cardsArr.includes(props.id)? 
                    <i class="bi bi-heart-fill" onClick={()=>{handleClick(false)}}></i>
                    :  */}
                    <i class="bi bi-heart"></i>
                    {/* // } */}
                    
                    
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