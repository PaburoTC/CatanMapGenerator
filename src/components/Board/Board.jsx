import React, {useState, useEffect} from 'react';
import './Board.css';
import Terrain from "../Terrain/Terrain";

const Board = () =>{
    const [terrains] = useState([
        0,0,0,0,    //Wood
        1,1,1,1,    //Wool
        2,2,2,2,    //Wheat
        3,3,3,      //Clay
        4,4,4,      //Stone
        5           //Dessert
    ]);

    const [numbers] = useState([
        2,3,3,4,4,5,5,6,6,8,8,9,9,10,10,11,11,12
    ]);

    const [board]     = useState(()=>{
        let board = []
        shuffle(terrains);
        shuffle(numbers);
        for(let i=0; i<19; i++){
            const terrain = terrains.pop()
            board.push({'terrain':terrain, 'position':i, 'number':terrain === 5 ? '':numbers.pop()})
        }
        return board
    });

    //Fisher-Yates Shuffle
    function shuffle(list) {
        let currentIndex = list.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = list[currentIndex];
            list[currentIndex] = list[randomIndex];
            list[randomIndex] = temporaryValue;
        }

        return list;
    }

    /***
     * componentDidMount
     */
    useEffect(()=>{
        /***
         * componentWillUnmount
         */
        return ()=>{

        }
    },[]);

    return (
        <div id={'board'}>
            {board.map(terrain => <Terrain terrain={terrain.terrain} class={terrain.position} number ={terrain.number} key={terrain.position}/>)}
        </div>
    )
}

export default Board;