import React, { useEffect, useRef, useState } from 'react'
import appData from '../assets/assets';
const TicTacToe = () => {

    const { XIcon,OIcon}=appData.icons
    const noOfSquares=[1,2,3,4,5,6,7,8,9];
    const [selectedChoice,setSelectedChoice]=useState('')
    const [isXTurn,setIsXTurn]=useState(false);
    const [isDisabled,setIsDisabled]=useState(false)
    const [isReady,setIsReady]=useState(false)
    const [elements,setElements]=useState(Array(9).fill(null))
    const [winnerName,setWinnerName]=useState(null)
    const handleOnSubmit=()=>{
        selectedChoice === 'x' ? setIsXTurn(true) : setIsXTurn(false)
        setIsDisabled(true)
        setIsReady(true)
    }
    const chooseWinner=()=>{
        
            if(
                ((elements[0] === 'x' && elements[1] === 'x' && elements[2] === 'x'))||
                ((elements[3] === 'x' && elements[4] === 'x' && elements[5] === 'x'))||
                ((elements[6] === 'x' && elements[7] === 'x' && elements[8] === 'x'))||
                ((elements[0] === 'x' && elements[3] === 'x' && elements[6] === 'x'))||
                ((elements[1] === 'x' && elements[4] === 'x' && elements[7] === 'x'))||
                ((elements[2] === 'x' && elements[5] === 'x' && elements[8] === 'x'))||
                ((elements[0] === 'x' && elements[4] === 'x' && elements[8] === 'x'))||
                ((elements[6] === 'x' && elements[4] === 'x' && elements[2] === 'x'))
            ){
                setWinnerName('x')
            }
            
        else if( ((elements[0] === 'o' && elements[1] === 'o' && elements[2] === 'o'))||
        ((elements[3] === 'o' && elements[4] === 'o' && elements[5] === 'o'))||
        ((elements[6] === 'o' && elements[7] === 'o' && elements[8] === 'o'))||
        ((elements[0] === 'o' && elements[3] === 'o' && elements[6] === 'o'))||
        ((elements[1] === 'o' && elements[4] === 'o' && elements[7] === 'o'))||
        ((elements[2] === 'o' && elements[5] === 'o' && elements[8] === 'o'))||
        ((elements[0] === 'o' && elements[4] === 'o' && elements[8] === 'o'))||
        ((elements[6] === 'o' && elements[4] === 'o' && elements[2] === 'o'))){
            setWinnerName('o')
        }
        else{
            if(elements.filter(element=>element!==null).length === 9){
                setWinnerName('draw')
            } else return
        }
    }
    const handleOnClick=(i)=>{
        if(elements.length === 10) return
        const temp=[...elements]
        temp[i]=isXTurn ? 'x':'o';
        setElements(temp)
        setIsXTurn(!isXTurn)
    }
    const handleReplay=()=>{
        setIsDisabled(false)
        setSelectedChoice('')
        setElements([])
        setWinnerName(null)
    }

    useEffect(()=>{
        if(elements.length>=3){
            chooseWinner()
        }
    },[isXTurn])
    console.log(elements);
    
    
    return (
    <div>
        <div className='bg-gray-50 border-[1px] border-gray-700 space-y-2 p-2'>
            <h2 className='text-2xl font-medium'>Pick your choice</h2>
            <div >
                <div className='flex items-center gap-2'>
                    <input type="radio" name="x_or_o" id="x" value='x' checked={selectedChoice === 'x'} disabled={isDisabled} onChange={e=>setSelectedChoice(e.target.value)}/>
                    <label htmlFor="x" className='text-xl'>X</label>
                </div>
                <div className='flex items-center gap-2'>
                    <input  type="radio" name="x_or_o" id="o" value='o' onChange={e=>setSelectedChoice(e.target.value)} checked={selectedChoice==='o'} disabled={isDisabled}/>
                    <label htmlFor="o" className='text-xl'>O</label>
                </div>
                <div>
                    <button className='bg-black text-white px-4 py-1 rounded-[5px] disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed' disabled={isDisabled} onClick={handleOnSubmit}>Ok</button>
                </div>
            </div>
        </div>
        
        <div className='grid grid-cols-3 grid-rows-3 w-max'>
            {
                noOfSquares.map((square,index)=>(
                    <div className='flex items-center justify-center  size-[95px] md:size-[120px] xl:size-[140px] bg-black border-[2px] border-gray-500 text-4xl font-bold' onClick={()=>{
                            if(isReady){
                                handleOnClick(index)
                            }
                        }} key={index}
                    >
                        { 
                            isReady && 
                            elements[index]==='x' ? (
                                <div className='x-shape'></div>
                            ) :(elements[index] === 'o' ? <div className='o-shape'>
                                    <div className='size-[25px] rounded-full bg-black'>

                                    </div>
                                </div> :null)
                            
                        }
                      
                    </div>
                ))
            }
        </div>
       
            {
                winnerName!==null ? winnerName === 'draw' ? (
                    <h3 className='text-2xl text-yellow-500'>Match draw </h3> 
                ) :(
                    <h3 className='text-2xl text-green-500'>Winner is {winnerName}</h3>
                ) : null
            }
        <div>
            <button className='bg-black text-white px-4 py-1 rounded-[5px] ml-2' onClick={handleReplay}>Replay</button>
        </div>
    </div>
  )
}

export default TicTacToe