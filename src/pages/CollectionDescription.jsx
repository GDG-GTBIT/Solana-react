import React, { useState } from "react";
// import mainImage from "../assets/images/NFT_img.png";
import Card from "../components/Card";
import "../assets/css/collectiondescription.css";
import { Link, useLocation } from "react-router-dom";
const CollectionDescription = () => {

  const [refresh, setRefresh] = useState(false);
  const location = useLocation();

  // useEffect(()=>{
  //   console.log("refreshed");
  //   if(location!=null && location.state)
  //   console.log(location.state.formData);
  // },[refresh]);

  const handleRefresh = () =>{
    refresh === true?setRefresh(false):setRefresh(true);
  }

  const handleShare = async () =>{
    console.log("shared");

    let data = {
      title: "Solana",
      text: "NFT",
      url: "http://localhost:3000/CollectionDescription",
    };
   

    try {
      await  navigator.share(data);
      
    } catch (err) {
      console.log(`Error: ${err}`);
    }

  }

  return (
    <div className="collection d-flex col justify-content-center ">
      <div className="collection__container d-flex flex-wrap align-items-start  ">
        <div className="collection__image  d-flex justify-content-center m-5 ">
          <img src={location?.state?.data?.image}  alt="fireSpot" style={{height:"277px",width:"282px"}}/>
        </div>
        <div className="collection__info m-5">
          <div className="info__gdsc d-flex flex-wrap justify-content-between ">
            <h4 className="info__gdscHeading d-flex px-3">
              Google Developer Students Club
            </h4>
            <div className="info__gdscIcons px-4 ">
              <div className="row ">
                <div className="col col1 px-3 p-1 "><i class="bi bi-arrow-clockwise" onClick={handleRefresh}></i></div>
                <div className="col col2 px-3 p-1"><a href="/" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="31" fill="currentColor" class="bi bi-indent align-items-center d-flex" viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M3 8a.5.5 0 0 1 .5-.5h6.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H3.5A.5.5 0 0 1 3 8Z"/>
                <path fill-rule="evenodd" d="M12.5 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5Z"/>
                </svg></a></div>
                <div className="col col3 px-3 p-1  "><svg onClick={handleShare} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
                   <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
                 </svg></div>
              </div>
            </div>
          </div>
          <div className="info__title ">
            <h1 className="info__heading px-3">{location?.state?.data?.name}</h1>
          </div>
          <div className="info__ownerViews d-flex p-3 ">
            <p>Owned by </p>
            <span className="info__ownerGdsc">GDSC'GTBIT</span>
            <div className="info__ownerIcons px-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-eye-fill"
                viewBox="0 0 16 16"
              >
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
              </svg>{" "}
              <span>XX views</span>
            </div>
          </div>
          <div className="info__priceBox ">
            
              <div className="col priceCol px-4  d-flex justify-content-start ">
                <span className="d-flex align-items-center py-2 flex-wrap ">
                <i class="bi bi-clock px-3">
                  
                </i>
                {location?.state?.data?.description}</span>
              </div>

              <div className="col currentPriceCol  justify-content-start align-items-start px-4 py-2">
                <h1>Current price</h1>
                <div className="d-flex">
                <h2>{location?.state?.data?.value}</h2>
                
                <span className=" priceDollar text-muted d-flex align-items-center px-3">($XXXX)</span>
                </div>
                <div class="buttons">
                  <button class="btn-hover color-1">Buy Now</button>
                  <button class="color-2">Make Offer</button>
                </div>
              </div> 
          </div>
        </div>
        aboutDescText
        
      </div>
      <div className="info__priceBox increaseWidth m-5">
            
              <div className="col priceCol px-4  d-flex justify-content-start ">
                <span className="d-flex align-items-center  py-2  ">
                <i class="bi bi-clock px-3">
                  
                </i>
                 View more from this collection</span>
              </div>


              <div className="col currentPriceCol   px-4 py-2">
                
                <div className=" cardsPrice d-flex px-4 justify-content-around ">
                
                <Card key={0} id={0} visible={true} formData={location.state?location.state.formData:""} data={location.state?location?.state?.formData[0]:""}/>
                <Card key={1} id={1} visible={true} formData={location.state?location.state.formData:""} data={location.state?location?.state?.formData[1]:""}/>
                <Card key={2} id={2} visible={true} formData={location.state?location.state.formData:""} data={location.state?location?.state?.formData[2]:""}/>
                <Card key={3} id={3} visible={true} formData={location.state?location.state.formData:""} data={location.state?location?.state?.formData[3]:""}/>
                
                </div>
                <div class="buttons">
                  
                  <Link to="/Collections"><button class="color-2">View Collections</button></Link>
                </div>
              </div> 
          </div>

      
    </div>
  );
};

export default CollectionDescription;





















// import React, { useState, useEffect } from "react";
// // import mainImage from "../assets/images/NFT_img.png";
// import Card from "../components/Card";
// import "../assets/css/collectiondescription.css";
// import { Link, useLocation } from "react-router-dom";
// import idl from '../idl.json';
// import {Connection, PublicKey, clusterApiUrl} from '@solana/web3.js';
// import {Program, AnchorProvider, web3 ,BN} from '@project-serum/anchor';


// import {Buffer} from 'buffer';
// window.Buffer = Buffer;   


// const programID =new PublicKey(idl.metadata.address);
// const network = clusterApiUrl('devnet');
// const opts ={
//   prefLightCommitment: 'processed',
// };
// const {SystemProgram} = web3;

// const CollectionDescription = () => {
  
//   const getProvider = () => {
//     const connection = new Connection( network, opts.prefLightCommitment);
//     const provider = new AnchorProvider( connection, window.solana, opts.prefLightCommitment);

