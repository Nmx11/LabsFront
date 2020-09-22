import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAll } from '../actions/actionsMercado.js';
import './ProductDetail.css'

function ProductDetail ({ id, productos, getAll }) {
  

useEffect(()=>{getAll()},[getAll])   


  var title = '';
  var price = '';
  var currency_id = '';
  var available_quantity = 0;
  var thumbnail = '';
  var condition = '';
  

  for(let i = 0; i < productos.length; i++){
    if(productos[i].id === id){
      title = productos[i].title;
      price = productos[i].price;
      currency_id = productos[i].currency_id;
      available_quantity = productos[i].available_quantity;
      thumbnail = productos[i].thumbnail;
      condition = productos[i].condition;    
    }
  }

  return (
    <div>

      <div className="mi-contenedor">
        <div className="img-container">
          <img src={thumbnail} alt="Imagen en detalle"/>
        </div>
        <div className="data-container">

      
          <div className="nombre-container">
            <h2>{title}</h2>
          </div>

          
          <div className="precio-container">
            <h4>$ {price}</h4>
          </div>
          <div className="info-container">
             <p>Moneda: {currency_id}</p>
            <p>Condición: {condition}</p>
            <h5>Stock: {available_quantity}</h5>
          </div>
        </div>           
      </div>

    </div>
  )
};


function mapStateToProps(state){
  return {
      productos: state.productos.productos,
  }
}

export default connect (mapStateToProps,{ getAll })(ProductDetail)