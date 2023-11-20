import React, {useRef} from 'react'

const ejemplo1 = () => {

    const myRef = useRef()

    const handleClick = () => {
        myRef.current.style.backgroundcolor = 'blue'
    }

  return (
    <div>
        <div ref={myRef} >Este div es fachero</div>
        <button onClick={handleClick}>cambia de color</button>
    </div>
  )
}

export default ejemplo1