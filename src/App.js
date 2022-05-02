import React, { useEffect, useState } from "react";

import "./App.css";
import jig from "./assets/images/jigglypuff-wink.png";
import wrong from "./assets/images/wrong.png";

function App() {

	const [data, setData] = useState(0);
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const itemList = items.map((x) => <Lists data={data}  key={x.toString()} id={x} />);

	const [random, setRandom] = useState(Math.floor(Math.random() * 10) + 1);
	//const random = Math.floor(Math.random() * 10) + 1;

	console.log(random);
	console.log(data);

	function handleClick (id) {
		if( random === id ) {
			setData(1);
		}
		console.log(id);
		console.log(data);
	}


    function Lists({ data, id }) {


        return (
            <>
                <div className="rounded-3xl m-2 hover:bg-sky-700 bg-local border-2 border-black w-24 h-24 text-4xl"
					id={id}
					onClick={ () => handleClick(Number(id))}
				>
                    {id}
                </div>
            </>
        );
    }

    return (
        <div>
            <div className="flex flex-col">
                <h1 className="text-4xl text-center text-amber-50 mt-8">Guess the Pic!</h1>
                <div className="flex flex-wrap ">
					{itemList}
				</div>
                <div></div>
            </div>
        </div>
    );
}

export default App;
