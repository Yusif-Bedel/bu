import React from 'react'

const CardItems = ({item}) => {
  return (
    <div style={{width:"100px"}} className="cardcontainer">
     <img style={{width:"100px"}} src={item.image} alt="" />
     <h4>{item.title}</h4>
     <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <span>{item.price}</span>
        <button>Add</button>
     </div>

    </div>
  )
}

export default CardItems