import React, { useEffect, useState } from 'react'
import Card from './TeamCard'
import '../assets/css/CardArea.css';
import LoadingSpinner from './LoadingSpinner';
import tiger1 from "../assets/images/NFT 1.png";
import tiger2 from "../assets/images/NFT 2.png";
import tiger3 from "../assets/images/NFT 3.png";
import tiger4 from "../assets/images/NFT 4.png";

const CardArea = () => {
  const [formData, setformData] = useState(['']);
  const [fetchItems, setfetchItems] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const r = Math.floor(Math.random()*4+1);
  const arr = [tiger1 , tiger2 , tiger3 , tiger4];
  // useEffect(() => {
    
  // }, [third])

  // console.log(Math.floor(Math.random()*4+1))
  useEffect(() => {
    window.scrollTo(0,0);
    // let arr =[];
    const fetchData = async() => {      
      setIsLoading(true);
      const data = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=1ZEtwDkvN6EnhTeB3atvPYrgcQ65_s5a9CEYTT7-hm-m6DwmSzcdVyROe5c5HNsmlP3HwSBrg7NKiI2tPkCMNXhSxmqPOXdSm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKWNzjdG6SQ6jBfHKNfvjadNVlACy6VT-FVoFomMOe-u_gUdRWcp3teaP2urT4zk44wZ5YJa0YEoUgUyuDxw81yH7sJ5ZWk9Pg&lib=MG_ZbSijKTeHcccw2cvTuAkM_gdybOPEg');
      const response = await data.json()
      // console.log(response.data)
      // arr.push(response);
      setformData(response.data);
      setIsLoading(false);
    }
    setfetchItems(true)
    fetchData();
  }, [fetchItems])
  
  // console.log(formData)
  

  return (
    <>
        {isLoading ?<LoadingSpinner/>:

    
    <div className="cardareaa">
    
      {formData.map((item , index)=>{
        return(
          <Card key={index} formData = {item} img={arr[Math.floor(Math.random()*4)]}/>
        )
      })}
       
    </div>
}
    </>
      )
    
}

export default CardArea