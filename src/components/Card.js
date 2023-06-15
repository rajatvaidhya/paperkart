import React from 'react'
import './Card.css'

const Card = (props) => {

  const handleAddCart = async() => {

    const token = localStorage.getItem('token');

    const response = fetch("http://localhost:5000/api/items/addItem", {
      method:'POST',
      headers : {
        "Content-Type":"application/json",
        "auth-token":token
      },
      body: JSON.stringify({Itemkey:props.Itemkey, title:props.item.title, image:props.item.image, description:props.item.description}),
    })

    alert("Added to Cart");
    console.log(response);
  }

  return (
    <div className='card'>
        <div className='card-design'>
            <img src={props.item.image} alt="card-image"/>

            <div style={{display:'flex', flexDirection:'row', marginTop:'1rem', alignItems:'baseline', justifyContent:'space-between'}}>
            <h2 style={{textAlign:'left', marginLeft:'2rem', fontSize:'2rem'}}>{props.item.title}</h2>
            <h2 style={{marginRight:'2rem', color:'green', fontSize:'1.7rem'}}>${props.item.price}</h2>

            </div>
            <h4 style={{textAlign:'left', marginLeft:'2rem', marginTop:'0.4rem', fontSize:'1.3rem'}}>{props.item.description}</h4>
            <button className="btn" style={{marginTop:'2rem', width:'90%', marginBottom:'2rem', fontSize:'1.3rem'}} onClick={handleAddCart}>
            <i className="fa-solid fa-cart-shopping" style={{marginRight:'1rem'}}></i>
            Add to Cart</button>
        </div>
    </div>
  )
}

export default Card