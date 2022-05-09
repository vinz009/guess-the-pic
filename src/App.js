import React, { useEffect, useState } from "react";

import "./App.css";
import jig from "./assets/images/jigglypuff-wink.png";
import wrong from "./assets/images/wrong.png";

    const random = Math.floor(Math.random() * 3) + 1;

	console.log(random);



function App() {
    const [items,setItems] = useState([
        {
            id: 1,
            state: false,
        },
        {
            id: 2,
            state: false,
        },
        {
            id: 3,
            state: false,
        },
    ]);



    function Lists({ id }) {

	const [state, setState] = useState("false")	
	const message = " ";
	
		function handleClick() {
			if(random === id) {
				setState("correct");

			}
			else {
				setState("wrong");
			}
			
		}

        return (
            <>
                <div
                    className={ `${state} m-2 h-24 w-24 rounded-3xl border-2 border-black bg-local text-4xl hover:bg-sky-700` }
                    onClick={() => handleClick()}
                >
                </div>
            </>
        );
    }

    return (
        <div>
            <div className="flex flex-col">
                <h1 className="mt-8 text-center text-4xl text-amber-50">
                    Guess the Pic!
                </h1>
                <div className="flex flex-wrap ">

				<Lists id={1} /> 
				<Lists id={2} /> 
				<Lists id={3} /> 


				</div>
                <div></div>
            </div>
        </div>
    );
}

export default App;
