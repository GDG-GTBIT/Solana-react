import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
// import '../assets/css/Card.css';
// import NFT1 from "../assets/images/NFT1.png";
// import NFT2Back from "../assets/images/NFT2BACKGROUND.png";


const Card = (props) => {
    const [clicked,setClicked] = useState(false);
    const navigate = useNavigate();
    let x = props.visible
    useEffect(()=>{
        // console.log(props.id," ",props.visible);
        setClicked(x);
    },[clicked,x]);

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
    const toComponentDesc=()=>{
        navigate('/CollectionDescription',{state:{data:props.data,formData:props.formData}});
    }
    return (
        
        <div className="card" style={{
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
            {/* , backgroundImage:`url(${NFT2Back})` */}
            <img className="card-img-top" src={props.data?props.data.image:""} alt="Card cap" style={{borderRadius:"5%", backgroundSize:"cover", width:"90%", 
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
                    <h6>
                    {props.data?props.data.name:""}
                    </h6>
                </div>
                <div className="card-text">
                   <a href = "/CollectionDescription" onClick={()=>{toComponentDesc()}}><button type="button"  style = {{borderRadius:"25%", background:"lightgreen",border:"none",color:"white"}}>BUY NOW</button></a>
                </div>
                
            </div>

            <div className="card-body" style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                paddingBottom:"0",
                paddingTop:"0"
            }}>
                {/* <div className="card-text">
                    XXXX
                </div> */}
                <div className="card-text">
                    {/* XXXX */}
                    {/* {props.cardsArr.includes(props.id)?  */}
                    {/* <i className="bi bi-heart-fill" onClick={()=>{handleClick(false)}}></i> */}
                    {/* :  */}
                    <i className="bi bi-heart" onClick={()=>{handleClick(true)}}></i>
                    {/* } */}
                </div>
            </div>

            <div className="card-body" style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                paddingTop:"0"
            }}>
                <div className="card-text">
                    Floor Price
                </div>
                <div className="card-text">
                    {props.data?props.data.value:""}
                </div>
            </div>
        </div>
    )
}

export default Card;