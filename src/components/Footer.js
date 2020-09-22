import React from 'react';
import { connect } from 'react-redux';
import './Footer.css'

function Footer({}) {


  return (
    
    <footer class="footer">
      <div class="container">
        <span class="text-muted">
           <ul>
             <li class="selected">
                <a href="/" rel="follow">1</a>
            </li>
            <li>
              <a href="/page=2" rel="follow">2</a>
            </li>
                <li class="next">
                  <a id="pagingNext" title="Siguiente" href="/&amp;page=2" rel="follow">
              <span class="txtPaging">Siguiente</span><span class="icon icon-arrow-right-full"></span>
              </a>
            </li>
          </ul>
        </span>
      </div>
    </footer>
  );
};




export default connect(null, {})(Footer);