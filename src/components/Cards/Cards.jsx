import React from 'react'
import Card from '../Card/Card'
import Loading from '../../pages/Loading/Loading'
import { useContext } from "react";
import MainContext from '../../context/context';
const Cards = () => {
  const {data,loading}=useContext(MainContext)
  return (
    <div style={{padding:"100px 0px"}}>
        {
            loading ? <Loading/> : <Card items={data}/>
        }
    </div>
  )
}

export default Cards