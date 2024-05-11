import React, { useContext } from 'react'
import "./Products.css"
import MainContext from "../../../context/context"
import Product from '../Product/Product'
import Loading from'../../../pages/Loading/Loading'



function Products() {
    const {data,loading}=useContext(MainContext)
  return (
    <div>
    {
        loading ? <Loading/> : <Product items ={data}/>
    }
    </div>
  )
}

export default Products