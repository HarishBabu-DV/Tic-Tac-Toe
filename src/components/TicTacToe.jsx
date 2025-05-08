import React, { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast';
const TicTacToe = () => {

    const noOfSquares=[1,2,3,4,5,6,7,8,9];
    const [selectedChoice,setSelectedChoice]=useState(null)
    const [isXTurn,setIsXTurn]=useState(false);
    const [isChoiceContainerClosed,setIsChoiceContainerClosed]=useState(false)
    const [isReady,setIsReady]=useState(false)
    const [elements,setElements]=useState(Array(9).fill(null))
    const [winnerName,setWinnerName]=useState(null)
    const handleOnSubmit=()=>{
        if(selectedChoice === null){
            toast.error("Select your choice first")
        } else{
            selectedChoice === 'x' ? setIsXTurn(true) : setIsXTurn(false)
            setIsChoiceContainerClosed(true)
            setIsReady(true)
        }
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
                setWinnerName('X')
                setIsReady(false)
            }
            
        else if( ((elements[0] === 'o' && elements[1] === 'o' && elements[2] === 'o'))||
        ((elements[3] === 'o' && elements[4] === 'o' && elements[5] === 'o'))||
        ((elements[6] === 'o' && elements[7] === 'o' && elements[8] === 'o'))||
        ((elements[0] === 'o' && elements[3] === 'o' && elements[6] === 'o'))||
        ((elements[1] === 'o' && elements[4] === 'o' && elements[7] === 'o'))||
        ((elements[2] === 'o' && elements[5] === 'o' && elements[8] === 'o'))||
        ((elements[0] === 'o' && elements[4] === 'o' && elements[8] === 'o'))||
        ((elements[6] === 'o' && elements[4] === 'o' && elements[2] === 'o'))){
            setWinnerName('O')
            setIsReady(false)

        }
        else{
            if(elements.filter(element=>element!==null && element!==undefined).length === 9){
                setWinnerName('draw')
                setIsReady(false)
            } else return
        }
    }
    const handleOnClick=(i)=>{
        const temp=[...elements]
        if((elements.length === 10) || (temp[i]) ) {
            return
        }
        else{
            temp[i]=isXTurn ? 'x':'o';
            setElements(temp)
            setIsXTurn(!isXTurn)
        }
    }
    const handleReplay=()=>{
        setSelectedChoice(null)
        setElements([])
        setWinnerName(null)
        setIsChoiceContainerClosed(false)
    }

    useEffect(()=>{
        if(elements.length>=3){
            chooseWinner()
        }
    },[isXTurn])

    
    
    return (
    <section className='relative h-screen black-gradient py-10'>
        <div className={`choice-container ${isChoiceContainerClosed ? `scale-x-0 scale-y-0 transition-[scale] duration-400`:null}`}>
            <h2 className='text-2xl font-medium '>Pick your choice</h2>
            <div className='flex justify-center gap-8'>
                <div className='choice-symbol-with-radio '>
                    <label htmlFor="x" className='x-shape size-[100px] lg:size-[150px]' />
                    <input type="radio" name="x_or_o" id="x" value='x' checked={selectedChoice === 'x'}  onChange={e=>setSelectedChoice(e.target.value)} className='size-[30px] cursor-pointer'/>
                    
                </div>
                <div className='choice-symbol-with-radio '>
                    <label htmlFor="o" className='o-shape size-[100px] lg:size-[150px]'>
                        <div className='size-[50px] lg:size-[75px] rounded-full max-md:bg-gray-50 md:bg-[#f9fafbd5] md:backdrop-blur-[5px]' />

                    </label>
                    <input  type="radio" name="x_or_o" id="o" value='o' onChange={e=>setSelectedChoice(e.target.value)} checked={selectedChoice==='o'}  className='size-[30px] cursor-pointer'/>
                </div>
            </div>
            <div>
                <button className='play-button' onClick={handleOnSubmit}>Continue</button>
            </div>
        </div>
        <div className={`${!isChoiceContainerClosed ? `hidden`:null } h-full flex flex-col items-center justify-center gap-10`}>
            <h3 className={`${isXTurn ? `text-white bg-orange-500`: `text-orange-500 bg-white`} text-2xl px-4 py-1 font-semibold ${winnerName ? `opacity-0`:`opacity-100`} `}>{isXTurn ? 'X' : 'O'} Turn</h3>
            <div className='grid grid-cols-3 grid-rows-3 w-max '>
                {
                    noOfSquares.map((square,index)=>(
                        <div className='flex items-center justify-center  size-[95px] md:size-[120px] xl:size-[140px] border-[2px] border-gray-500 text-4xl font-bold' onClick={()=>{
                                if(isReady){
                                    handleOnClick(index)
                                }
                            }} key={index}
                        >
                            { 
                            
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
                        <h3 className='text-2xl font-bold text-green-500'>Winner is {winnerName}</h3>
                    ) : null
                }
            <div onClick={handleReplay}>
                <button className='play-button' >Replay</button>
            </div>
        </div>

    </section>
  )
}

export default TicTacToe