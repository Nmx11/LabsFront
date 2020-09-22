  
import React, { useState } from "react";
import { connect } from 'react-redux';
import { onSearch } from '../actions/actionsMercado.js';

import './searchMercado1.css';


function SearchBar1({onSearch}) {

  const [name, setName] = useState("");
  const path = document.getElementsByClassName('icono')


      
  return (
    <div id="cover">
  <form method="get" action="" 
    onSubmit={
        e => {
          e.preventDefault();
          onSearch(name);
        }}> 
    <div class="tb">
      <div class="td">
          <input type="text" placeholder="Que buscás?" onChange={e => setName(e.target.value)} required ></input>
        </div>
      <div class="td" id="s-cover">
        <button className="button1"type="submit">
          <div id="s-circle"></div>
          <span></span>
        </button>
      </div>
    </div>
  </form>
</div>

  );
}

export default connect(null,{onSearch})(SearchBar1)
