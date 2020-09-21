import React, { useEffect, setState, getState, useState } from 'react';
import Product from './Product.js';
import store from '../store.js';
import Footer from './Footer.js';
import './Products.css';
import { connect } from 'react-redux';
import SearchBar1 from './searchMercado1';
import { getAll, getMayor, getMenor, getNew, getUsed, previousPage, nextPage } from '../actions/actionsMercado.js';

function Products({ productos, getMayor, getMenor, getNew, getUsed, previousPage, nextPage }) {

  

function handleChange(e) {


  if(e.target.value === 'new'){
    getNew()    
  }

  if(e.target.value === 'used'){
    getUsed()    
  }

  if(e.target.value === 'menor'){
    getMenor()    
  }

  if(e.target.value === 'mayor'){
    getMayor()    
  }

}

function handleClick1() {
  previousPage()
}

function handleClick2() {
  nextPage()
}


  if(productos.length === 0){

    return (
      
      <div>
       <SearchBar1/>
      </div>
   
      );
    
  }

  if(productos.length !== 0){
    return (
      <div className='productsBox'>

      <SearchBar1/>

        <div className="filtrar">
          <select onChange={handleChange}>
               <option value="" disabled selected>Filtrar</option>
              <option value="new">Nuevo</option>
              <option value="used">Usado</option>
              <option value="menor">Menor precio</option>
              <option value="mayor">Mayor precio</option>
          </select>
        </div>
     

      <div className='products'>
      
      {productos.slice(0, 30).map((p, index) => (

           <Product
           id={p.id}
           title={p.title}
           price = {p.price}
           thumbnail={p.thumbnail}
           currency_id ={p.currency_id}
           condition = {p.condition}
           available_quantity = {p.available_quantity}
         />
        ))}

      </div>

        <div className="paginas">
            <a className="paginasA">Páginas:</a>
            <button type="button" class="btn btn-success" onClick={handleClick1}>1
            </button>
            <button  type="button" class="btn btn-success" onClick={handleClick2}>2
            </button>
        </div>

      </div>
    );

  } else {
    return null;
  }
 
}

const mapStateToProps = (state) => {
  return {
      productos: state.productos.productos
  };
};

export default connect(mapStateToProps, { getMayor, getMenor, getNew, getUsed, previousPage, nextPage })(Products);