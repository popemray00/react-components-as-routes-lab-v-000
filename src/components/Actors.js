import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      {<h1>Actors Page</h1>}
      <div>
        actors.forEach((name, i)) => {
          actors[i].name
        }
      </div>
    </div>
  );
};

export default Actors;
