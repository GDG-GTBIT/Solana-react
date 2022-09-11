import React,{useEffect,useState} from 'react';
import Card from './Card';
import '../assets/css/CardArea.css';
// import axios from 'axios';
// import { onValue, ref } from 'firebase/database';
// import { db } from '../firebase';

const CardArea = (props) => {
  // const [cardsLength,setCardsLength] = useState(8);
  const [cardsArr,setCardsArr] = useState([]);
  // const [formData, setformData] = useState([])
  const reloadApi = false

  
  useEffect(()=>{
    // const tempoFucntion = async()=>{
    // // let arr = [];
    // // for(let i =0 ; i<50;i++){
    //   console.log(db);
    //    onValue(ref(db , `/`),(snapshot)=>{
    //     const data = snapshot.val();
    //     // console.log(data);
    //     // arr.push(data);
    //     // console.log(arr,"kkkjkj")
    //     setformData(data);
    //   })
    // }
    // console.log(arr,"array fetched")
    
    setCardsArr(JSON.parse(localStorage.getItem("cards")));
    // console.log(JSON.parse(localStorage.getItem("cards")), "localstorage value")
  // }
  // tempoFucntion();
  },[reloadApi]);
  

  return (
    <div className="cardarea">
        { 
        
        // [...Array(cardsLength)]
        // cardsArr===1?"":
        props.formData?
        props.formData.map((e,i)=>{
          // console.log(e);
          // if(cardsArr && cardsArr.includes(i)){
            // console.log(cardsArr.includes(i));
          // return <Link to="/CollectionDescription"><Card key={i} cardsArr={cardsArr} id={i} visible={true} data={e} setCardsArr={setCardsArr}/></Link>;          
          return <Card key={i} cardsArr={cardsArr} id={i} visible={true} data={e} formData = {props.formData} setCardsArr={setCardsArr}/>;          
          
          // }
          
          // else
          // return <Card key={i} cardsArr={cardsArr} id={i} visible={false} data={e} setCardsArr={setCardsArr}/>;
        }):""}
    </div>
  )
}

export default CardArea