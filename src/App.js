import React, { useEffect, useState } from "react";

import "./App.css";
import jig from "./assets/images/jigglypuff-wink.png";

const random = Math.floor(Math.random() * 3) + 1;

console.log(random);



	const initialList = [
		{ id: 1, state: "" },
		{ id: 2, state: "" },
		{ id: 3, state: "" },
	];

function App() {

	
    const wrong = ["isa pa", "try again", "nope"];
    const [mesa, setMesa] = useState("");
    const [state, setState] = useState("");

	const correct = "korek ka dyan pare";

	const stat = ["wrong","correct"];

	const [data, setData] = useState(initialList);

	function mes () {
		setMesa("wow");
		console.log(mesa);
	}

    function handleClick(itemId) {
		setData(data.map(indi => {
			if( indi.id === itemId && random === itemId) {
				return {
					...indi,
					state: stat[1] 
				};
			} 
			if( indi.id === itemId && random !== itemId) {
				return {
					...indi,
					state: stat[0] 
				};
			}
			else {
				return indi;
			}
		})) 
			
    }

	const lists = data.map( item => 

                <div
					key={item.id}
                    className={`${item.state} m-2 h-24 w-24 cursor-pointer rounded-3xl border-2 border-black bg-local text-4xl hover:bg-sky-700`}
                    onClick={() => {
                        handleClick(item.id);
						mes();
                   		}
					}
                >
				</div>
	);

    return (
        <div>
            <div className="flex flex-col">
                <h1 className="mt-8 text-center text-4xl text-amber-50">
                    Guess the Pic!
                </h1>
                <div className="flex flex-wrap ">
				{lists}
                </div>
                <button
                    className="border-2"
                    onClick={() => window.location.reload()}
                >
                    Reload
                </button>
            </div>
			<div>
			{mesa}
			</div>
        </div>
    );
}

export default App;
