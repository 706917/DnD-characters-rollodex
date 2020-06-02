import React from 'react';
import './card.styles.css';

export const Card = (props) => (
         <div className="card-container">
           <img
             alt="entity"
             src={`https://robohash.org/${props.persone.id+5}?set=set3`}
           />
            <h2>{props.persone.name} </h2>
            <h3>City: {props.persone.address.city}</h3>
            <p>{props.persone.email}</p>
         </div>
       );