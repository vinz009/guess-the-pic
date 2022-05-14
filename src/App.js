import React, { useEffect, useState } from "react";

import "./App.css";

const random = Math.floor(Math.random() * 3) + 1;

console.log(random);

const initialList = [
    { id: 1, state: "", inc: "", ev: 0 },
    { id: 2, state: "", inc: "", ev: 0 },
    { id: 3, state: "", inc: "", ev: 0 },
];


function App() {
    const stat = ["wrong", "correct"];

    const [data, setData] = useState(initialList);

    //index func
    const [inc, setInc] = useState(0);
    const [index, setIndex] = useState("");
    const wrong = ["", "isa pa", "try again", "nope", "bagong pilipinas"];
    const correct = ["korek ka dyan pare", "Yes po tama", "Panalo", "Correct"];
    const [word, setWord] = useState(wrong);

    useEffect(() => {
        if (index === random) {
            setWord(correct[inc]);
        } else {
            setWord(wrong[inc]);
        }
    }, [index, inc]);

    function message(itemId) {
        setIndex(itemId);

        const ll = data.map((e) => e.ev);
        const hh = ll.indexOf(1) + 1;
        console.log(hh);

        if (inc === 3) {
            setInc(1);
        } else {
            setInc(inc + 1);
        }
    }

    function handleClick(itemId) {
        setData(
            data.map((indi) => {
                if (indi.id === itemId && random === itemId) {
                    return {
                        ...indi,
                        state: stat[1],
                        inc: "sakto",
                        ev: 1,
                    };
                }
                if (indi.id === itemId && random !== itemId) {
                    return {
                        ...indi,
                        state: stat[0],
                    };
                } else {
                    return indi;
                }
            })
        );
    }

    const lists = data.map((item) => (
        <div
            key={item.id}
            className={`${item.state} m-2 h-24 w-24 cursor-pointer rounded-3xl border-2 border-black bg-local text-4xl hover:bg-sky-700`}
            onClick={() => {
                handleClick(item.id);
                message(item.id);
            }}
        ></div>
    ));

    return (
        <div>
            <div className="flex flex-col">
                <h1 className="mt-8 text-center text-4xl text-amber-50">
                    Guess the Pic!
                </h1>
                <div className="flex flex-wrap ">{lists}</div>
                <button
                    className="border-2"
                    onClick={() => window.location.reload()}
                >
                    Reload
                </button>
            </div>
            {word}
            <div></div>
        </div>
    );
}

export default App;
