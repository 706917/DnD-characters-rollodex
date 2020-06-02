import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component';


export const CardList = (props) => (
         <div className="card-list">
           {props.family.map((persone) => (
               <Card key={persone.id} persone={persone}/>
           ))}
         </div>
       );