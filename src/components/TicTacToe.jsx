import React, { useEffect, useRef, useState } from 'react'

const TicTacToe = () => {
    const noOfRows=[1,2,3];
    const [selectedChoice,setSelectedChoice]=useState('')
    const [isXTurn,setIsXTurn]=useState(false);
    const [isDisabled,setIsDisabled]=useState(false)
    const [isReady,setIsReady]=useState(false)
    const [isVisible,setIsVisible]=useState(false)
    const handleOnSubmit=()=>{
        selectedChoice === 'x' ? setIsXTurn(true) : setIsXTurn(false)
        setIsDisabled(true)
        setIsReady(true)
    }
    console.log(selectedChoice);
   
    const handleOnSquareClick=()=>{
       isXTurn ? setTimeout(()=>setIsXTurn(false),500) : setIsXTurn(()=>setIsXTurn(true),500)
    }
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
        <table  className='mx-auto'>
            <tbody>
                {
                    noOfRows.map((row,index)=>(
                        <tr key={index}>
                            <td className='size-[100px] bg-gray-50 text-center border-2 border-gray-700 text-5xl'>
                                {
                                    isReady &&(
                                        <span onClick={()=>{
                                            setIsVisible(true)
                                            isXTurn ? setTimeout(()=>setIsXTurn(false),500) : setIsXTurn(()=>setIsXTurn(true),500)
                                        }}>
                                            { isVisible && isXTurn ? 'x' : 'o'}
                                        </span>
                                    
                                    )    
                                }
                            </td>
                            <td className='size-[100px] bg-gray-50 text-center border-2 border-gray-700 text-5xl'>
                            {
                                    isReady &&(
                                        <span onClick={()=>{
                                            setIsVisible(true)
                                            isXTurn ? setTimeout(()=>setIsXTurn(false),500) : setIsXTurn(()=>setIsXTurn(true),500)
                                        }} className={`${isVisible ?  `inline` :`hidden`}`}>
                                            {isXTurn ? 'x' : 'o'}
                                        </span>
                                    )    
                                }
                            </td>
                            <td className='size-[100px] bg-gray-50 text-center border-2 border-gray-700 text-5xl'>
                            {
                                    isReady &&(
                                        <span onClick={()=>{
                                            setIsVisible(true)
                                            isXTurn ? setTimeout(()=>setIsXTurn(false),500) : setIsXTurn(()=>setIsXTurn(true),500)
                                        }} className={`${isVisible ?  `inline` :`hidden`}`}>
                                            {isXTurn ? 'x' : 'o'}
                                        </span>
                                    )    
                                }
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      
    </div>
  )
}

export default TicTacToe