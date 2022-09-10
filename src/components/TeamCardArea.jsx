import React, { useEffect, useState } from 'react'
import Card from './TeamCard'
import '../assets/css/CardArea.css';

const CardArea = () => {
  const [formData, setformData] = useState(['']);
  const [fetchItems, setfetchItems] = useState(false)
  // useEffect(() => {
    
  // }, [third])

  useEffect(() => {
    // let arr =[];
    const fetchData = async() => {
      const data = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=1ZEtwDkvN6EnhTeB3atvPYrgcQ65_s5a9CEYTT7-hm-m6DwmSzcdVyROe5c5HNsmlP3HwSBrg7NKiI2tPkCMNXhSxmqPOXdSm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKWNzjdG6SQ6jBfHKNfvjadNVlACy6VT-FVoFomMOe-u_gUdRWcp3teaP2urT4zk44wZ5YJa0YEoUgUyuDxw81yH7sJ5ZWk9Pg&lib=MG_ZbSijKTeHcccw2cvTuAkM_gdybOPEg');
      const response = await data.json()
      console.log(response.data)
      // arr.push(response);
      setformData(response.data);
    }
    fetchData();
  }, [fetchItems])
  
  console.log(formData)
  


  return (
    <div className="cardareaa">
      {formData.map((item , index)=>{
        return(
          <Card key={index} formData = {item}/>
        )
      })}
       
    </div>
  )
}

export default CardArea