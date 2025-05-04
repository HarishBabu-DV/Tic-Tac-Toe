import React, { useEffect, useRef, useState } from 'react'

const TicTacToe = () => {
    const noOfSquares=[1,2,3,4,5,6,7,8,9];
    // const noOfCols=[...noOfRows];
    const [selectedChoice,setSelectedChoice]=useState('')
    const [isXTurn,setIsXTurn]=useState(false);
    const [isDisabled,setIsDisabled]=useState(false)
    const [isReady,setIsReady]=useState(false)
    const [elements,setElements]=useState([])
    const handleOnSubmit=()=>{
        selectedChoice === 'x' ? setIsXTurn(true) : setIsXTurn(false)
        setIsDisabled(true)
        setIsReady(true)
    }
    const chooseWinner=()=>{
        // if(elements[0]==elements[1]==elements[2]=='x'){

        // }
    }
    const handleOnClick=(i)=>{
        const temp=[...elements]
        temp[i]=isXTurn ? 'x':'o';
        setElements(temp)
        setIsXTurn(!isXTurn)
    }
    let a=1,b=1,c=1
    if(a==b==c==1)console.log('equal');
    
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
        { /* <table  className='mx-auto'>
            <tbody>
                {
                    noOfRows.map((row,index)=>(
                        <tr key={index}>
                            {
                                noOfCols.map((col,index)=>(
                                    <td className='size-[100px] bg-gray-50 text-center border-2 border-gray-700 text-5xl opacity-0' key={index} onClick={(e)=>{
                                        isXTurn ? setIsXTurn(false) : setIsXTurn(true)
                                        e.target.classList.add('opacity-[100%]')
                                        
                                    }}>
                                        { isReady &&  isXTurn ? 'o' : 'x'}
                                                                                     
                                    </td>
                                ))
                            }
                            
                        </tr>
                    ))
                }
            </tbody>

        </table> */}
        
        <div className='grid grid-cols-3 grid-rows-3 w-[330px] gap-y-3 m-2'>
            {
                noOfSquares.map((square,index)=>(
                    <div className='size-[100px] bg-gray-50 border-[2px] border-gray-500 ' onClick={()=>handleOnClick(index)
                    } key={index}>
                        <span>
                        { elements[index] }
                        </span>
                        
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default TicTacToe