//     return provider;
//   }

  

//   const buy = async publicKey =>{
//     try {
//       const provider = getProvider();
//       const program = new Program(idl, programID, provider)

//       const amounttopay = new BN( 3.6 * web3.LAMPORTS_PER_SOL);
//       const slotsbooked = new BN(1);

//       await program.rpc.donate( amounttopay, slotsbooked, {
//         accounts:{
//           campaign: publicKey,
//           user: provider.wallet.publicKey,
//           systemProgram: SystemProgram.programId,
//         }
//       });

//       console.log("Donate amount to", publicKey.toString());

//     }catch(error) {
//       console.error(error);
//     } 



//   }

















//   const [refresh, setRefresh] = useState(false);
//   const location = useLocation();

//   useEffect(()=>{
//     // console.log("refreshed");
//     // if(location!=null && location.state)
//     // console.log(location.state.formData);
//   },[refresh,location]);

//   const handleRefresh = () =>{
//     refresh === true?setRefresh(false):setRefresh(true);
//   }

//   const handleShare = async () =>{
//     console.log("shared");

//     let data = {
//       title: "Solana",
//       text: "NFT",
//       url: "http://localhost:3000/CollectionDescription",
//     };
   

//     try {
//       await  navigator.share(data);
      
//     } catch (err) {
//       console.log(`Error: ${err}`);
//     }

//   }


//   return (
//     <div className="collection d-flex col justify-content-center ">
//       <div className="collection__container d-flex flex-wrap align-items-start  ">
//         <div className="collection__image  d-flex justify-content-center m-5 ">
//           <img src={location?.state?.data?.image}  alt="fireSpot" style={{height:"277px",width:"282px"}}/>
//         </div>
//         <div className="collection__info m-5">
//           <div className="info__gdsc d-flex flex-wrap justify-content-between ">
//             <h4 className="info__gdscHeading d-flex px-3">
//               Google Developer Students Club
//             </h4>
//             <div className="info__gdscIcons px-4 ">
//               <div className="row ">
//                 <div className="col col1 px-3 p-1 "><i className="bi bi-arrow-clockwise" onClick={handleRefresh}></i></div>
//                 <div className="col col2 px-3 p-1"><a href="/" target="_blank">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="28" height="31" fill="currentColor" className="bi bi-indent align-items-center d-flex" viewBox="0 0 16 16">
//                <path fillRule="evenodd" d="M3 8a.5.5 0 0 1 .5-.5h6.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H3.5A.5.5 0 0 1 3 8Z"/>
//                 <path fillRule="evenodd" d="M12.5 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5Z"/>
//                 </svg></a></div>
//                 <div className="col col3 px-3 p-1  "><svg onClick={handleShare} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share-fill" viewBox="0 0 16 16">
//                    <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
//                  </svg></div>
//               </div>
//             </div>
//           </div>
//           <div className="info__title ">
//             <h1 className="info__heading px-3">{location?.state?.data?.name}</h1>
//           </div>
//           <div className="info__ownerViews d-flex p-3 ">
//             <p>Owned by </p>
//             <span className="info__ownerGdsc">GDSC'GTBIT</span>
//             <div className="info__ownerIcons px-5">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 fill="currentColor"
//                 className="bi bi-eye-fill"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
//                 <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
//               </svg>{" "}
//               <span>XX views</span>
//             </div>
//           </div>
//           <div className="info__priceBox ">
            
//               <div className="col priceCol px-4  d-flex justify-content-start ">
//                 <span className="d-flex align-items-center py-2 flex-wrap ">
//                 <i className="bi bi-clock px-3">
                  
//                 </i>
//                 {location?.state?.data?.description}</span>
//               </div>

//               <div className="col currentPriceCol  justify-content-start align-items-start px-4 py-2">
//                 <h1>Current price</h1>
//                 <div className="d-flex">
//                 <h2>{location?.state?.data?.value}</h2>
                
//                 <span className=" priceDollar text-muted d-flex align-items-center px-3">($XXXX)</span>
//                 </div>
//                 <div className="buttons">
//                   <button  onClick={() => buy('6QBzG1PLm2RrQfReAEZvStRpKNVzsMkU5pEfboRvZsVS')} className="btn-hover color-1">Buy Now</button>
//                   <button className="color-2">Make Offer</button>
//                 </div>
//               </div> 
//           </div>
//         </div>
//         aboutDescText
        
//       </div>
//       <div className="info__priceBox increaseWidth m-5">
            
//               <div className="col priceCol px-4  d-flex justify-content-start ">
//                 <span className="d-flex align-items-center  py-2  ">
//                 <i className="bi bi-clock px-3">
                  
//                 </i>
//                  View more from this collection</span>
//               </div>


//               <div className="col currentPriceCol   px-4 py-2">
                
//                 <div className=" cardsPrice d-flex px-4 justify-content-around ">
                
//                 <Card key={0} id={0} visible={true} formData={location.state?location.state.formData:""} data={location.state?location?.state?.formData[0]:""}/>
//                 <Card key={1} id={1} visible={true} formData={location.state?location.state.formData:""} data={location.state?location?.state?.formData[1]:""}/>
//                 <Card key={2} id={2} visible={true} formData={location.state?location.state.formData:""} data={location.state?location?.state?.formData[2]:""}/>
//                 <Card key={3} id={3} visible={true} formData={location.state?location.state.formData:""} data={location.state?location?.state?.formData[3]:""}/>
                
//                 </div>
//                 <div className="buttons">
                  
//                   <Link to="/Collections"><button className="color-2">View Collections</button></Link>
//                 </div>
//               </div> 
//           </div>

      
//     </div>
//   );
// };

// export default CollectionDescription;