import { useState } from "react";
import Icon from "./Components/Icon";
// toastify import
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import "./style.css"

const ticTacToeArray = new Array(9).fill("")
const App = () => {
    const [isCross, setIsCross] = useState(true);
    const [winMessage, setWinMessage] = useState("");

    // playAgain  
    function playAgain(){
        console.log("Play Again is executed")
        ticTacToeArray.fill("");
        setIsCross(true);
        setWinMessage("");
    }

    // findWinner
    // 0,1,2  3,4,5   6,7,8
    function findWinner() {
        // row
        for(let i = 0;i<=6; i=i+3){
            if(ticTacToeArray[i] == ticTacToeArray[i+1] && ticTacToeArray[i] == ticTacToeArray[i+2] && ticTacToeArray[i] != ""){
                setWinMessage(ticTacToeArray[i] + " has won");
            }
        }

        // column => 0,3,6  1,4,7  2,5,8

        for(let i = 0;i<=2; i=i+1){
            if(ticTacToeArray[i] == ticTacToeArray[i+3] && ticTacToeArray[i] == ticTacToeArray[i+6] && ticTacToeArray[i] != ""){
                setWinMessage(ticTacToeArray[i] + " has won");
            }
        }

        // diagonal => 0,4,8  2,4,6
        if(ticTacToeArray[0] == ticTacToeArray[4] && ticTacToeArray[0] == ticTacToeArray[8] && ticTacToeArray[0] != ""){
            setWinMessage(ticTacToeArray[0] + " has won");
        }

        if(ticTacToeArray[2] == ticTacToeArray[4] && ticTacToeArray[2] == ticTacToeArray[6] && ticTacToeArray[2] != ""){
            setWinMessage(ticTacToeArray[2] + " has won");
        }
        
        // draw condition pending
        if(!ticTacToeArray.includes("")){
            setWinMessage("Game is draw");
        }
        
    }

    // changeItem

    function changeItem(index){
        // console.log("Change Item is executed")
        // game over case 
        if(winMessage){
            return toast.error("Game is already over");
        }


        if(ticTacToeArray[index] != ""){
            return toast.error("Allready filled");
        }
        else if(ticTacToeArray[index] == ""){
             ticTacToeArray[index] =  isCross==true? "cross" : "circle"
             setIsCross(!isCross);
             findWinner();         
        }
        // console.log(ticTacToeArray)
        
    }
    return (
        <div className="tic">
            <ToastContainer position="bottom-center" autoClose={5000} />
            <h1 className="top-heading">Tic Tac Toe</h1>
            {
                winMessage==""? (
                   isCross==true? (
                    <h2 className="heading-chance">Cross Chance</h2>
                   ) : (
                    <h2 className="heading-chance">Cross Chance</h2>
                   )
                ) : 
                (
                   <div className="gameOver"> 
                      <h1>{winMessage}</h1>
                      <button onClick={playAgain}>Play Again</button>
                   </div> 
                )
            }
            <div className="grid">
               {
                ticTacToeArray.map((value, index)=>(
                    <div onClick={()=>{changeItem(index)}}>
                        <Icon displayIcon={ticTacToeArray[index]}/>
                    </div>
                ))
               }
            </div>
        </div>
    );
}

export default App;