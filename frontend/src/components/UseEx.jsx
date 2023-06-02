import React, { useEffect, useRef, useState } from 'react'

function UseEx() {
    // const [inp, setInp] = useState("")
    // const ref = useRef(0)
    // const inputRef = useRef(null)
    // useEffect(() => {
    //     ref.current = ref.current + 1;

    // }
    // )

    // return (
    //     <div>
    //         <input onChange={e => setInp(e.target.value)} ref={inputRef} type="text" name="" id="" />
    //         <div>My text in input - {inp}</div>
    //         <div>Number Render - {ref.current}</div>
    //         <button onClick={() => inputRef.current.focus()}>Test</button>
    //     </div>
    // )
    
        const intervalRef = useRef(null);
        const timerRef = useRef(0);
      
        useEffect(() => {
          intervalRef.current = setInterval(() => {
            timerRef.current += 1;
            console.log(`Timer: ${timerRef.current}`);
          }, 1000);
      
          return () => {
              clearInterval(intervalRef.current);
              console.log('work')
          };
        }, []);
      
        return <div>Timer: {timerRef.current}</div>;
      
     
}

export default UseEx
