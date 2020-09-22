import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import defecto from '../images/default.jpg';
import {Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css';


export function Product ({ productos, id, title, price, currency_id, available_quantity, thumbnail, condition}) {



  return (

    <div>
     
      <Card className="card" style={{ width: '18rem' }}>
         <Link to={`producto/detail/${id}`}>
           <Card.Img variant="top" src={thumbnail || defecto} style={{ width: '17.9rem', height: '18rem'}}/>
        </Link>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
          <Card.Text>
            <a title="Ver" >
              <h6 className="card-title" style={{color: '#000'}}>Precio: {price}</h6>
            </a>
            <a title="Ver" >
              <h6 className="card-title" style={{color: '#000'}}>Moneda: {currency_id}</h6>
            </a>
            <a title="Ver" >
              <h6 className="card-title" style={{color: '#000'}}>condición: {condition}</h6>
            </a>
            <a title="Ver" >
              <h6 className="card-title" style={{color: '#000'}}>stock: {available_quantity}</h6>
            </a>
          </Card.Text>
          <Link to={`producto/detail/${id}`}>
            <Button variant="primary">Ver producto</Button> 
          </Link>
        </Card.Body>
      </Card>

  </div>
  )
};

const mapStateToProps = (state) => {
  return {
    productos: state.productos.productos
  }
};


export default connect(mapStateToProps, {})(Product)
