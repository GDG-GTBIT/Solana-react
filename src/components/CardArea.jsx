import React,{useEffect,useState} from 'react';
import Card from './Card';
import '../assets/css/CardArea.css';

const CardArea = () => {
  const [cardsLength,setCardsLength] = useState(8);
  const [cardsArr,setCardsArr] = useState(1);

  useEffect(()=>{
    setCardsArr(JSON.parse(localStorage.getItem("cards")));
    console.log("useEffect",cardsArr);
  },[]);

  useEffect(()=>{
    if(cardsArr == 1) return;

    console.log("cardsArr",cardsArr);
    localStorage.setItem("cards",JSON.stringify(cardsArr));
  },[cardsArr]);

  return (
    <div className="cardarea">
        { 
        cardsArr==1?"":

        [...Array(cardsLength)].map((e,i)=>{
          
          if(cardsArr.includes(i)){
            console.log(cardsArr.includes(i));
          return <Card key={i} cardsArr={cardsArr} id={i} visible={true} setCardsArr={setCardsArr}/>;
          
          }
          else
          return <Card key={i} cardsArr={cardsArr} id={i} visible={false} setCardsArr={setCardsArr}/>;
        })}
    </div>
  )
}

export default CardArea