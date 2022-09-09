import React,{useEffect,useState} from 'react';
import Card from './Card';
import '../assets/css/CardArea.css';
import axios from 'axios';
// import firebase from "firebase";
// import 'firebase/database';
// import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';
import { onValue, ref } from 'firebase/database';
import { db } from '../firebase';

// const url = "https://testing-c8f6a-default-rtdb.firebaseio.com";

// const databaseRef = firebase.database().ref();

// faCommentsDollar.log(databaseRef);


const CardArea = () => {
  const [cardsLength,setCardsLength] = useState(8);
  const [cardsArr,setCardsArr] = useState(1);
  const [formData, setformData] = useState([])

  
  useEffect(()=>{
    
    let arr = [];
    for(let i =0 ; i<50;i++){

      onValue(ref(db , `${i}`),(snapshot)=>{
        const data = snapshot.val();
        console.log(data);
        arr.push(data);
      })
    }
    setformData(arr);
    setCardsArr(JSON.parse(localStorage.getItem("cards")));
    // console.log("useEffect",cardsArr);

    // axios.get(url).then((response)=>{
    //   console.log(response.data);
    // });

  },[]);
  console.log(formData);
  useEffect(()=>{
    if(cardsArr === 1) return;

    // console.log("cardsArr",cardsArr);
    localStorage.setItem("cards",JSON.stringify(cardsArr));
  },[cardsArr]);

  return (
    <div className="cardarea">
        { 
        
        // [...Array(cardsLength)]
        cardsArr===1?"":
        formData.map((e,i)=>{
          console.log(e);
          if(cardsArr && cardsArr.includes(i)){
            // console.log(cardsArr.includes(i));
          return <Card key={i} cardsArr={cardsArr} id={i} visible={true} data={e} setCardsArr={setCardsArr}/>;          
          }
          
          else
          return <Card key={i} cardsArr={cardsArr} id={i} visible={false} data={e} setCardsArr={setCardsArr}/>;
        })}
    </div>
  )
}

export default CardArea