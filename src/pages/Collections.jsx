import React from 'react'
import CardArea from '../components/CardArea';
import "../assets/css/Collections.css";
import CollectionsFilter from '../components/CollectionsFilter';
import LeftFilter from '../components/LeftFilter';
import Wrapper from  '../components/Wrapper';

const Collections = () => {
  return (
    <div class="collections">
        <CollectionsFilter />
        <Wrapper>
          <LeftFilter />
          <CardArea />
        </Wrapper>
        
    </div>
  )
}

export default Collections;