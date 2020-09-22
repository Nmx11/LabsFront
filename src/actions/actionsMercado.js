export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';
export const DETAIL_PRODUCT = 'DETAIL_PRODUCT';
export const GET_MAYOR = 'GET_MAYOR';
export const GET_MENOR = 'GET_MENOR';
export const GET_NEW = 'GET_NEW';
export const GET_USED = 'GET_USED';
export const GET_NEXTPAGE = 'GET_NEXTPAGE';
export const GET_PREVIOUSPAGE = 'GET_NEXTPAGE';



export function onSearch(query) {
    return function (dispatch){
        return fetch(`https://nahuelmendez.herokuapp.com/api/search?query=${query}`)
        .then(res => res.json())
        .then((data) => {
            dispatch({ type: SEARCH_PRODUCTS, payload: data })
        })
    }
};

// Buscar todo
export function getAll() {
    return function(dispatch) {
        return fetch(`https://nahuelmendez.herokuapp.com/api/search/producto`, )
        .then(res => res.json())
        .then((data) => {
            if (data !== undefined) {
                dispatch({ type: GET_PRODUCTS, payload: data })
            }
        });
    }
};

function selectionSort(data) {
        
    for(var i = 0; i < data.length; i++){ 
        var min = i;
        for(var j = i + 1; j < data.length; j++){
            if(data[j].price < data[min].price){
                min = j;
            }
          }
          if(min !== i){
              var aux = data[i];
              data[i] = data[min];
              data[min] = aux;
          }
     }
     return data;
  
  }

export function getMenor() {
    return function(dispatch) {
        return fetch(`https://nahuelmendez.herokuapp.com/api/search/producto`)
        .then(res => res.json())
        .then((data) => {
            if (data !== undefined) {              
          
                dispatch({ type: GET_MENOR, payload: selectionSort(data) })
            }
        });
    }
};

function reversedSort(data) {

    var reversedArray = [];

    for(var i = 0; i < data.length; i++){ 
        var min = i;
        for(var j = i + 1; j < data.length; j++){
            if(data[j].price < data[min].price){
                min = j;
            }
          }
          if(min !== i){
              var aux = data[i];
              data[i] = data[min];
              data[min] = aux;
          }
     }
     
     for(var i = 0; i < data.length; i++){
        reversedArray.unshift(data[i])
     }

     return reversedArray;

  }

export function getMayor() {
    return function(dispatch) {
        return fetch(`https://nahuelmendez.herokuapp.com/api/search/producto`)
        .then(res => res.json())
        .then((data) => {
            if (data !== undefined) {               
         
                dispatch({ type: GET_MAYOR, payload: reversedSort(data) })
            }
        });
    }
};


export function getNew() {
    return function(dispatch) {
        return fetch(`https://nahuelmendez.herokuapp.com/api/search/producto`)
        .then(res => res.json())
        .then((data) => {
            if (data !== undefined) {                

                    var arrayNew = [];                
                
                    for(var i = 0; i < data.length; i++){
                      if(data[i].condition === 'new'){
                        arrayNew.push(data[i])
                      }
                    }

                dispatch({ type: GET_NEW, payload: arrayNew })
            }
        });
    }
};

export function getUsed() {
    return function(dispatch) {
        return fetch(`https://nahuelmendez.herokuapp.com/api/search/producto`)
        .then(res => res.json())
        .then((data) => {
            if (data !== undefined) {                

                    var arrayUsed = [];                
                
                    for(var i = 0; i < data.length; i++){
                      if(data[i].condition === 'used'){
                        arrayUsed.push(data[i])
                      }
                    }

                    if(arrayUsed < 1){
                        arrayUsed = data;
                    }

                dispatch({ type: GET_USED, payload: arrayUsed })
            }
        });
    }
};

var pageCache = [];

export function previousPage() {
        return function(dispatch, getState) {
            return fetch(`https://nahuelmendez.herokuapp.com/api/search/producto`, )
            .then(res => res.json())
            .then((data) => {
                if (data !== undefined) {

                    var estado = getState().productos.productos;

                    if(estado === pageCache){
                        arrayPreviousPage = pageCache;
                    }

                    if(estado.length > 20){
                        pageCache = estado;
                    }

                    var arrayPreviousPage = [];
                    
                    if(pageCache.length > 20) {
                        for(var i = 0; i < pageCache.length; i++){
    
                            arrayPreviousPage.push(pageCache[i])                      
                        
                         }
                    }  
    
                    dispatch({ type: GET_PREVIOUSPAGE, payload: arrayPreviousPage })
                }
            });
        }
    };

var pageCacheNext = [];

export function nextPage() {
    return function(dispatch, getState) {
        return fetch(`https://nahuelmendez.herokuapp.com/api/search/producto`, )
        .then(res => res.json())
        .then((data) => {
            if (data !== undefined) {

                var estado = getState().productos.productos;

                if(estado.length > 20){
                    pageCache = estado;
                }            
                
                var arrayNextPage = [];

                if(pageCache.length > 0 && pageCache.length < 30){
                    return;
                }
                
                if(pageCache.length > 30){

                    for(var i = 30; i < estado.length; i++){
                    
                        arrayNextPage.push(estado[i])
                    
                    }
                    
                } if(estado.length <= 20) {

                    pageCacheNext = estado;

                    for(var i = 0; i < estado.length; i++){
                        
                        arrayNextPage.push(estado[i])
                    
                    }
                 
                } if(estado === pageCacheNext){
                    arrayNextPage = pageCacheNext;
                }
                  
                  

                dispatch({ type: GET_NEXTPAGE, payload: arrayNextPage })
            }
        });
    }
};
