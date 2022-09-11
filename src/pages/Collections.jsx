import React from 'react'
import CardArea from '../components/CardArea';
import "../assets/css/Collections.css";
import CollectionsFilter from '../components/CollectionsFilter';
// import LeftFilter from '../components/LeftFilter';
import Wrapper from  '../components/Wrapper';

const Collections = (props) => {
  return (
    <div className="collections">
        <CollectionsFilter />
        <Wrapper>
          {/* <LeftFilter /> */}
          <CardArea formData ={props.formData}/>
        </Wrapper>
        
    </div>
  )
}

export default Collections;