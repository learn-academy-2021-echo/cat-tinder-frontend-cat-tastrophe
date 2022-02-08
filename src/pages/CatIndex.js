import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

 class CatIndex extends Component {
  
  
  render() {
    
    return (
        <div className="catindex">  
             <h3 className="indexheader">Hot local cats in your area</h3> 
             
          
            {this.props.cats && this.props.cats.map(cat => {
              return(
                <p key={cat.id}>
                <NavLink className="link" to={`/catshow/${cat.id}`}> {cat.name} <br></br>
                <img className="catimage" src={cat.image}></img>
                 
                </NavLink> 
                </p>
              )
            })}
        </div>
    )
  }
}
export default CatIndex 