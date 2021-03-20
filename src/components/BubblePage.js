import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../helpers/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  

  useEffect(() => {

    axiosWithAuth()
    .get('/colors')
    .then(res => {
      setColorList(res.data)
      console.log("1. resolved color list data and setColorList data from Bubble page", res, colorList)
    })
    .catch(error => console.log('ERR_2: This error is from Bubble page fetchColors', error))
 }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};


export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
