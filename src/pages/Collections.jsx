import React from 'react'
import CardArea from '../components/CardArea';
import "../assets/css/Collections.css";
import CollectionsFilter from '../components/CollectionsFilter';
const Collections = () => {
  return (
    <div class="collections">
        <CollectionsFilter />
        <CardArea />
    </div>
  )
}

export default Collections;
