
import React, { useEffect, useState } from 'react';

import './App.css';
import jig from './jig.png';


function App() {

const items = [1,2,3,4,5,6,7,8,9];

const itemList = items.map( x => 
	<div className="border-black w-24 h-24 text-4xl"
		key={x}>
	{x}
	</div>
);






  return (
  <div>
  	<div className="flex flex-col">
	  <h1 className="text-center text-amber-50">Guess the Pic!</h1>
	  <div className="flex">
		  {itemList}
	  </div>
		<div>
			<img src={jig} alt="pokemaks" />
		</div>
		
	</div>
  </div>

  );
}

export default App;
