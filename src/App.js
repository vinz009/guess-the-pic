import React, { useEffect, useState } from "react";

import "./App.css";
import { itemList } from "./components/items.js";
import Main from "./components/main.js";
import Message from "./components/message.js";
import List from "./components/list.js";

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
        <Main>
            <Message word={word} />
            <List lists={lists} />
        </Main>
    );
}

export default App;
