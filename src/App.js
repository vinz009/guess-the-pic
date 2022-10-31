import React, { useEffect, useState } from "react";


import "./App.css";
import { itemList } from "./components/items.js";
import Main from "./components/main.js";
import Message from "./components/message.js";
import List from "./components/list.js";
import  increment  from "./util/increment.js";
import {  ShakeHard } from "reshake";

const random = Math.floor(Math.random() * 9) + 1;

console.log(random);

function App() {
    const stat = ["wrong", "correct"];
    const [data, setData] = useState(itemList);
    const [inc, setInc] = useState(0);
    const [index, setIndex] = useState("");
    const wrong = ["", "Isa Pa", "Try Again", "Nope", "Wrong"];
    const correct = ["Korek Ka Dyan Pare", "Yes Po Tama", "Panalo", "Correct"];
    const [word, setWord] = useState(wrong);

    useEffect(() => {
        if (index === random) {
           setWord(correct[inc]);
      } else {
            setWord(wrong[inc]);
        }
    }, [index, word,  inc]);

    /**
     * message.
     *
     * @param {number} itemId - return index of onClick event.
     */
    function message(itemId) {
        setIndex(itemId);
		setInc(increment(inc));
    }

    /**
     * handleClick. onClick event.
     *
     * @param {number} itemId - return index of onClick event.
     */
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
	<ShakeHard>
        <div
            key={item.id}
            className={`${item.state}  m-2 h-24 w-24 cursor-pointer rounded-3xl border-2 border-black bg-local text-4xl hover:bg-sky-700`}
            onClick={() => {
                handleClick(item.id);
                message(item.id);
            }}
        ></div>
	</ShakeHard>
    ));

    return (
        <Main>
            <Message word={word} />
            <List lists={lists} />
        </Main>
    );
}

export default App;
