import React, { useState } from 'react'

export default function LuckPointSet() {
    const [checkPoint, setCheckPoint] = useState(20)
    const [errorMessage, setErrorMessage] = useState(null);
    const [disable, setDisable] = useState(false);

    const [p1Value, setP1Value] = useState(0);
    const [p2Value, setP2Value] = useState(0);
    const [p1Disable, setP1Disable] = useState(false);
    const [p2Disable, setP2Disable] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);

    const setPointNumber = () =>{
        setCheckPoint(Number(checkPoint))
        setDisable(true)
    }
    const setCheckPointValue= (e)=>{
        if(e.target.value > 0){
            setCheckPoint(e.target.value);
            setErrorMessage(null)
        }else{
            setErrorMessage("The Number should be a positive number!")
        }
    }
    const getRandomNumberInRange = (min, max) =>{
        min = Math.ceil(min);
        console.log(min, '...Min')
        max = Math.floor(max);
        console.log(max, '...Max')
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    } 

    const luckCheck = (player) =>{
        //Adding +1 with the CheckPoint Value, as JS Math.random() can generate the highest value too. Normally Math.random() function work the lower value of targeted value.
        let maxNumber = checkPoint+1;
        console.log(maxNumber, '...maxNumber')
        let minNumber = 0;
        const randomNumber = getRandomNumberInRange(minNumber, maxNumber);

        if(player==='p1'){
            setP1Value(randomNumber);
            setP1Disable(true);
            setP2Disable(false);
        }

        if(player==='p2'){
            setP2Value(randomNumber);
            setP2Disable(true);
            setP1Disable(false);
        }
        console.log(randomNumber, checkPoint, '.....Random and checkpoint value')
        if(randomNumber === checkPoint){
            setSuccessMessage(`Congratulations! ${player} won the game.`);
            setP1Disable(true);
            setP2Disable(true);
        }

    }

    const reset = () =>{
        
        setCheckPoint(20);
        setErrorMessage(null)
        setDisable(false)
        setP1Value(0);
        setP2Value(0);
        setP2Disable(false);
        setP1Disable(false);

        setSuccessMessage(null);
        setP1Disable(false);
        setP2Disable(false);
    }
 
  return (
    
    <div>
        <h3>SET LUCK CHECK POINT</h3>
        <h1 className='check-point' id='checkPointValue'>{checkPoint}</h1>

        <div className='form-area'>
                <div className='luck-value'>
                    Player-1 
                    <h2 className='player-one-value'>{p1Value}</h2>
                    <button 
                        onClick={() => luckCheck('p1')} 
                        disabled={p1Disable ? true : false}
                        className={p1Disable ? "disabled-sm-button" : "btn btn-purple" }
                        
                        >P-1</button>
                </div>
                <div className='luck-value'>
                    Player-2 
                    <h2 className='player-two-value'>{p2Value}</h2>
                    <button 

                    onClick={() => luckCheck('p2')}
                    disabled={p2Disable ? true : false}
                    className={p2Disable ? "disabled-sm-button" : "btn btn-purple" }
                    >P-2</button>
                </div>

        </div>
        {
            errorMessage && 
            <p className='error-message'>{errorMessage}</p>
        }
        {
            successMessage && 
            <p className='success-message'>{successMessage}</p>
        }
        <form className='form-area'>
            <input 
                type="number" 
                name='checkpoint' 
                id='checkpoint' 
                placeholder='20'
                onChange={(e)=>setCheckPointValue(e)} 
                disabled={disable ? true : false}
                className={disable ? "disable-input" : ""}
                />
            <button 
                onClick={setPointNumber} 
                disabled={disable ? true : false}
                className={disable ? "disabled-button" : "btn_primary btn_v_long" } 
                type="submit" value="Submit">SET</button>
        </form>
        <button onClick={reset} className='button-reset' >reset</button>
    </div>
  )
}
